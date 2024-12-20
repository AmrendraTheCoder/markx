import React from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, PlusCircle } from "lucide-react";

const CollapsibleSection = ({
  title,
  icon: IconComponent,
  links,
  active,
  onToggle,
  sectionName,
  onItemClick,
  selectedItem,
}) => {
  const isOpen = active[sectionName];
  const isChildSelected = links.some((link) => link.title === selectedItem);

  return (
    <div>
      {/* Trigger Section */}
      <button
        onClick={() => onToggle(sectionName)}
        className={`flex items-center justify-between w-full p-3 rounded-md transition-colors duration-200 ${
          isOpen ? "bg-blue-800" : "bg-slate-800"
        } ${
          isChildSelected ? "bg-blue-600" : "hover:bg-blue-600"
        } text-slate-50`}
      >
        <div className="flex items-center space-x-2">
          <IconComponent
            className={`w-4 h-4 ${
              isChildSelected ? "text-white" : "text-slate-50"
            }`}
          />
          <Link
            href={`/inventory/inventory/items`}
            className={`flex items-center ${
              isChildSelected ? "text-white" : "text-slate-50"
            }`}
          >
            <span>{title}</span>
          </Link>
        </div>
        {isOpen ? <ChevronDown /> : <ChevronRight />}
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="mt-2 space-y-2">
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              onClick={() => onItemClick(link.title)}
              className={`flex items-center justify-between pl-8 pr-4 py-2 rounded-md transition-colors duration-200 ${
                selectedItem === link.title
                  ? "bg-blue-600"
                  : "hover:bg-blue-500"
              }`}
            >
              <span className="text-sm">{link.title}</span>
              <PlusCircle
                className={`w-4 h-4 ${
                  selectedItem === link.title
                    ? "text-blue-400"
                    : "text-slate-50"
                }`}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollapsibleSection;
