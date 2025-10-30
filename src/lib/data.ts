export const LOGO_SRC = "/placeholder.svg"; // Using placeholder as original path is invalid

export const CATEGORIES = [
  "Home",
  "Nasional",
  "Internasional",
  "Ekonomi",
  "Olahraga",
  "Teknologi",
  "Gaya Hidup",
  "Hiburan",
];

export const SUBCATEGORIES: { [key: string]: string[] } = {
  Nasional: ["Politik", "Hukum & Kriminal", "Pemerintahan", "Pendidikan", "Sosial & Budaya", "Lingkungan", "Bencana Alam"],
  Internasional: ["Asia", "Eropa", "Amerika", "Timur Tengah", "Afrika", "Diplomasi", "Dunia Unik"],
  Ekonomi: ["Bisnis", "Pasar Modal", "UMKM", "Perbankan", "Energi", "Fintech", "Properti"],
  Olahraga: ["Sepak Bola", "Bulu Tangkis", "Basket", "Balap", "Esports", "Atletik", "Lainnya"],
  Teknologi: ["Gadget", "Startup", "Internet", "AI", "Game", "Inovasi", "Keamanan Siber"],
  "Gaya Hidup": ["Kesehatan", "Kuliner", "Fashion", "Travel", "Parenting", "Relationship", "Komunitas"],
  Hiburan: ["Musik", "Film & TV", "Selebriti", "K-Pop", "Event", "Viral", "Seni & Budaya"],
};

export interface Article {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    subcategory: string;
    tags: string[];
    image: string;
    time: string;
}

// Sample data generator
export const SAMPLE_ARTICLES: Article[] = Array.from({ length: 36 }).map((_, i) => {
  const cats = [
    "Nasional",
    "Internasional",
    "Ekonomi",
    "Olahraga",
    "Teknologi",
    "Gaya Hidup",
    "Hiburan",
  ];
  const cat = cats[i % cats.length];
  const sub = SUBCATEGORIES[cat][i % SUBCATEGORIES[cat].length];
  return {
    id: i + 1,
    title: `${cat} — ${sub} : Judul Berita Contoh No. ${i + 1}`,
    excerpt:
      "Ini adalah cuplikan berita yang menjelaskan inti informasi secara ringkas. Klik untuk membaca selengkapnya.",
    category: cat,
    subcategory: sub,
    tags: [i % 2 === 0 ? "terkini" : "popular", "trending"],
    image: `https://picsum.photos/800/520?random=${i + 10}`,
    time: `${(i % 12) + 1} jam lalu`,
  };
});