// app/api/demo/track/route.ts

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("Tracking event received:", body);

    return NextResponse.json(
      { message: "Event tracked successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid tracking payload" },
      { status: 400 }
    );
  }
}