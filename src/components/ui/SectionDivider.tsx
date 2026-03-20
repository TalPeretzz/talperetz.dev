interface SectionDividerProps {
  from: string;
  to: string;
  height?: number;
}

export default function SectionDivider({
  from,
  to,
  height = 80,
}: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        height,
        background: `linear-gradient(to bottom, ${from}, ${to})`,
      }}
    />
  );
}
