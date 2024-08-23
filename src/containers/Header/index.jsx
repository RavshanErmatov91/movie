import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./header.scss";

function Header() {
  const languages = [
    { code: "en", lang: "English" },
    { code: "uzb", lang: "Uzbek" },
    { code: "fr", lang: "Fransuz" },
  ];
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  function changeLanguage(lng) {
    i18n.changeLanguage(lng);
  }

  return (
    <header>
      <div className="container">
        <nav className="nav">
          <div className="nav__left">
            <h1 className="nav__left-title">
              <NavLink to="/">TMDB</NavLink>
            </h1>
            <ul className="nav__left__ul">
              <li className="nav__left__ul__list">
                <NavLink to="/movies">{t("movies")}</NavLink>
              </li>
              <li className="nav__left__ul__list">
                <NavLink to="/tv">{t("tvshows")}</NavLink>
              </li>
              <li className="nav__left__ul__list">
                <NavLink>{t("people")}</NavLink>
              </li>
              <li className="nav__left__ul__list">
                <NavLink>{t("more")}</NavLink>
              </li>
            </ul>
          </div>
          <div className="nav__right">
            <div className="nav__right__block">
              {/* <select>
                <option selected disabled>
                  Themes
                </option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
              </select> */}

              <select
                onChange={(e) => {
                  changeLanguage(e.target.value);
                }}
              >
                {languages.map((lng) => {
                  return (
                    <option key={lng.code} value={lng.code}>
                      {lng.lang}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
