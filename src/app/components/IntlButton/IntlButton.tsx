"use client";

import { useState, useTransition } from "react";
import { useLocale, useMessages } from "next-intl";
import Image from "next/image";
import { ChevronDown, Globe } from "lucide-react";
import "./IntlButton.css";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/app/services/locale";

const IntlButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const messages = useMessages();

  const locale = useLocale() as Locale;
  const [, startTransition] = useTransition();

  const handleChange = (locale: Locale) => {
    console.log("locale", locale);
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  return (
    <div className="intl-dropdown-wrapper">
      <button
        className="intl-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Cambiar idioma"
      >
        <Globe strokeWidth={1.5} className="intl-icon" />
        <ChevronDown className="intl-chevron" />
      </button>

      {isOpen && (
        <ul className="intl-dropdown-menu">
          {(
            messages.languages as {
              locale: string;
              name: string;
              icon: string;
              href: string;
            }[]
          ).map((lang) => (
            <li
              key={lang.locale}
              onClick={() => {
                setIsOpen(false);
                handleChange(lang.locale);
              }}
            >
              <Image
                src={lang.icon}
                width={24}
                height={24}
                loading="lazy"
                alt={`${lang.name} flag`}
                className="intl-flag"
              />
              <span>{lang.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IntlButton;
