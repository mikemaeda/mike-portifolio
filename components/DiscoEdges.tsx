const discoBalls = [
  { side: "left", label: "Left disco ball" },
  { side: "right", label: "Right disco ball" },
];

export default function DiscoEdges() {
  return (
    <div className="disco-edges" aria-hidden="true">
      {discoBalls.map((ball) => (
        <div key={ball.side} className={`disco-fixture is-${ball.side}`} aria-label={ball.label}>
          <div className="disco-string" />
          <div className="disco-glow" />
          <div className="disco-ball">
            <span className="disco-core" />
          </div>
          <span className="disco-beam beam-one" />
          <span className="disco-beam beam-two" />
        </div>
      ))}

      <style>{`
        .disco-edges {
          position: fixed;
          inset: 0;
          z-index: 4;
          pointer-events: none;
          overflow: hidden;
        }

        .disco-fixture {
          position: absolute;
          width: 118px;
          height: 220px;
          opacity: 0.86;
        }

        .disco-fixture.is-left {
          top: 118px;
          left: max(8px, calc((100vw - 1180px) / 2 - 84px));
          transform: rotate(-5deg);
        }

        .disco-fixture.is-right {
          top: 390px;
          right: max(8px, calc((100vw - 1180px) / 2 - 84px));
          transform: rotate(5deg);
        }

        .disco-string {
          width: 2px;
          height: 52px;
          margin-inline: auto;
          background: var(--fg);
          box-shadow: 5px 0 0 rgba(16, 16, 16, 0.14);
        }

        .disco-glow {
          position: absolute;
          top: 38px;
          left: 50%;
          width: 110px;
          height: 110px;
          margin-left: -55px;
          border-radius: 999px;
          background: var(--paper);
          filter: blur(18px);
          opacity: 0.3;
        }

        .disco-ball {
          position: relative;
          width: 92px;
          height: 92px;
          margin-inline: auto;
          border: 3px solid var(--fg);
          border-radius: 999px;
          background:
            radial-gradient(circle at 32% 24%, rgba(255, 248, 232, 0.95) 0 8%, transparent 9%),
            radial-gradient(circle at 58% 62%, rgba(244, 195, 22, 0.72) 0 9%, transparent 10%),
            repeating-conic-gradient(from 15deg, #fff8e8 0 10deg, #101010 10deg 16deg, #d5d5d5 16deg 27deg, #f4c316 27deg 35deg);
          box-shadow: 8px 8px 0 rgba(16, 16, 16, 0.2);
          overflow: hidden;
          animation: discoSpin 18s linear infinite;
        }

        .disco-ball::before,
        .disco-ball::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
        }

        .disco-ball::before {
          background:
            repeating-linear-gradient(0deg, transparent 0 9px, rgba(16, 16, 16, 0.34) 9px 11px),
            repeating-linear-gradient(90deg, transparent 0 9px, rgba(16, 16, 16, 0.34) 9px 11px);
          mix-blend-mode: multiply;
        }

        .disco-ball::after {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.55), transparent 40%, rgba(16, 16, 16, 0.48));
          animation: discoReflect 2.8s ease-in-out infinite;
        }

        .disco-core {
          position: absolute;
          inset: 20%;
          border-radius: inherit;
          border: 1px solid rgba(16, 16, 16, 0.42);
          background: radial-gradient(circle at 38% 30%, var(--paper), #777 48%, #111 100%);
          opacity: 0.28;
        }

        .disco-beam {
          position: absolute;
          top: 96px;
          left: 50%;
          width: 4px;
          height: 118px;
          transform-origin: top;
          background: linear-gradient(rgba(255, 248, 232, 0.7), rgba(255, 248, 232, 0));
          opacity: 0.28;
          filter: blur(1px);
        }

        .beam-one { transform: rotate(24deg); }
        .beam-two { transform: rotate(-28deg); }

        @keyframes discoSpin {
          to { transform: rotate(360deg); }
        }

        @keyframes discoReflect {
          0%, 100% { opacity: 0.92; }
          50% { opacity: 0.45; }
        }

        @media (max-width: 1180px) {
          .disco-fixture {
            width: 88px;
            height: 170px;
            opacity: 0.58;
          }

          .disco-fixture.is-left { left: -34px; top: 112px; }
          .disco-fixture.is-right { right: -34px; top: 360px; }
          .disco-string { height: 42px; }
          .disco-ball { width: 70px; height: 70px; }
          .disco-glow {
            width: 84px;
            height: 84px;
            margin-left: -42px;
          }
        }

        @media (max-width: 700px) {
          .disco-fixture {
            opacity: 0.32;
          }

          .disco-fixture.is-left { top: 94px; left: -48px; }
          .disco-fixture.is-right { top: 520px; right: -48px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .disco-ball,
          .disco-ball::after {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
