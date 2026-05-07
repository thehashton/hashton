import { ImageResponse } from "next/og";

export const alt = "Harry Ashton — Senior Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          backgroundColor: "#f4f1ea",
          color: "#0a0a0a",
          padding: 72,
          border: "14px solid #0a0a0a",
          fontFamily: "ui-sans-serif, system-ui",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div
            style={{
              fontSize: 28,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            HASHTON
          </div>
          <div
            style={{
              width: 96,
              height: 96,
              backgroundColor: "#ff3d00",
              border: "4px solid #0a0a0a",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.04em" }}>
            Harry Ashton
          </div>
          <div style={{ fontSize: 34, maxWidth: 900, lineHeight: 1.25, fontWeight: 600 }}>
            Ex-lead frontend · Design systems · Accessibility · Coaching
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "4px solid #0a0a0a",
            paddingTop: 32,
            fontSize: 26,
            fontWeight: 600,
          }}
        >
          <span>hashton.dev</span>
          <span style={{ letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 22 }}>Portfolio</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
