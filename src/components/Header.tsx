import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Video, Search } from "lucide-react";
import { LOGO_SRC, CATEGORIES } from "@/lib/data";

interface HeaderProps {
    onOpenLive: () => void;
}

export function Header({ onOpenLive }: HeaderProps) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function onSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/?q=${encodeURIComponent(search)}`);
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/70 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={LOGO_SRC} alt="logo" className="h-10 w-auto object-contain" />
              <span className="hidden sm:inline text-white font-bold">MediaSuaraNews</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-2">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat}
                  to={cat === "Home" ? "/" : `/kategori/${encodeURIComponent(cat.toLowerCase())}`}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-800/50 hover:text-red-400 transition"
                >
                  {cat}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <form onSubmit={onSearchSubmit} className="hidden sm:flex items-center bg-gray-800/60 rounded-full px-3 py-1">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari berita, topik, atau tag..."
                className="bg-transparent outline-none text-sm text-gray-200 w-56 ml-2"
              />
            </form>

            <button
              onClick={onOpenLive}
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white"
              title="Tonton Live"
            >
              <Video className="w-4 h-4" />
              <span className="hidden sm:inline">Live</span>
            </button>

            <Link to="/" className="ml-2 px-3 py-2 rounded-md border border-gray-800 text-sm hidden md:inline">
              Langganan
            </Link>

            <div className="lg:hidden">
              <button className="p-2 rounded-md bg-gray-800/40 text-gray-200">☰</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}