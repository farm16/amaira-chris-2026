import Hero from "../Hero/Hero";
import HeroScrollable from "../Scrollables/HeroScrollable";
import "./Landing.css"; // Add this line

export default function Landing() {
  return (
    <div className="landing-container">
      <Hero />
      <HeroScrollable />
    </div>
  );
}
