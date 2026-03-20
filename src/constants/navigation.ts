import type { NavItem, BottomNavItem } from "@/types/site";

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
  { label: "Expertise", href: "#expertise" },
];

export const bottomNavItems: BottomNavItem[] = [
  { label: "About", href: "#about", icon: "person_outline" },
  { label: "Writing", href: "#writing", icon: "article" },
  { label: "Stack", href: "#expertise", icon: "terminal" },
];
