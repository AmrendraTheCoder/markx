import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { addStockQty, receivingWarehouseId, notes } = await request.json();
    const adjustments = { addStockQty, receivingWarehouseId, notes };
    console.log(adjustments);
    return NextResponse.json(adjustments);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create the Adjustment",
      },
      { status: 500 }
    );
  }
}
