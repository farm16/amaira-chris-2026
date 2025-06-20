import Image from "next/image";
import "./HeroScrollable.css";
import ChevronDown from "../Icons/ChevronDown";
import { useMessages } from "next-intl";

export default function HeroScrollable() {
  const messages = useMessages();

  return (
    <section className="hero-scrollable">
      <div className="hero-scrollable-content">
        {/* First Section */}
        <div id="hero-scrollable-first" className="hero-scrollable-section">
          <div className="hero-scrollable-first-title">
            <h2>{messages.landingPage.title}</h2>
            <a href="#story">{messages.landingPage.viewDetailButton}</a>
            <ChevronDown />
          </div>
          <Image
            src={messages.landingPage.image}
            alt={messages.landingPage.imageAlt}
            width={800}
            height={150}
            className="hero-scrollable-image"
          />
        </div>
        {/* Story Section */}
        <div id="story" className="hero-scrollable-section">
          <h2>{messages.story.heading}</h2>

          {(messages.story.paragraphs as string[]).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
          <div className="spacer" />
        </div>
        {/* Tidbits Section */}
        <div id="tidbits" className="hero-scrollable-section">
          <h2>{messages.tidbits.heading}</h2>
          {(
            messages.tidbits.qa as {
              question: string;
              answer: string;
            }[]
          ).map(({ question, answer }, index) => (
            <div className="hero-scrollable-section-qa" key={index}>
              <p className="hero-scrollable-section-question">{question}</p>
              <p className="hero-scrollable-section-answer">{answer}</p>
            </div>
          ))}
          <div className="spacer" />
        </div>

        {/* Where to stay */}
        <div id="whereToStay" className="hero-scrollable-section">
          <h2>{messages.whereToStay.heading}</h2>
          <p className="hero-scrollable-section-description">
            {messages.whereToStay.description}
          </p>
          <ul>
            {(
              messages.whereToStay.hotels as {
                name: string;
                address: string;
                image?: string;
                description: string;
                link: string;
              }[]
            ).map((hotel, index) => (
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
          <div className="spacer" />
        </div>
      </div>
    </section>
  );
}
