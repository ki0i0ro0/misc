import SuperJSON, { type SuperJSONResult } from "superjson";

function convertSearchParams(
  params: Record<string, string | number | boolean | Date | undefined>
) {
  const query = new URLSearchParams();
  Object.keys(params).forEach((key) => {
    if (params[key] !== undefined) {
      if (params[key] instanceof Date) {
        query.append(key, params[key].toISOString());
      } else {
        query.append(key, params[key].toString());
      }
    }
  });
  return query;
}

export default function fetchForRouteHandlers<T>(
  url: string,
  searchParams?: Record<string, string | number | boolean | Date | undefined>
): Promise<T> {
  return fetch(
    `${url}${searchParams ? `?${convertSearchParams(searchParams)}` : ""}`
  ).then((res) =>
    res.json().then((data: SuperJSONResult) => SuperJSON.deserialize<T>(data))
  );
}
