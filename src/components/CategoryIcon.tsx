import { Globe, MapPin, DollarSign, Trophy, Cpu, Heart, Film } from "lucide-react";

interface CategoryIconProps {
    category: string;
    className?: string;
}

export function CategoryIcon({ category, className = "w-4 h-4 text-red-400" }: CategoryIconProps) {
  switch (category) {
    case "Nasional":
      return <MapPin className={className} />;
    case "Internasional":
      return <Globe className={className} />;
    case "Ekonomi":
      return <DollarSign className={className} />;
    case "Olahraga":
      return <Trophy className={className} />;
    case "Teknologi":
      return <Cpu className={className} />;
    case "Gaya Hidup":
      return <Heart className={className} />;
    case "Hiburan":
      return <Film className={className} />;
    default:
      return <Globe className={className} />;
  }
}