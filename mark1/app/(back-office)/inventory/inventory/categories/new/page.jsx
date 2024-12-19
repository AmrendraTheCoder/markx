"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import { ChevronDown, Plus, X } from "lucide-react";
import { useForm } from "react-hook-form";

import Link from "next/link";
import React, { useState } from "react";
import TextInput from "@/components/FormInput/TextInput";
import SubmitButton from "@/components/FormInput/SubmitButton";

function NewCategories() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <div>
      {/* Header */}
      <FormHeader title="New Category" href="#" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-6"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton isLoading={loading} title="Category" />
      </form>
      {/* Footer */}
    </div>
  );
}

export default NewCategories;
