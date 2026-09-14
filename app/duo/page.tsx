import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "A Little More Life | Mike Maeda",
  description: "A moment with friends from Mike Maeda's life at Alfred University.",
  alternates: { canonical: "/duo" },
  openGraph: {
    title: "A Little More Life | Mike Maeda",
    description: "A moment with friends from Mike Maeda's life at Alfred University.",
    url: "/duo",
    images: [
      {
        url: "/duo-friends.jpg",
        width: 2000,
        height: 1500,
        alt: "Mike Maeda with four friends holding phones and a decorated cake",
      },
    ],
  },
};

export default function DuoPage() {
  return (
    <>
      <section className="duo-page">
        <div className="container duo-shell">
          <div className="duo-heading">
            <div>
              <p className="section-number">A PERSONAL SNAPSHOT / ALFRED, NY</p>
              <h1>A little more life.</h1>
            </div>
            <p>A moment with friends—because there is more to the person behind the projects.</p>
          </div>

          <figure className="duo-photo">
            <Image
              src="/duo-friends.jpg"
              alt="Mike Maeda with four friends holding phones and a decorated cake"
              width={2000}
              height={1500}
              priority
              sizes="(max-width: 760px) calc(100vw - 28px), min(1240px, calc(100vw - 40px))"
            />
            <figcaption>
              <span>MM / OFF THE CLOCK</span>
              <span>01 / 01</span>
            </figcaption>
          </figure>

          <Link href="/" className="duo-back">← Back to the portfolio</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
