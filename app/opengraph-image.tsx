import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CashCalcs - Free Financial Calculators & Guides";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
          position: "relative",
        }}
      >
        {/* Decorative symbols - top left */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 60,
            fontSize: 60,
            opacity: 0.3,
            display: "flex",
          }}
        >
          💰
        </div>

        {/* Decorative symbols - top right */}
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 60,
            fontSize: 60,
            opacity: 0.3,
            display: "flex",
          }}
        >
          📊
        </div>

        {/* Decorative symbols - bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 60,
            fontSize: 60,
            opacity: 0.3,
            display: "flex",
          }}
        >
          💵
        </div>

        {/* Decorative symbols - bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            right: 60,
            fontSize: 60,
            opacity: 0.3,
            display: "flex",
          }}
        >
          📈
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 80px",
          }}
        >
          {/* Dollar sign icon */}
          <div
            style={{
              fontSize: 120,
              fontWeight: 900,
              color: "white",
              marginBottom: 20,
              display: "flex",
            }}
          >
            $
          </div>

          {/* Site name */}
          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              color: "white",
              letterSpacing: -2,
              marginBottom: 24,
              display: "flex",
            }}
          >
            CashCalcs
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 36,
              color: "rgba(255, 255, 255, 0.95)",
              fontWeight: 500,
              lineHeight: 1.4,
              marginBottom: 40,
              display: "flex",
            }}
          >
            16 Free Financial Calculators & 19 Guides
          </div>

          {/* URL */}
          <div
            style={{
              fontSize: 28,
              color: "rgba(255, 255, 255, 0.8)",
              fontWeight: 400,
              display: "flex",
            }}
          >
            cashcalcs.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
