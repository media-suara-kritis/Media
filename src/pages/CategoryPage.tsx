import { useState, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SAMPLE_ARTICLES, SUBCATEGORIES } from "@/lib/data";
import { NewsCard } from "@/components/NewsCard";

export default function CategoryPage() {
  const { kategori } = useParams<{ kategori: string }>();
  const decoded = decodeURIComponent(kategori || "");
  const activeCategory = decoded.charAt(0).toUpperCase() + decoded.slice(1);
  const subs = SUBCATEGORIES[activeCategory] || [];
  const [activeSub, setActiveSub] = useState(subs[0] || "Semua");
  const [visibleCount, setVisibleCount] = useState(9);

  const articles = useMemo(() => {
    return SAMPLE_ARTICLES.filter((a) => {
      if (a.category !== activeCategory) return false;
      if (!activeSub || activeSub === "Semua") return true;
      return a.subcategory === activeSub;
    });
  }, [activeCategory, activeSub]);

  useEffect(() => {
    setActiveSub(subs[0] || "Semua");
    setVisibleCount(9);
  }, [kategori, subs]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{activeCategory}</h1>
        <p className="text-gray-400 mt-1">Subkategori — pilih tab untuk memfilter berita.</p>
      </div>

      <div className="overflow-x-auto pb-2 -mb-2">
        <div className="flex gap-3 items-center whitespace-nowrap">
          <button
            onClick={() => setActiveSub("Semua")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeSub === "Semua" ? "bg-red-600 text-white" : "bg-gray-800 text-gray-200 hover:bg-gray-700"}`}
          >
            Semua
          </button>
          {subs.map((s) => (
            <button
              key={s}
              onClick={() => setActiveSub(s)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeSub === s ? "bg-red-600 text-white" : "bg-gray-800 text-gray-200 hover:bg-gray-700"}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <section className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(0, visibleCount).map((a) => (
            <NewsCard key={a.id} article={a} />
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          {visibleCount < articles.length ? (
            <button onClick={() => setVisibleCount((v) => v + 9)} className="px-6 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold">Load more</button>
          ) : (
            <div className="text-gray-400">Tidak ada berita lagi.</div>
          )}
        </div>
      </section>
    </main>
  );
}