import { useState } from 'react';
import { Link } from "react-router-dom";
import "./Header.scss";
import siteLogo from "../../assets/svg/header/SITE LOGO.svg";
import cartIcon from "../../assets/svg/header/cart.svg";
import { IoSearchOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import Search from "../../components/search";
import { RiCloseLargeLine } from "react-icons/ri";
import Catalog from "../../components/catalog";
import ruFlag from "../../assets/svg/header/rus-flag.svg";
import usFlag from "../../assets/svg/header/usa-flag.svg";
import { IoIosArrowDown } from 'react-icons/io';

const languages = [
    { code: 'RU', name: 'Russian', flag: ruFlag },
    { code: 'EN', name: 'English', flag: usFlag },
];

const Header = () => {
    const [searchBtn, setSearchBtn] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [shrink, setShrink] = useState(0)
    window.addEventListener("scroll", () => {
        setShrink(scrollY);
    })
    const handleCatalogClick = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        setIsDropdownOpen(false);
    };
    return (
        <header className={`header  ${shrink >= 60 ? "header__shrink" : ""}`}>
            <nav className="header__container header__navbar">
                <div className="header__left-boxes">
                    <div className="header__logo-wrapper">
                        <Link to={"/"} className="header__logo-link">
                            <img src={siteLogo} alt="Site log format svg" />
                        </Link>
                    </div>
                    <div className="header__catalog-box">
                        <button onClick={handleCatalogClick} className="header__catalog-btn">
                            <div className="header__catalog-card">
                                <div className="header__catalog-btn__align-left">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <p>каталог</p>
                            </div>
                        </button>
                        {showDropdown ? <Catalog /> : <></>}
                    </div>
                    <h1 className="header__title">Одежда и постель из натуральной шерсти</h1>
                </div>
                <div className={`header__right-boxes ${shrink >= 50 ? "header__right-boxes__shrink" : ""}`}>
                    <div className="header__catalog-box header__right-boxes__catalog-box">
                        <button onClick={handleCatalogClick} className="header__catalog-btn">
                            <div className="header__catalog-card">
                                <div className="header__catalog-btn__align-left">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <p>каталог</p>
                            </div>
                        </button>
                        {showDropdown ? <Catalog /> : <></>}
                    </div>
                    <div className="header__phone-call">
                        <a className="header__phone-number-link" href="tel:+74955087645">+7 (495) 508-76-45</a>
                        <a className="header__phone-link-link" href="tel:+74955087645">заказать звонок</a>
                        <a className="header__phone-call-link" href="tel:+74955087645"><FiPhone /></a>
                    </div>
                    <div className="header__search-box">
                        <button onClick={() => setSearchBtn(p => !p)} className="header__search-btn">
                            {searchBtn ? <RiCloseLargeLine /> : <IoSearchOutline />}
                        </button>
                        {searchBtn ? <Search setSearchBtn={setSearchBtn} /> : <></>}
                    </div>
                    <Link to={"/shop"} className="header__cart-link">
                        <img src={cartIcon} alt="Site cart format-svg" />
                        <div>0</div>
                    </Link>
                    <div className="header__language-select">
                        <div
                            className="header__selected-language"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <span className='header__language-options__text'>{selectedLanguage.code}</span>
                            <img src={selectedLanguage.flag} alt={`${selectedLanguage.name} Flag`} />
                            <IoIosArrowDown className="header__arrow" />
                        </div>
                        {isDropdownOpen && (
                            <div className="header__language-options">
                                {languages.filter(language => language.code !== selectedLanguage.code).map((language) => (
                                    <div
                                        key={language.code}
                                        className="header__language-option"
                                        onClick={() => handleLanguageChange(language)}
                                    >
                                        <span className='header__language-options__text'>{language.code}</span>
                                        <img src={language.flag} alt={`${language.name} Flag`} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
