import { ImageResponse } from "next/og";

export const alt = "Tal Peretz — Senior Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          background: "#FFFFFF",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Dot-grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(#E2E8F0 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.5,
          }}
        />

        {/* Accent bar */}
        <div
          style={{
            width: 6,
            height: 80,
            background: "#2C3E50",
            marginBottom: 40,
            borderRadius: 3,
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#2C3E50",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            textTransform: "uppercase" as const,
          }}
        >
          TAL PERETZ
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#526074",
            marginTop: 24,
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
          }}
        >
          Senior Engineer
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 22,
            color: "#526074",
            marginTop: 12,
            opacity: 0.8,
          }}
        >
          Backend Systems & Architecture
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 100,
            fontSize: 18,
            color: "#94A3B8",
            letterSpacing: "0.05em",
          }}
        >
          talperetz.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
