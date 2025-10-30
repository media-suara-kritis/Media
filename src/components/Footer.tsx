import { LOGO_SRC, CATEGORIES } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={LOGO_SRC} alt="logo" className="h-10" />
            <div>
              <div className="text-xl font-bold text-white">MediaSuaraNews</div>
              <div className="text-sm text-gray-400">Portal berita modern dan terpercaya</div>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Menyajikan berita nasional dan internasional, ekonomi, olahraga, teknologi, gaya hidup, dan hiburan.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#" className="text-gray-400 hover:text-red-400">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-red-400">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-red-400">Instagram</a>
          </div>
        </div>
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-3">Kategori</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-400">
              {CATEGORIES.map((c) => (
                <li key={c} className="hover:text-red-400 cursor-pointer">{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Filter & Newsletter</h4>
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <div className="text-sm text-gray-400 mb-2">Check berdasarkan</div>
                <div className="flex flex-col gap-2 text-sm">
                  {['Popular', 'Berita Terkini', 'Terpopuler', 'Trending'].map((tag) => (
                    <label key={tag} className="inline-flex items-center space-x-2 text-gray-400">
                      <input type="checkbox" className="form-checkbox text-red-500 bg-gray-700 border-gray-600" />
                      <span>{tag}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Alamat email"
                    className="px-3 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none"
                  />
                  <button className="px-4 py-2 bg-red-600 text-white rounded-r-lg font-semibold hover:bg-red-700">Kirim</button>
                </form>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <div>© {new Date().getFullYear()} MediaSuaraNews.com</div>
              <div className="mt-2 flex gap-4">
                <a href="#" className="hover:text-red-400">Kebijakan Privasi</a>
                <a href="#" className="hover:text-red-400">Syarat & Ketentuan</a>
                <a href="#" className="hover:text-red-400">Kontak</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}