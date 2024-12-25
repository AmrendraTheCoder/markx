"use client";
import React, { useState } from "react";
import Link from "next/link"; // Assuming you're using Next.js

const HomePage = () => {
  const [color, setColor] = useState("bg-slate-900"); // Default background color to a dark shade
  const [textColor, setTextColor] = useState("text-white"); // Default text color to white

  const handleColorChange = (bgColor, textColor) => {
    setColor(bgColor);
    setTextColor(textColor);
  };

  const getTextColor = (bgColor) => {
    // Check if the background color is dark or light to set text color accordingly
    const darkBackgroundColors = [
      "bg-slate-900",
      "bg-black",
      "bg-blue-500",
      "bg-red-500",
      "bg-green-500",
      "bg-purple-300",
      "bg-pink-400",
      "bg-orange-500",
    ];
    const lightBackgroundColors = ["bg-white", "bg-lavender", "bg-olive"];

    if (darkBackgroundColors.includes(bgColor)) {
      return "text-white"; // Light text for dark backgrounds
    } else if (lightBackgroundColors.includes(bgColor)) {
      return "text-black"; // Dark text for light backgrounds
    } else {
      return "text-white"; // Default to light text
    }
  };

  return (
    <div className={`w-full h-screen ${color} ${textColor}`}>
      {/* Background Color Changer */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
            onClick={() => handleColorChange("bg-red-500", "text-white")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:bg-blue-800"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => handleColorChange("bg-green-500", "text-white")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => handleColorChange("bg-white", "text-black")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            onClick={() => handleColorChange("bg-purple-300", "text-black")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>
          <button
            onClick={() => handleColorChange("bg-blue-500", "text-white")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => handleColorChange("bg-black", "text-white")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => handleColorChange("bg-pink-400", "text-black")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => handleColorChange("bg-green-700", "text-white")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => handleColorChange("bg-orange-500", "text-black")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen flex-col">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className={`text-6xl font-bold mb-3 tracking-wide ${textColor}`}>
            Welcome
          </h1>
          <h2 className={`text-2xl font-light ${textColor}`}>
            Our home page is under construction 🦁
          </h2>
        </div>

        {/* Dashboard Button */}
        <div className="flex flex-col items-center">
          <Link
            href="/inventory/home/overview"
            className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-6 py-3 text-lg font-semibold rounded-full shadow-md"
          >
            View Dashboard
          </Link>
          <span className={`text-sm ${textColor} mt-2`}>
            Click above to access your dashboard
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
