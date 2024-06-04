import { Link } from "react-router-dom";
import siteLogo from "../../assets/svg/header/SITE LOGO.svg";
import masterLogo from "../../assets/svg/footer/master card.svg"
import MaestroLogo from "../../assets/svg/footer/maestro.svg"
import visaLogo from "../../assets/svg/footer/visa.svg"
import mirCard from "../../assets/svg/footer/mir.svg"
import artix from "../../assets/svg/footer/artix.svg"
import "./Footer.scss"
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__top-cards">
                        <div className="footer__top-card">
                            <Link className="footer__site-log-link">
                                <img src={siteLogo} alt="Site logo img" />
                            </Link>
                            <p className="footer__top-card-one-text">Одежда и постель из натуральной шерсти <br />мериноса, ламы, кашемира, верблюда</p>
                            <p className="footer__top-card-one-text">© 2021 LanaLux. Все права защищены.</p>
                        </div>
                        <ul className="footer__top-card">
                            <li className="footer__top-item">
                                <h3 className="footer__top-title">Виды шерсти</h3>
                            </li>
                            <li className="footer__top-item">
                                <Link className="footer__top-link">Шерсть мериноса</Link>
                            </li>
                            <li className="footer__top-item">
                                <Link className="footer__top-link">Шерсть ламы-альпаки</Link>
                            </li>
                            <li className="footer__top-item">
                                <Link className="footer__top-link">Шерсть верблюда</Link>
                            </li>
                            <li className="footer__top-item">
                                <Link className="footer__top-link">Кашемир</Link>
                            </li>
                        </ul>
                        <ul className="footer__top-card">
                            <li className="footer__top-item">
                                <h3 className="footer__top-title">для клиентов</h3>
                            </li>
                            <li className="footer__top-item">
                                <Link className="footer__top-link">Доставка и оплата</Link>
                            </li>
                            <li className="footer__top-item">
                                <Link className="footer__top-link">Обмен и возврат</Link>
                            </li>
                            <li className="footer__top-item">
                                <Link className="footer__top-link">Размеры</Link>
                            </li>
                            <li className="footer__top-item">
                                <Link className="footer__top-link">Акции</Link>
                            </li>
                        </ul>
                        <ul className="footer__top-card">
                            <li className="footer__top-item">
                                <h3 className="footer__top-title">Наши контакты</h3>
                            </li>
                            <li className="footer__top-item">
                                <a href="tel:+74955087645" className="footer__top-link">+7 (495) 508-76-45</a>
                            </li>
                            <li className="footer__top-item">
                                <a href="email:lanalux@lanalux.ru" className="footer__top-link">lanalux@lanalux.ru </a>
                            </li>
                            <li className="footer__top-item">
                                <p className="footer__top-link">Россия, Москва, <br /> ул. Домодедовская <br /> д. 24, корпус 3</p>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__bottom-card">
                        <p className="footer__bottom-card-text">Договор оферта</p>
                        <p className="footer__bottom-card-text">Политика в отношении обработки персональных данных</p>
                        <div className="footer__bottom-card-partners">
                            <a target="_blank" href="https://www.mastercard.us/en-us.html">
                                <img src={masterLogo} alt="MasterCard logo" />
                            </a>
                            <a target="_blank" href="https://maestro.com/">
                                <img src={MaestroLogo} alt="Maestro logo" />
                            </a>
                            <a target="_blank" href="https://https://cis.visa.com/">
                                <img src={visaLogo} alt="Visa logo" />
                            </a>
                            <a target="_blank" href="https://https://cis.visa.com/">
                                <img src={mirCard} alt="Mir logo" />
                            </a>
                        </div>
                        <div className="footer__bottom-card__part">
                            <p className="footer__bottom-card__part__text"> Разработка
                                <br />
                                сайтов</p>
                            <img src={artix} alt="artix logo" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer