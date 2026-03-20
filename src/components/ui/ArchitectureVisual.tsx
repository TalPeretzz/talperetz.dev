export default function ArchitectureVisual() {
  return (
    <svg
      viewBox="0 0 320 420"
      fill="none"
      className="w-full"
      aria-hidden="true"
    >
      {/* Orthogonal connection paths */}
      <g stroke="#2C3E50" strokeWidth="0.75" fill="none">
        <path d="M160 52 V162 H212" opacity="0.15" />
        <path d="M160 52 V112 H56 V174" opacity="0.1" strokeDasharray="6 4" />
        <path d="M236 176 V216 H152 V260" opacity="0.12" />
        <path d="M56 182 V276 H124" opacity="0.1" />
        <path d="M180 276 H264 V336" opacity="0.12" strokeDasharray="6 4" />
        <path d="M152 292 V393" opacity="0.08" />
      </g>

      {/* Endpoint nodes */}
      <g fill="#2C3E50">
        <circle cx="160" cy="48" r="4" opacity="0.18" />
        <circle cx="56" cy="178" r="3.5" opacity="0.12" />
        <circle cx="264" cy="340" r="4" opacity="0.12" />
        <circle cx="152" cy="396" r="3" opacity="0.10" />
      </g>

      {/* Service blocks */}
      <g stroke="#2C3E50" strokeWidth="0.75" fill="none">
        <rect x="212" y="148" width="48" height="28" rx="2" opacity="0.14" />
        <rect x="124" y="260" width="56" height="32" rx="2" opacity="0.16" />
      </g>

      {/* Hub detail lines */}
      <line x1="132" y1="273" x2="172" y2="273" stroke="#2C3E50" strokeWidth="0.5" opacity="0.08" />
      <line x1="132" y1="280" x2="158" y2="280" stroke="#2C3E50" strokeWidth="0.5" opacity="0.06" />

      {/* Junction dots at path bends */}
      <g fill="#2C3E50">
        <circle cx="160" cy="162" r="2" opacity="0.12" />
        <circle cx="160" cy="112" r="2" opacity="0.08" />
        <circle cx="56" cy="112" r="2" opacity="0.08" />
        <circle cx="236" cy="216" r="2" opacity="0.10" />
        <circle cx="152" cy="216" r="2" opacity="0.10" />
        <circle cx="56" cy="276" r="2" opacity="0.08" />
        <circle cx="264" cy="276" r="2" opacity="0.10" />
      </g>
    </svg>
  );
}
