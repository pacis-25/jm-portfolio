import { ImageResponse } from "next/og";

export const alt = "John Mark Pacis — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0D141C",
          padding: 48,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "#101923",
            border: "1px solid #223140",
            borderRadius: 24,
            padding: "0 72px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 36,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 7,
                background: "#45D6C4",
              }}
            />
            <div style={{ width: 120, height: 3, background: "#45D6C4" }} />
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              color: "#E9EEF3",
              letterSpacing: -2,
            }}
          >
            John Mark Pacis
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#45D6C4",
              marginTop: 18,
            }}
          >
            Software Engineer · Frontend / Fullstack
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#8CA0B3",
              fontFamily: "monospace",
              marginTop: 64,
            }}
          >
            React · Next.js · TypeScript · Node.js · PostgreSQL
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
