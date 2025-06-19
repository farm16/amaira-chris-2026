import Image from "next/image";
import "./HeroScrollable.css";
import ChevronDown from "../Icons/ChevronDown";
import { weddingContent } from "@/app/data/weddingContent";

export default function HeroScrollable() {
  const { story, tidbits, whereToStay } = weddingContent;

  return (
    <section className="hero-scrollable">
      <div className="hero-scrollable-content">
        {/* First Section */}
        <div id="hero-scrollable-first" className="hero-scrollable-section">
          <div className="hero-scrollable-first-title">
            <h2>Lima, Peru</h2>
            <a href="#hero-scrollable-second">View Details</a>
            <ChevronDown />
          </div>
          <Image
            src="https://withjoy.com/assets/public/styles/prod/metallic_dipped_gold/6f3cda6b4fe671154cca8984ac7404730c3dd7262d643b3427fbd202bbf28bbf@2x"
            alt="Lima, Peru"
            width={800}
            height={200}
            className="hero-scrollable-image"
          />
        </div>

        {/* Story Section */}
        <div id="hero-scrollable-second" className="hero-scrollable-section">
          <h2>{story.heading}</h2>
          {story.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        {/* Tidbits Section */}
        <div id="hero-scrollable-third" className="hero-scrollable-section">
          <h2>{tidbits.heading}</h2>
          {tidbits.qa.map(({ question, answer }, index) => (
            <div className="hero-scrollable-section-qa" key={index}>
              <p className="hero-scrollable-section-question">{question}</p>
              <p className="hero-scrollable-section-answer">{answer}</p>
            </div>
          ))}
        </div>

        {/* Where to stay */}
        <div id="hero-scrollable-fourth" className="hero-scrollable-section">
          <h2>{whereToStay.heading}</h2>
          <p className="hero-scrollable-section-description">
            {whereToStay.description}
          </p>
          <ul>
            {whereToStay.hotels.map((hotel, index) => (
              <li key={index}>
                <h3>{hotel.name}</h3>
                <p className="hero-scrollable-hotel-address">{hotel.address}</p>

                <div className="hero-scrollable-hotel-image-card">
                  {hotel.image && (
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      width={300}
                      height={200}
                      className="hero-scrollable-hotel-image"
                    />
                  )}
                  <p className="hero-scrollable-hotel-description">
                    {hotel.description}
                  </p>
                  <a
                    href={hotel.link}
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
