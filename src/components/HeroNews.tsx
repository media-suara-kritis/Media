import { Article, LOGO_SRC } from "@/lib/data";
import { CategoryIcon } from "./CategoryIcon";

interface HeroNewsProps {
    article: Article;
}

export function HeroNews({ article }: HeroNewsProps) {
  return (
    <article className="lg:col-span-2 bg-gradient-to-br from-gray-800/60 to-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-800">
      <div className="relative">
        <img src={article.image} alt={article.title} className="w-full h-96 object-cover" />
        <img src={LOGO_SRC} alt="watermark" className="absolute right-4 bottom-4 opacity-30 w-28 h-28 object-contain pointer-events-none" />
        <div className="absolute left-6 bottom-6 bg-black/50 backdrop-blur rounded-md px-3 py-2 flex items-center gap-2">
          <CategoryIcon category={article.category} className="w-4 h-4 text-red-400" />
          <span className="text-xs text-red-300 font-semibold">{article.category}</span>
        </div>
      </div>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-white mb-3">{article.title}</h1>
        <p className="text-gray-300 max-w-3xl">{article.excerpt} — (Lead artikel ditampilkan di sini sebagai ringkasan panjang.)</p>
      </div>
    </article>
  );
}