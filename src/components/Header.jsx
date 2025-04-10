import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="flex items-center justify-between p-3 bg-white border-b-gray-200 border-b">
      <h1 className="text-2xl font-bold text-pink-500">DashBoard</h1>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="rounded-full px-9 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="text-gray-500">
          <img src="../public/Bell 1.png"></img>
        </span>
        <span className="text-gray-500">
          <img src="../public/Question 1.png"></img>
        </span>
        <img
          src="../public/Avatar 313.png"
          alt="Avatar"
          className="rounded-full w-10 h-10"
        />
      </div>
    </header>
  );
}
