import React, { useState } from "react";
import logo from "./icons/logo.svg";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim();
    if (!trimmedQuery) return;
    navigate(`/search/${encodeURIComponent(trimmedQuery)}`);
    setSearchQuery("");
    setShowSearch(false);
  };

  return (
    <header className="border-b bg-white fixed top-0 w-full z-3">
      <div className="w-full container mx-auto flex items-between md:items-center justify-around px-10">
        <Link to="/" className="flex gap-[8px] items-center">
          <img src={logo} alt="logo" />
          <p className="font-[Exo] text-[28px] font-bold">EduPress</p>
        </Link>

        <DesktopHeader setShowSearch={setShowSearch} showSearch={showSearch} />

        <MobileHeader />
      </div>
      {showSearch && (
        <div className="w-full bg-[#F5F5F5] border-t border-gray-200">
          <form onSubmit={handleSearch}>
            <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between gap-5">
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 text-[16px] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                onClick={() => setShowSearch(false)}
                className="text-gray-500 hover:text-primary"
              >
                <X size={30} />
              </button>
            </div>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
