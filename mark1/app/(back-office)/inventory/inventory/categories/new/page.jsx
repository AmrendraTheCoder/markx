import { ChevronDown } from "lucide-react";
import React from "react";

function NewCategories() {
  return (
    <div>
      {/* Header */}
      <div className="flex py-6 pl-4 justify-between items-center bg-white border-b shadow-sm">
        <div className="flex items-center justify-center gap-1">
          <button className="pl-2 text-2xl font-semibold">Categories</button>
          <ChevronDown
            strokeWidth="3px"
            className="text-blue-500 font-semibold w-5 h-5"
          />
        </div>
      </div>
      {/* Form */}
      {/* Footer */}

      <h2>New Categories will be created here.</h2>
    </div>
  );
}

export default NewCategories;
