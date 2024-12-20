import { NextResponse } from "next/server";

export async function POST(request) {
  try {

    {
      /* title,
      categoryId,
      sku,
      barcode,
      qty,
      unitId,
      brandId,
      buyingPrice,
      sellingPrice,
      supplierId,
      reOrderPoint,
      warehouseId,
      itemWeight,
      itemDimension,
      taxRate,
      notes,
      description, */
    }
    const data = await request.json();
     
    console.log(data);
    return NextResponse.json(data);
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
