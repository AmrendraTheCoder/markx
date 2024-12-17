import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold mb-3 tracking-wide">Welcome</h1>
        <h2 className="text-2xl font-light text-slate-300">
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
        <span className="text-sm text-slate-400 mt-2">
          Click above to access your dashboard
        </span>
      </div>
    </div>
  );
}
