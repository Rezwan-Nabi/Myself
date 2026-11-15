import {
  Bike,
  Briefcase,
  Camera,
  Code,
  Globe,
  Mail,
  Map,
  MapPin,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/data/profile";

// Lucide has dropped most brand logos, so social links use neutral icons.
const icons: Record<IconName, LucideIcon> = {
  camera: Camera,
  bike: Bike,
  map: Map,
  gardening: Sprout,
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
