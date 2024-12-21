"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import { ChevronDown, Plus, X } from "lucide-react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import React, { useState } from "react";
import TextInput from "@/components/FormInput/TextInput";
import SubmitButton from "@/components/FormInput/SubmitButton";
import TextareaInput from "@/components/FormInput/TextAreaInput";
import SelectInput from "@/components/FormInput/SelectInput";

function NewItem() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const categoryTypes = [
    { label: "Electronics", value: "habffajn009938masfd" },
    { label: "Clothes", value: "advavca387467dsn" },
  ];

  const unitsType = [
    { label: "Kg", value: "habffajn009938masfd" },
    { label: "Pcs", value: "advavca387467dsn" },
  ];

  const brandType = [
    { label: "HP", value: "habffajn009938masfd" },
    { label: "Dell", value: "advavca387467dsn" },
  ];

  const warehouseList = [
    { label: "Lucknow", value: "habffajn009938masfd" },
    { label: "Delhi", value: "advavca387467dsn" },
    { label: "Mumbai", value: "advavca387467dsn" },
  ];

  const supplierList = [
    { label: "Lucknow", value: "habffajn009938masfd" },
    { label: "Delhi", value: "advavca387467dsn" },
    { label: "Mumbai", value: "advavca387467dsn" },
  ];

  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    console.log(data);
    setLoading(true);
    const baseUrl = "http://localhost:3001";
    try {
      const response = await fetch(`${baseUrl}/api/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log(response);
        reset(); // reset the form after successful submission
      } else {
        console.error("Failed to submit data:", response);
      }
    } catch (error) {
      console.log("Error occurred while submitting:", error);
    } finally {
      setLoading(false); // always stop loading after the submission attempt
    }
  }

  return (
    <div>
      {/* Header */}
      <FormHeader title="New Item" href="/inventory/inventory/" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-6"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Item Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            name="categoryId"
            label="Select the Item Category"
            register={register}
            className="w-full"
            options={categoryTypes}
          />
          <TextInput
            label="Item SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Item Barcode"
            name="barcode"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Item Quantity"
            name="qty"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            name="unitId"
            label="Select the Item Unit"
            register={register}
            className="w-full"
            options={unitsType}
          />
          <SelectInput
            name="brandId"
            label="Select the Brand"
            register={register}
            className="w-full"
            options={brandType}
          />
          <TextInput
            label="Buying Price"
            name="buyingPrice"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <TextInput
            label="Selling Price"
            name="sellingPrice"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <SelectInput
            name="supplierId"
            label="Select the Supplier"
            register={register}
            className="w-full"
            options={supplierList}
          />
          <TextInput
            label="Re-Order Point"
            name="reOrderPoint"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            name="warehouseId"
            label="Select the Item Warehouse"
            register={register}
            className="w-full"
            options={warehouseList}
          />
          <TextInput
            label="Item Weight in Kgs"
            name="itemWeight"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <TextInput
            label="Item Dimension in cms (20 x 30 x 100)"
            name="itemDimension"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Item Tax Rate in %"
            name="taxRate"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextareaInput
            label="Item Description"
            name="description"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Item Notes"
            name="notes"
            register={register}
            errors={errors}
          />
          <SubmitButton isLoading={loading} title="Item" />
        </div>
      </form>
      {/* Footer */}
    </div>
  );
}

export default NewItem;