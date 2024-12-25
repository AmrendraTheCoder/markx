"use client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import TextInput from "@/components/FormInput/TextInput";
import SubmitButton from "@/components/FormInput/SubmitButton";
import TextareaInput from "@/components/FormInput/TextAreaInput";
import SelectInput from "@/components/FormInput/SelectInput";

export default function AddInventoryForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const branches = [
        {
            label: "Branch A",
            value: "jnadsfjc42376hsfda",
        },
        {
            label: "Branch B",
            value: "waefdsnjbi189237bdfach",
        },
    ];

    const [loading, setLoading] = useState(false);

    async function onSubmit(data) {
        console.log(data);
        setLoading(true);
        const baseUrl = "http://localhost:3001";
        try {
            const response = await fetch(`${baseUrl}/api/adjustments/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                console.log(response);
                setLoading(false);
                reset();
            }
        } catch (error) {
            setLoading(false);

            console.log(error);
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-6"
        >
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <TextInput
                    label="Enter the amount of Stock Add"
                    name="addStockQty"
                    register={register}
                    errors={errors}
                    className="w-full"
                    type="number"
                    placeholder=""
                />
                <SelectInput
                    name="receivingWarehouseId"
                    label="Select the Warehouse that will receive the stock"
                    register={register}
                    options={branches}
                    className="w-full"
                />
                <TextareaInput
                    label="Adjustment Notes"
                    name="notes"
                    register={register}
                    errors={errors}
                />
            </div>

            <SubmitButton isLoading={loading} title="Adjustments" />
        </form>
    );
}
