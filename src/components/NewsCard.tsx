import { Article, LOGO_SRC } from "@/lib/data";
import { CategoryIcon } from "./CategoryIcon";

interface NewsCardProps {
    article: Article;
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-800 shadow-md hover:shadow-lg transition">
      <div className="relative">
        <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
        <img src={LOGO_SRC} alt="watermark" className="absolute right-3 bottom-3 opacity-30 w-16 h-16 object-contain pointer-events-none" />

        <div className="absolute left-3 top-3 flex items-center gap-2 bg-black/50 px-2 py-1 rounded">
          <CategoryIcon category={article.category} className="w-4 h-4 text-red-400" />
          <span className="text-xs text-red-300 font-medium">{article.category}</span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-white text-lg">{article.title}</h3>
        <p className="text-sm text-gray-400 mt-2 line-clamp-3">{article.excerpt}</p>
        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
          <div>{article.time}</div>
          <div className="flex gap-2">
            {article.tags.slice(0, 2).map((t) => (
              <span key={t} className="px-2 py-0.5 rounded bg-gray-700 text-xs">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}