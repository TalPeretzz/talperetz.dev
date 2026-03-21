import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2C3E50",
          borderRadius: 36,
        }}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 10l6 6-6 6"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="17"
            y1="22"
            x2="24"
            y2="22"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
