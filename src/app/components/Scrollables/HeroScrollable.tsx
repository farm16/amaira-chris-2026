import Image from "next/image";
import "./HeroScrollable.css";

export default function HeroScrollable() {
  return (
    <section className="hero-scrollable">
      <div className="hero-scrollable-content">
        <div className="hero-scrollable-first">
          <div>
            <h2>Lima, Peru</h2>
          </div>
          <Image
            src="https://withjoy.com/assets/public/styles/prod/metallic_dipped_gold/6f3cda6b4fe671154cca8984ac7404730c3dd7262d643b3427fbd202bbf28bbf@2x"
            alt="Lima, Peru"
            width={800}
            height={200}
            className="hero-scrollable-image"
          />
        </div>
        {[...Array(100)].map((_, i) => (
          <p key={i}>
            This is paragraph {i + 1} — we’ll share all the lovely wedding info
            here.
          </p>
        ))}
      </div>
    </section>
  );
}
