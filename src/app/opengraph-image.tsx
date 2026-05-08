import { ImageResponse } from "next/og";

export const alt = "Harry Ashton — Senior Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const paper = "#faf7f1";
const ink = "#1a1814";
const accent = "#c0573a";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: paper,
          color: ink,
          padding: 72,
          border: `2px solid ${ink}`,
          borderRadius: 24,
          fontFamily: "ui-sans-serif, system-ui",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: ink,
              opacity: 0.85,
            }}
          >
            HASHTON
          </div>
          <div
            style={{
              width: 88,
              height: 88,
              backgroundColor: accent,
              borderRadius: 16,
              border: `2px solid ${ink}`,
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 80, fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.03em", color: ink }}>
            Harry Ashton
          </div>
          <div style={{ fontSize: 30, maxWidth: 900, lineHeight: 1.35, fontWeight: 600, color: ink, opacity: 0.92 }}>
            Contract & consulting frontend — design systems, accessibility
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: `1px solid ${ink}`,
            opacity: 0.35,
            paddingTop: 28,
            fontSize: 22,
            fontWeight: 600,
            color: ink,
          }}
        >
          <span>hashton.dev</span>
          <span style={{ letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 18 }}>Portfolio</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
