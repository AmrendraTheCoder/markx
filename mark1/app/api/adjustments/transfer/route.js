import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { transferStockQty, givingWarehouseId, receivingBranchId, notes } =
      await request.json();
    const adjustments = {
      transferStockQty,
      givingWarehouseId,
      receivingBranchId,
      notes,
    };
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
