"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import React, { useState } from "react";
import TransferAdjustmentForm from "@/components/dashboard/TransferInventoryForm";
import { Minus, Plus } from "lucide-react";
import AddInventoryForm from "@/components/dashboard/AddInventoryForm";

export default function NewAdjustments() {

  const tabs = [
    {
      title: "Add Stocks",
      icons: Plus,
      form: 'add'
    },
    {
      title: "Remove Stocks",
      icons: Minus,
      form: 'remove'
    },
  ]

  const [activeForm, setActiveForm] = useState('add')
  return (

    <div>
      {/* Header */}
      <FormHeader title="New Warehouse" href="/inventory/inventory/" />
      {/* Form */}
      <div className="border-b border-gray-200 dark:border-gray-700 w-full max-w-4xl px-4 py-2 bg-white border rounded-lg shadow dark:bg-gray-800 mx-auto my-6">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        

          {
            tabs.map((tab, index) => {

              const Icon = tab.icons;
              return (
                <li key={index} className="me-2">
                  <button
                    onClick={() => setActiveForm(tab.form)}
                    className={`${activeForm === tab.form
                        ? 'inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group'
                        : 'inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
                      }`}
                  >
                    <Icon className= {`${activeForm === tab.form 
                      ? 'w-4 h-4 me-2 text-blue-600 dark:text-blue-500'
                      : 'w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'
                    }`}/>
                    {tab.title}
                  </button>
                </li>
              )
            }
            )
          } 
        </ul>
      </div>


      {
        activeForm === 'add' ? (<AddInventoryForm /> ): (<TransferAdjustmentForm /> ) // replace with TransferAdjustmentForm when ready.
      }    
      {/* Footer */}
    </div>
  );
}
