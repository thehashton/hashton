import { ImageResponse } from "next/og";

/** Matches `globals.css` — header badge feel */
const ink = "#1a1814";
const paper = "#faf7f1";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: ink,
          color: paper,
          fontSize: 19,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          borderRadius: 6,
          border: `1px solid ${paper}22`,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        H
      </div>
    ),
    { ...size },
  );
}
