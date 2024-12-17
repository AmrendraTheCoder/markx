import FixedHeader from "@/components/dashboard/FixedHeader";
import { Shirt } from "lucide-react";
import Link from "next/link";
import React from "react";

function Items() {
  // const {title, description, icon, link, linkTitle, enabled} = cardOptions;

  return (
    <div>
      <FixedHeader />
      <div className="grid grid-col-1 lg:grid-cols-2 px-16 py-6 gap-x-8 gap-y-8"></div>
    </div>
  );
}

export default Items;
