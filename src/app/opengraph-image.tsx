import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Digital Club — Comunidade exclusiva para quem move o Norte do Brasil";
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
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #080f13 0%, #183d4c 50%, #0f2a35 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            border: "1px solid rgba(179, 123, 75, 0.15)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            border: "1px solid rgba(179, 123, 75, 0.1)",
            display: "flex",
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "60px",
            right: "60px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(179, 123, 75, 0.4), transparent)",
            display: "flex",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "#b37b4b",
              display: "flex",
            }}
          />
          <span
            style={{
              color: "#b37b4b",
              fontSize: "14px",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Digital Club
          </span>
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "#b37b4b",
              display: "flex",
            }}
          />
        </div>

        {/* Main title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <span
            style={{
              color: "#ffffff",
              fontSize: "68px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            O ambiente certo
          </span>
          <span
            style={{
              fontSize: "68px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              background: "linear-gradient(135deg, #b37b4b, #c99465, #b37b4b)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            para quem move
          </span>
          <span
            style={{
              color: "#ffffff",
              fontSize: "68px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            o Norte do Brasil
          </span>
        </div>

        {/* Subtitle */}
        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "18px",
            marginTop: "32px",
            maxWidth: "640px",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          Comunidade exclusiva para CEOs, donos e fundadores. Ingresso por curadoria.
        </p>

        {/* Bottom stats */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "60px",
            right: "60px",
            display: "flex",
            justifyContent: "center",
            gap: "60px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "24px",
          }}
        >
          {[
            { val: "Acesso", label: "Ambientes certos" },
            { val: "Conexões", label: "De alto valor" },
            { val: "Curadoria", label: "Ingresso exclusivo" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span style={{ color: "#b37b4b", fontSize: "28px", fontWeight: 700 }}>
                {s.val}
              </span>
              <span
                style={{
                  color: "rgba(255,255,255,0.35)",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
