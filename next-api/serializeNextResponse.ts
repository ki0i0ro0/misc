import { NextResponse } from "next/server";
import SuperJSON from "superjson";

export default function serializeNextResponse<T>(value: T) {
  return NextResponse.json(SuperJSON.serialize(value));
}
