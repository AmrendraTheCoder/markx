"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import TextInput from "@/components/FormInput/TextInput";
import SubmitButton from "@/components/FormInput/SubmitButton";
import toast from "react-hot-toast";

function NewUnit() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    console.log(data);
    setLoading(true);
    const baseUrl = "http://localhost:3001";
    try {
      const response = await fetch(`${baseUrl}/api/units`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log(response);
        toast.success("New Unit Created Successfully");
        setLoading(false);
        reset();
      }
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  }

  return (
    <div>
      {/* Header */}
      <FormHeader title="New Unit" href="/inventory/inventory/" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-6"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            name="title"
            label="Unit Title"
            className="w-full"
            register={register}
            errors={errors}
          />
          <TextInput
            name="abbreviation"
            label="Unit Abbreviation"
            className="w-full"
            register={register}
            errors={errors}
          />
        </div>

        <SubmitButton isLoading={loading} title="Unit" />
      </form>
      {/* Footer */}
    </div>
  );
}

export default NewUnit;
