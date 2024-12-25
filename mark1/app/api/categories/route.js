import db from "../../../lib/db.js";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    console.log("Request Data:", { title, description });
    console.log("DB Instance:", db);

    const category = await db.category.create({
      data: {
        title,
        description,
      },
    });
    console.log("Created Category:", category);
    return NextResponse.json(category);
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      {
        error: error.message || "Unknown Error",
        message: "Failed to create a category",
      },
      { status: 500 }
    );
  }
}
