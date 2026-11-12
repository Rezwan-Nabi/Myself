import {
  Bike,
  BookOpen,
  Briefcase,
  Camera,
  ChefHat,
  Code,
  Globe,
  Mail,
  Map,
  MapPin,
  Music,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/data/profile";

// Lucide has dropped most brand logos, so social links use neutral icons.
const icons: Record<IconName, LucideIcon> = {
  camera: Camera,
  book: BookOpen,
  chef: ChefHat,
  bike: Bike,
  music: Music,
  map: Map,
  mail: Mail,
  linkedin: Briefcase,
  github: Code,
  globe: Globe,
  location: MapPin,
};

export default function Icon({ name, className }: { name: IconName; className?: string }) {
  const Component = icons[name];
  return <Component className={className} strokeWidth={1.5} aria-hidden="true" />;
}
