import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p";
}

export default function SectionLabel({
  children,
  className,
  as: Tag = "p",
}: SectionLabelProps) {
  return (
    <Tag
      className={cn(
        "text-xs font-bold uppercase tracking-[0.2em] text-[#526074] font-[family-name:var(--font-label)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
