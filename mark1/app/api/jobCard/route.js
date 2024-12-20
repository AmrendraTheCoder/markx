import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, location, type, description } = await request.json();
    const item = { title, location, type, description };
    console.log(item);
    return NextResponse.json(item);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a Item",
      },
      { status: 500 }
    );
  }
}
