// export const dynamic = "force-dynamic"; // defaults to auto
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ msg: "helloe" }, { status: 200 });
}
