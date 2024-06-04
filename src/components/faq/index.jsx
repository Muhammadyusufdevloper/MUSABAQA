import faqImg from "../../assets/images/faq/faq.png"
import faqInfoBackground from "../../assets/images/faq/faqInfoBackground.png"
import { HiOutlinePhone } from "react-icons/hi"
import { MdOutlineEmail } from "react-icons/md"
import "./Faq.scss"

const Faq = () => {
    return (
        <section className="faq">
            <div className="faq__img-box">
                <img src={faqImg} alt="Faq img" />
            </div>
            <div className="home__container">
                <div className="faq__info-boxes">
                    <img className="faq__info-boxes__img" src={faqInfoBackground} alt="faq info background img" />
                    <div className="faq__info-boxes__cards">
                        <div className="faq__info-boxes__card">
                            <HiOutlinePhone />
                            <div>
                                <h3 className="faq__info-boxes__card__title">Телефоны</h3>
                                <p className="faq__info-boxes__card__text" style={{ textWrap: "nowrap" }}>+7 (495) 508-76-45</p>
                                <p className="faq__info-boxes__card__text" style={{ textWrap: "nowrap" }}>+7 (916) 656-98-60</p>
                            </div>
                        </div>
                        <div className="faq__info-boxes-liner"></div>
                        <div className="faq__info-boxes__card">
                            <MdOutlineEmail />
                            <div>
                                <h3 className="faq__info-boxes__card__title"> E-mail</h3>
                                <p className="faq__info-boxes__card__text">lanalux@lanalux.ru</p>
                            </div>
                        </div>
                        <div className="faq__info-boxes-liner"></div>
                        <div className="faq__info-boxes__card">
                            <div><svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Location_On"><g><path d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z"></path><path d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z"></path></g></g></svg></div>
                            <div>
                                <h3 className="faq__info-boxes__card__title">Адрес</h3>
                                <p className="faq__info-boxes__card__text">Россия, Москва,ул. Домодедовская д. 24, корпус 3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq__map-boxes">    
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1890808.803396651!2d68.1185029180012!3d41.0729702576305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1717441523619!5m2!1sen!2s"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    )
}

export default Faq