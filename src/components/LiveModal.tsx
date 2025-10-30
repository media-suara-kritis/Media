import { Video, X } from "lucide-react";

interface LiveModalProps {
    open: boolean;
    onClose: () => void;
}

export function LiveModal({ open, onClose }: LiveModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="bg-gray-900 rounded-xl w-full max-w-3xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <Video className="w-5 h-5 text-red-500" />
            <h3 className="font-semibold">Live Streaming</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded hover:bg-gray-800/50" aria-label="Tutup">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4 bg-black">
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <iframe
              title="Live Stream Player"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}