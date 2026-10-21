import { ImageResponse } from "next/og";

// Minimal, legible favicon on any background: an "O" monogram for Ozayer.
export const size = { width: 64, height: 64 };
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
          background: "linear-gradient(135deg, #05060d 0%, #171a3a 60%, #2b1d52 100%)",
          borderRadius: 14,
          color: "#a78bfa",
          fontSize: 36,
          fontWeight: 700,
        }}
      >
        O
      </div>
    ),
    { ...size },
  );
}
