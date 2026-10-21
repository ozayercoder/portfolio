import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/portfolio";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #05060d 0%, #0d1030 55%, #1b1345 100%)",
          color: "#e2e4f0",
          position: "relative",
        }}
      >
        {/* accent bars */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "22%",
            width: 420,
            height: 6,
            background: "linear-gradient(90deg, #a78bfa, #e879f9, #38bdf8)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: "22%",
            width: 420,
            height: 6,
            background: "linear-gradient(90deg, #38bdf8, #e879f9, #a78bfa)",
          }}
        />

        <div style={{ fontSize: 30, letterSpacing: 6, color: "#a78bfa" }}>
          {siteConfig.role.toUpperCase()}
        </div>
        <div
          style={{
            fontSize: 118,
            fontWeight: 700,
            color: "#ffffff",
            marginTop: 18,
          }}
        >
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 34, color: "#9aa0b8", marginTop: 22 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
