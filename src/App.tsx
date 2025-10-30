import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LiveModal } from "./components/LiveModal";

const App = () => {
  const [liveOpen, setLiveOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
        <Header onOpenLive={() => setLiveOpen(true)} />
        <LiveModal open={liveOpen} onClose={() => setLiveOpen(false)} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/kategori/:kategori" element={<CategoryPage />} />
            <Route path="*" element={<Index />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;