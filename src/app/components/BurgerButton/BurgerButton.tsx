"use client";

import { Fragment, useState } from "react";
import { weddingContent } from "@/app/data/weddingContent";
import "./BurgerButton.css";

const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => setIsOpen(!isOpen);

  const onMenuPress = (item: { name?: string; href?: string }) => {
    console.log("Menu item pressed:", item);
    setIsOpen(false);
    //     act like a link dont scroll just go to the href domain that uses an id
    if (item.href) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  //   check if weddingContent has story tidbits whereToStay, if preset push to array
  const menuItems = [];
  if (weddingContent.story) {
    menuItems.push({ name: "Story", href: "#story" });
  }
  if (weddingContent.tidbits) {
    menuItems.push({ name: "Tidbits", href: "#tidbits" });
  }
  if (weddingContent.whereToStay) {
    menuItems.push({ name: "Where to Stay", href: "#whereToStay" });
  }

  return (
    <Fragment>
      <div
        className={`burger-button-container ${isOpen ? "hidden" : ""}`}
        onClick={onClick}
      >
        <button className="burger-button" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <span className="burger-button-text">MENU</span>
      </div>
      <nav className={`burger-menu${isOpen ? " open" : ""} navbar-container`}>
        {/* icon button close */}
        <svg
          onClick={onClick}
          width={24}
          height={24}
          className="close-button-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke={"rgb(174, 190, 148)"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
        {/* menu items */}
        <div className="burger-menu-header">
          <h2 className="burger-menu-title">
            {`${weddingContent.groom.name} &`}
            <br />
            {`${weddingContent.bride.name}`}
          </h2>
        </div>
        {/* List of menu items */}
        <ul className="burger-menu-list">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => onMenuPress(item)}
              className="burger-menu-item"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </Fragment>
  );
};

export default BurgerButton;
