import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <p>MIKE MAEDA © {new Date().getFullYear()}</p>
        <p>ALFRED, NEW YORK</p>
        <Link href="#top">BACK TO TOP</Link>
      </div>
    </footer>
  );
}
