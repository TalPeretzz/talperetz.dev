import { cn } from "@/lib/utils";
import { Server, Database, Layers, Cpu, type LucideIcon } from "lucide-react";
import type { ExpertiseCategory } from "@/types/site";

const iconMap: Record<string, LucideIcon> = {
  Server,
  Database,
  Layers,
  Cpu,
};

interface SkillCardProps {
  category: ExpertiseCategory;
  className?: string;
}

export default function SkillCard({ category, className }: SkillCardProps) {
  const Icon = iconMap[category.icon];

  return (
    <article
      className={cn(
        "bg-white border border-[#E2E8F0] rounded-sm p-8 h-full",
        "shadow-[0_4px_20px_rgba(0,0,0,0.03)]",
        "hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease-in-out",
        "flex flex-col",
        className
      )}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F5F9] mb-5">
        {Icon && <Icon size={16} className="text-[#94A3B8]" aria-hidden="true" />}
      </div>

      <h3 className="font-[family-name:var(--font-headline)] text-lg font-bold uppercase tracking-widest leading-tight text-[#2C3E50] mb-4">
        {category.title}
      </h3>

      <ul className="flex flex-col gap-1.5 mt-auto">
        {category.items.map((item) => (
          <li
            key={item}
            className="text-[13px] font-medium text-[#526074]"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
