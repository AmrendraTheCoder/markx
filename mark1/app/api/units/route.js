import db from "../../../lib/db.js";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, abbreviation } = await request.json();
    console.log("Request Payload:", { title, abbreviation });

    const unit = await db.unit.create({
      data: {
        title,
        abbreviation,
      },
    });

    console.log("Created Unit:", unit);
    return NextResponse.json(unit);
  } catch (error) {
    console.error("Error Occurred:", error?.message || "No error message");
    console.error("Error Stack:", error?.stack || "No error stack");

    return NextResponse.json(
      {
        error: error?.message || "An unknown error occurred",
        message: "Failed to create a Unit",
      },
      { status: 500 }
    );
  }
}
