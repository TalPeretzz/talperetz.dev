import { cn } from "@/lib/utils";
import type { Article } from "@/types/site";

interface ArticleCardProps {
  article: Article;
  className?: string;
}

export default function ArticleCard({ article, className }: ArticleCardProps) {
  return (
    <article
      className={cn(
        "group relative bg-white border border-[#E2E8F0] rounded-sm",
        "shadow-[0_4px_20px_rgba(0,0,0,0.03)]",
        "transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      <div className="p-8 md:p-12">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#526074] font-[family-name:var(--font-label)]">
          {article.meta}
        </span>

        <h3 className="font-[family-name:var(--font-headline)] text-2xl md:text-3xl font-black tracking-tight text-[#2C3E50] mt-4">
          {article.title}
        </h3>

        <p className="text-base md:text-lg text-[#526074] leading-relaxed mt-4 max-w-2xl">
          {article.summary}
        </p>

        <a
          href={article.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center gap-2 mt-8",
            "text-sm font-bold uppercase tracking-widest text-[#2C3E50]",
            "border-b-2 border-[#2C3E50] pb-1",
            "transition-colors duration-200 hover:text-[#526074] hover:border-[#526074]"
          )}
        >
          {article.ctaLabel}
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </div>

      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-24 h-24 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#2C3E50 1px, transparent 1px)",
          backgroundSize: "6px 6px",
        }}
      />
    </article>
  );
}
