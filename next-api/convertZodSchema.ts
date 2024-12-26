import { logger } from "@hr4c-chat/logging";
import { NextRequest, NextResponse } from "next/server";
import { z, type ZodSchema } from "zod";
import getUserFromHeaders from "~/server/common/getUserFromHeaders";

function searchParamsToValues(
  searchParams: URLSearchParams
): Record<string, unknown> {
  return Array.from(searchParams.keys()).reduce(
    (record, key) => {
      const values = searchParams.getAll(key);
      return { ...record, [key]: values.length > 1 ? values : values[0] };
    },
    {} as Record<string, unknown>
  );
}

function makeSearchParamsObjSchema<T extends ZodSchema>(schema: T) {
  return z
    .instanceof(URLSearchParams)
    .transform(searchParamsToValues)
    .pipe(schema);
}

export default async function convertZodSchema<T extends ZodSchema>(
  schema: T,
  req: NextRequest,
  next: (reqValue: z.infer<T>) => Promise<NextResponse>
) {
  const parsed =
    req.method === "POST"
      ? schema.safeParse(await req.json())
      : makeSearchParamsObjSchema(schema).safeParse(req.nextUrl.searchParams);
  if (!parsed.success) {
    const sessionInfo = await getUserFromHeaders();
    logger.warn(
      {
        warn: {
          message: parsed.error.message,
          url: req.url,
          user: `${sessionInfo.userId}(${sessionInfo.userType})`,
        },
      },
      "Bad Request"
    );
    return NextResponse.json({ error: "Bad Request" }, { status: 400 });
  }
  return next(parsed.data as z.infer<T>);
}
