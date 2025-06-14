"use client";

import Image from "next/image";
import Slider from "react-slick";
import "./Hero.css";

const images = [
  "https://withjoy.com/media/eb7c10593c53932848263b48a6dfbb7a64878e7644644373c/classic_wedding_info_1717740693.jpeg?rendition=xlarge",
  "https://withjoy.com/media/eb7c10593c53932848263b48a6dfbb7a64878e7644644373c/classic_wedding_story_1717740693.jpeg?rendition=xlarge",
  "https://withjoy.com/media/eb7c10593c53932848263b48a6dfbb7a64878e7644644373c/classic_wedding_faq_1717740693.jpeg?rendition=xlarge",
];

export default function Hero() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 2000,
    pauseOnHover: false,
  };

  return (
    <section className="hero">
      <Slider {...settings} className="hero-slider">
        {images.map((src, index) => (
          <div key={index} className="hero-image">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              quality={80}
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>
      <div className="hero-overlay">
        <div className="hero-overlay-content">
          <h1>Amaira & Christopher</h1>
          <p>
            We can&apos;t wait to share our special day with you. Help us
            capture our wedding with Joy.
          </p>
        </div>
      </div>
    </section>
  );
}
