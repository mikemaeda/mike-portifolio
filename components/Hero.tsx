import Image from "next/image";
import Link from "next/link";
import { hero, profile } from "../lib/data";
import { GitHubIcon, DownloadIcon } from "./icons";

const heroLinks = [
  { label: "Resume", href: profile.links.resume, external: true, Icon: DownloadIcon },
  { label: "GitHub", href: profile.links.github, external: true, Icon: GitHubIcon },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="issue-ribbon">VOL. I • EST. 2026</div>
      <div className="container hero-inner">
        <div className="postcard-stack" aria-label="Mike Maeda portraits">
          <figure className="photo-postcard postcard-one">
            <div className="photo-frame">
              <Image
                src="/profile.png"
                alt="Mike Maeda"
                width={1080}
                height={1350}
                priority
                sizes="(max-width: 700px) 72vw, 240px"
                className="postcard-img postcard-img-front"
              />
            </div>
            <figcaption>Portrait / Alfred NY</figcaption>
          </figure>

          <figure className="photo-postcard postcard-two">
            <div className="photo-frame">
              <Image
                src="/profile2.jpeg"
                alt="Mike Maeda alternate portrait"
                width={5712}
                height={4284}
                sizes="(max-width: 700px) 72vw, 250px"
                className="postcard-img postcard-img-back"
              />
            </div>
            <figcaption>NYC / 2026</figcaption>
          </figure>
        </div>

        <div className="hero-copy">
          <h1 className="hero-title">Mike&apos;s Portfolio</h1>
          <div className="about-hanger">
            <span className="about-pin" aria-hidden="true" />
            <span className="about-string string-left" aria-hidden="true" />
            <span className="about-string string-right" aria-hidden="true" />
            <div className="about-postcard" aria-label="About Mike">
              <p>
                {hero.intro}{" "}
                <Link href="/experience" className="about-link">
                  More detail here.
                </Link>
              </p>
            </div>
          </div>

        <div className="gazette-flourish" aria-hidden="true">
          <span className="flourish-line line-left" />
          <span className="flourish-curl curl-left" />
          <span className="flourish-knot">
            <span />
            <span />
          </span>
          <span className="flourish-curl curl-right" />
          <span className="flourish-line line-right" />
        </div>
      </div>

        <nav className="walk-nav" aria-label="Portfolio shortcuts">
          {heroLinks.map(({ label, href, external, Icon }, index) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="walk-button"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              {Icon ? <Icon /> : null}
              <span data-label={label}>{label}</span>
            </a>
          ))}
        </nav>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          padding-top: 88px;
          padding-bottom: 34px;
          overflow: hidden;
        }

        .issue-ribbon {
          position: absolute;
          top: 78px;
          left: 0;
          z-index: 2;
          padding: 10px 22px 10px 18px;
          border: 2px solid var(--fg);
          border-left: 0;
          background: var(--fg);
          color: var(--paper);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          box-shadow: 7px 7px 0 rgba(16, 16, 16, 0.16);
        }

        .issue-ribbon::before {
          content: "";
          position: absolute;
          right: -15px;
          top: 0;
          width: 15px;
          height: 100%;
          background: var(--fg);
          clip-path: polygon(0 0, 100% 0, 45% 50%, 100% 100%, 0 100%);
        }

        .issue-ribbon::after {
          content: "";
          position: absolute;
          right: 8px;
          top: 50%;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
          transform: translateY(-50%);
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, var(--bg) 0 72px, transparent 72px calc(100% - 72px), var(--bg) calc(100% - 72px)),
            linear-gradient(90deg, transparent 49.7%, rgba(16, 16, 16, 0.12) 49.7%, rgba(16, 16, 16, 0.12) 50.3%, transparent 50.3%);
          pointer-events: none;
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          display: grid;
          justify-items: center;
          text-align: center;
        }

        .postcard-stack {
          position: relative;
          display: grid;
          grid-template-columns: minmax(170px, 230px);
          align-items: center;
          justify-content: center;
          gap: clamp(0.75rem, 3vw, 1.4rem);
          width: min(100%, 580px);
          min-height: 335px;
          margin-top: 0;
          padding-inline: clamp(4rem, 12vw, 8rem);
        }

        .photo-postcard {
          position: relative;
          grid-area: 1 / 1;
          display: grid;
          gap: 10px;
          padding: 12px 12px 15px;
          background: var(--paper);
          border: 3px solid var(--fg);
          box-shadow: 10px 10px 0 rgba(16, 16, 16, 0.22);
          transform-origin: center bottom;
          transition: opacity 0.34s var(--ease), transform 0.45s var(--ease),
            box-shadow 0.25s var(--ease);
        }

        .photo-postcard::before {
          content: "";
          position: absolute;
          inset: 7px;
          border: 1px dashed rgba(16, 16, 16, 0.3);
          pointer-events: none;
        }

        .photo-postcard::after {
          content: "";
          position: absolute;
          top: 10px;
          right: 10px;
          width: 38px;
          height: 30px;
          border: 2px solid var(--fg);
          background:
            linear-gradient(135deg, transparent 45%, rgba(16, 16, 16, 0.28) 46% 54%, transparent 55%),
            var(--accent);
        }

        .postcard-one {
          transform: rotate(-1.6deg) scale(1.04);
          z-index: 2;
        }

        .postcard-two {
          opacity: 0;
          transform: translateX(0) translateY(10px) rotate(1deg) scale(0.96);
          z-index: 1;
          pointer-events: none;
        }

        .postcard-stack:hover .postcard-one,
        .postcard-stack:focus-within .postcard-one {
          transform: translateX(clamp(-128px, -14vw, -86px)) rotate(-5deg);
        }

        .postcard-stack:hover .postcard-two,
        .postcard-stack:focus-within .postcard-two {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(clamp(86px, 14vw, 128px)) translateY(18px) rotate(4deg);
        }

        .photo-postcard:hover {
          box-shadow: 14px 14px 0 rgba(16, 16, 16, 0.25);
        }

        .photo-frame {
          position: relative;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border: 2px solid var(--fg);
          background: #d8d0bf;
        }

        .postcard-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .postcard-img-front {
          object-position: center 18%;
          transform: scale(1.02);
        }

        .postcard-img-back {
          object-position: center 42%;
          transform: scale(1.04);
        }

        .photo-postcard figcaption {
          position: relative;
          z-index: 1;
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          line-height: 1.2;
          text-transform: uppercase;
          text-align: left;
        }

        .hero-copy {
          margin-top: clamp(1.25rem, 2.5vw, 2rem);
          max-width: 720px;
        }

        .hero-title {
          position: relative;
          display: inline-block;
          margin-top: 0;
          font-family: "Brush Script MT", "Snell Roundhand", "Apple Chancery", cursive;
          font-size: clamp(3.5rem, 8.8vw, 6.7rem);
          font-weight: 500;
          line-height: 0.92;
          letter-spacing: 0;
          color: var(--fg);
          text-shadow:
            4px 4px 0 var(--accent),
            0 3px 0 rgba(16, 16, 16, 0.12);
          transform: rotate(-0.35deg);
        }

        .about-hanger {
          position: relative;
          margin: 2rem auto 0;
          max-width: 575px;
          padding-top: 92px;
          perspective: 900px;
        }

        .about-pin {
          position: absolute;
          top: 0;
          left: 50%;
          z-index: 3;
          width: 25px;
          height: 25px;
          border: 2px solid var(--fg);
          border-radius: 50%;
          background:
            radial-gradient(circle at 36% 32%, rgba(255, 248, 232, 0.9) 0 14%, transparent 15%),
            var(--accent);
          box-shadow:
            4px 5px 0 rgba(16, 16, 16, 0.18),
            inset -4px -4px 0 rgba(116, 62, 18, 0.22);
          transform: translateX(-50%);
        }

        .about-string {
          position: absolute;
          top: 20px;
          left: 50%;
          z-index: 1;
          width: 3px;
          height: 124px;
          background:
            repeating-linear-gradient(180deg, #17120b 0 5px, #8a6a28 5px 10px);
          transform-origin: top center;
          box-shadow:
            1px 0 0 rgba(255, 248, 232, 0.3),
            4px 4px 6px rgba(16, 16, 16, 0.14);
        }

        .string-left {
          transform: translateX(-50%) rotate(43deg);
        }

        .string-right {
          transform: translateX(-50%) rotate(-43deg);
        }

        .about-postcard {
          position: relative;
          z-index: 2;
          padding: 22px clamp(20px, 3.5vw, 32px);
          background:
            radial-gradient(circle at 16% 18%, rgba(111, 67, 29, 0.08), transparent 7rem),
            radial-gradient(circle at 82% 72%, rgba(244, 195, 22, 0.14), transparent 8rem),
            repeating-linear-gradient(0deg, rgba(16, 16, 16, 0.025) 0 1px, transparent 1px 9px),
            var(--paper);
          border: 0;
          box-shadow:
            10px 13px 0 rgba(16, 16, 16, 0.14),
            0 18px 28px rgba(56, 37, 10, 0.16);
          text-align: left;
          transform: rotate(0.7deg);
          transform-origin: 50% -96px;
          clip-path: polygon(1% 2%, 10% 0.8%, 21% 2%, 34% 0.9%, 49% 1.7%, 62% 0.6%, 77% 1.9%, 99% 1%, 98.6% 18%, 99.4% 35%, 98.8% 51%, 99.2% 70%, 98.4% 98%, 84% 99%, 68% 98.2%, 53% 99%, 39% 98.4%, 24% 99.2%, 1.2% 98.5%, 0.8% 78%, 1.4% 59%, 0.7% 41%, 1.2% 22%);
          transition: transform 0.35s var(--ease), box-shadow 0.35s var(--ease);
        }

        .about-postcard::before {
          content: "";
          position: absolute;
          left: 25%;
          right: 25%;
          top: -1px;
          height: 18px;
          background:
            linear-gradient(rgba(16, 16, 16, 0.16), transparent),
            rgba(255, 248, 232, 0.62);
          clip-path: polygon(0 0, 100% 0, 92% 100%, 8% 100%);
          pointer-events: none;
        }

        .about-postcard::after {
          content: "";
          position: absolute;
          inset: 13px;
          border: 1px dashed rgba(16, 16, 16, 0.24);
          pointer-events: none;
        }

        .about-hanger:hover .about-postcard,
        .about-hanger:focus-within .about-postcard {
          animation: hangingPaperSwing 1.25s ease-in-out;
          box-shadow:
            12px 16px 0 rgba(16, 16, 16, 0.16),
            0 22px 34px rgba(56, 37, 10, 0.18);
        }

        @keyframes hangingPaperSwing {
          0% { transform: rotate(0.7deg); }
          22% { transform: rotate(-3.2deg); }
          48% { transform: rotate(2.4deg); }
          72% { transform: rotate(-1.3deg); }
          100% { transform: rotate(0.7deg); }
        }

        .about-postcard p {
          position: relative;
          z-index: 1;
          font-size: clamp(1.02rem, 1.9vw, 1.18rem);
          line-height: 1.56;
          color: var(--fg);
        }

        .about-link {
          display: inline;
          font-weight: 900;
          text-decoration: underline;
          text-decoration-thickness: 2px;
          text-underline-offset: 3px;
          text-decoration-color: var(--accent);
        }

        .about-link:hover {
          background: var(--accent);
        }

        .gazette-flourish {
          display: grid;
          grid-template-columns: minmax(56px, 1fr) 42px 72px 42px minmax(56px, 1fr);
          align-items: center;
          gap: 8px;
          width: min(76vw, 620px);
          margin-top: clamp(1.2rem, 2.4vw, 1.8rem);
          color: var(--fg);
          opacity: 0.9;
        }

        .flourish-line {
          height: 18px;
          border-top: 4px solid currentColor;
        }

        .line-left {
          border-radius: 100% 0 0 0;
          transform: skewY(-5deg);
        }

        .line-right {
          border-radius: 0 100% 0 0;
          transform: skewY(5deg);
        }

        .flourish-curl {
          width: 42px;
          height: 34px;
          border: 7px solid currentColor;
          border-bottom-color: transparent;
          border-left-color: transparent;
          border-radius: 999px;
        }

        .curl-left {
          transform: rotate(-35deg);
        }

        .curl-right {
          transform: rotate(145deg);
        }

        .flourish-knot {
          position: relative;
          display: grid;
          place-items: center;
          height: 42px;
        }

        .flourish-knot::before,
        .flourish-knot::after,
        .flourish-knot span {
          content: "";
          position: absolute;
          width: 44px;
          height: 9px;
          border-radius: 999px;
          background: currentColor;
        }

        .flourish-knot::before {
          transform: rotate(38deg);
        }

        .flourish-knot::after {
          transform: rotate(-38deg);
        }

        .flourish-knot span:first-child {
          width: 34px;
          transform: translateX(-18px) rotate(-38deg);
        }

        .flourish-knot span:last-child {
          width: 34px;
          transform: translateX(18px) rotate(38deg);
        }

        .walk-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px 18px;
          margin-top: clamp(1.35rem, 3vw, 2.2rem);
          padding-block: 10px;
        }

        .walk-button {
          --primary-color: var(--fg);
          --hovered-color: #b73838;
          position: relative;
          z-index: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          min-height: 40px;
          padding: 8px 10px;
          border: none;
          background: none;
          color: var(--primary-color);
          font-size: 0.94rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .walk-button::before {
          content: "";
          position: absolute;
          inset: 2px -12px 0;
          z-index: -1;
          background:
            radial-gradient(ellipse at 14% 54%, rgba(255, 248, 232, 0.42) 0 10%, transparent 28%),
            radial-gradient(ellipse at 82% 40%, rgba(183, 56, 56, 0.2) 0 8%, transparent 28%),
            repeating-linear-gradient(176deg, rgba(255, 248, 232, 0.2) 0 3px, transparent 3px 8px),
            linear-gradient(90deg, rgba(244, 195, 22, 0), rgba(244, 195, 22, 0.72) 12%, rgba(255, 207, 48, 0.86) 48%, rgba(244, 195, 22, 0.66) 86%, rgba(244, 195, 22, 0));
          clip-path: polygon(0 44%, 6% 22%, 18% 30%, 31% 16%, 46% 28%, 61% 12%, 76% 26%, 94% 18%, 100% 42%, 96% 66%, 82% 59%, 69% 78%, 53% 63%, 38% 82%, 21% 64%, 7% 75%);
          opacity: 0.42;
          filter: saturate(1.08);
          transform: rotate(-2deg) scaleX(0.28) translateX(-12px);
          transform-origin: left center;
          transition: transform 0.38s ease, opacity 0.3s ease, filter 0.3s ease;
        }

        .walk-button::after {
          position: absolute;
          content: "";
          width: 0;
          left: 10px;
          right: 10px;
          bottom: 2px;
          background: var(--hovered-color);
          height: 2px;
          transition: 0.3s ease-out;
        }

        .walk-button span {
          margin: 0;
          position: relative;
          color: var(--primary-color);
        }

        .walk-button span::before {
          position: absolute;
          content: attr(data-label);
          width: 0%;
          inset: 0;
          color: var(--hovered-color);
          overflow: hidden;
          transition: 0.3s ease-out;
          white-space: nowrap;
        }

        .walk-button svg {
          position: relative;
          width: 15px;
          height: 15px;
          color: var(--primary-color);
          transition: color 0.2s, transform 0.2s;
          transition-delay: 0.12s;
        }

        .walk-button:hover {
          transform: translateY(-2px) rotate(-1deg);
        }

        .walk-button:hover::before {
          opacity: 1;
          filter: saturate(1.25);
          transform: rotate(-2deg) scaleX(1) translateX(0);
        }

        .walk-button:hover::after {
          width: calc(100% - 20px);
        }

        .walk-button:hover span::before {
          width: 100%;
        }

        .walk-button:hover svg {
          transform: translateX(4px);
          color: var(--hovered-color);
        }

        .walk-button:active {
          transform: scale(0.95);
        }

        @media (max-width: 700px) {
          .issue-ribbon {
            top: 72px;
            font-size: 0.64rem;
            padding: 7px 12px 7px 18px;
          }
          .postcard-stack {
            grid-template-columns: minmax(0, 290px);
            min-height: auto;
            padding-inline: 0;
            gap: 0;
          }
          .photo-postcard {
            grid-area: auto;
          }
          .postcard-one,
          .postcard-two,
          .photo-postcard:hover {
            transform: none;
          }
          .postcard-two {
            opacity: 1;
            pointer-events: auto;
            margin-top: -18px;
          }
          .hero::before { background: linear-gradient(90deg, var(--bg) 0 24px, transparent 24px calc(100% - 24px), var(--bg) calc(100% - 24px)); }
          .about-hanger {
            margin-top: 1.5rem;
            padding-top: 66px;
          }
          .about-string {
            height: 88px;
          }
          .string-left {
            transform: translateX(-50%) rotate(39deg);
          }
          .string-right {
            transform: translateX(-50%) rotate(-39deg);
          }
          .gazette-flourish {
            grid-template-columns: 1fr 54px 1fr;
            width: min(84vw, 360px);
            gap: 6px;
          }
          .flourish-curl {
            display: none;
          }
          .flourish-knot {
            grid-column: 2;
          }
          .line-left {
            grid-column: 1;
          }
          .line-right {
            grid-column: 3;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .walk-button,
          .walk-button::before,
          .walk-button::after,
          .walk-button span::before,
          .walk-button svg {
            transition: none;
          }

          .about-hanger:hover .about-postcard,
          .about-hanger:focus-within .about-postcard {
            animation: none;
          }

          .photo-postcard,
          .about-postcard {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
