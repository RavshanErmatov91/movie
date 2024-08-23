import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "",
    resources: {
      en: {
        translation: {
          movies: "Movies",
          people: "People",
          tvshows: "Tv Shows",
          more: "More",
          searchfilm: "search film...",
          search: "Search",
        },
      },
      uzb: {
        translation: {
          movies: "Filmlar",
          people: "Odamlar",
          tvshows: "Teleko'rsatuvlar",
          more: "Ko'proq",
          searchfilm: "Kino qidirish...",
          search: "Qidirish",
        },
      },
      fr: {
        translation: {
          movies: "Films",
          people: "Personnes",
          tvshows: "Emissons de televison",
          more: "Plus",
          searchfilm: "rechercher un film...",
          search: "Recherche",
        },
      },
    },
  });
