import { ImageResponse } from "next/og";

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
          background: "#0D141C",
          borderRadius: 7,
          color: "#45D6C4",
          fontSize: 17,
          fontWeight: 700,
        }}
      >
        jm
      </div>
    ),
    { ...size }
  );
}
