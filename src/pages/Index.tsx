import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SAMPLE_ARTICLES } from "@/lib/data";
import { HeroNews } from "@/components/HeroNews";
import { NewsCard } from "@/components/NewsCard";
import { CategoryIcon } from "@/components/CategoryIcon";
import { LOGO_SRC } from "@/lib/data";

const Index = () => {
  const hero = SAMPLE_ARTICLES[0];
  const topSmall = SAMPLE_ARTICLES.slice(1, 4);
  const [visibleCount, setVisibleCount] = useState(9);
  const [query, setQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("q") || "";
    setQuery(q);
  }, [location.search]);

  const filtered = useMemo(() => {
    if (!query) return SAMPLE_ARTICLES;
    return SAMPLE_ARTICLES.filter((a) => a.title.toLowerCase().includes(query.toLowerCase()) || a.excerpt.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <HeroNews article={hero} />
        <aside className="flex flex-col gap-4">
          {topSmall.map((a) => (
            <div key={a.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-800 shadow-sm">
              <div className="relative">
                <img src={a.image} alt={a.title} className="w-full h-40 object-cover" />
                <img src={LOGO_SRC} alt="watermark" className="absolute right-3 bottom-3 opacity-30 w-16 h-16 object-contain pointer-events-none" />
                <div className="absolute left-3 top-3 bg-black/50 px-2 py-1 rounded">
                  <CategoryIcon category={a.category} className="w-4 h-4 text-red-400" />
                </div>
              </div>
              <div className="p-3">
                <h4 className="font-semibold text-white">{a.title}</h4>
                <p className="text-sm text-gray-400 mt-1 line-clamp-2">{a.excerpt}</p>
              </div>
            </div>
          ))}
        </aside>
      </section>

      <section className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Berita Terbaru</h2>
          <div className="text-sm text-gray-400">Menampilkan {Math.min(visibleCount, filtered.slice(4).length)} dari {filtered.slice(4).length} berita</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(4, visibleCount + 4).map((a) => (
            <NewsCard key={a.id} article={a} />
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          {visibleCount + 4 < filtered.length ? (
            <button onClick={() => setVisibleCount((v) => v + 9)} className="px-6 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold">Load more</button>
          ) : (
            <div className="text-gray-400">Tidak ada berita lagi.</div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Index;