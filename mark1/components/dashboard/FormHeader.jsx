import React from 'react'
import Link from 'next/link';
import { ChevronDown, X } from "lucide-react";


function FormHeader({title, href}) {
  return (
    <div>
      <div className="flex py-6 pl-4 justify-between items-center bg-white border-b shadow-sm">
        <div className="flex items-center justify-center gap-1">
          <button className="pl-2 text-2xl font-semibold">{title}</button>
          <ChevronDown
            strokeWidth="3px"
            className="text-blue-500 font-semibold w-5 h-5"
          />
        </div>
        <Link href={href}>
          <X className="text-slate-600 hover:text-red-400 transition duration-100 mr-12" />
        </Link>
      </div>
    </div>
  );
}

export default FormHeader