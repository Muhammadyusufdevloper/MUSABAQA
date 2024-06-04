import { useState } from "react";
import "./Information.scss";
import information from "../../assets/images/information/information.png";

const Information = () => {
    const [activeSection, setActiveSection] = useState('delivery');

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <section className="information">
            <div className="home__container">
                <h2 className="information__title">Информация для покупателя</h2>

                <div className="information__wrapper">
                    <ul className="information__list-boxes">
                        <li className="information__item-boxes" onClick={() => toggleSection('delivery')}>
                            <div className={`information__item-boxes__line ${activeSection === 'delivery' ? 'active' : ''}`}></div>
                            <p className={`information__item-boxes__text ${activeSection === 'delivery' ? 'active' : ''}`}>Доставка и оплата</p>
                        </li>
                        <li className="information__item-boxes" onClick={() => toggleSection('exchange')}>
                            <div className={`information__item-boxes__line ${activeSection === 'exchange' ? 'active' : ''}`}></div>
                            <p className={`information__item-boxes__text ${activeSection === 'exchange' ? 'active' : ''}`}>ОБМЕН И ВОЗВРАТ</p>
                        </li>
                        <li className="information__item-boxes" onClick={() => toggleSection('sizes')}>
                            <div className={`information__item-boxes__line ${activeSection === 'sizes' ? 'active' : ''}`}></div>
                            <p className={`information__item-boxes__text ${activeSection === 'sizes' ? 'active' : ''}`}>РАЗМЕРЫ</p>
                        </li>
                        <li className="information__item-boxes" onClick={() => toggleSection('promotions')}>
                            <div className={`information__item-boxes__line ${activeSection === 'promotions' ? 'active' : ''}`}></div>
                            <p className={`information__item-boxes__text ${activeSection === 'promotions' ? 'active' : ''}`}>Акции</p>
                        </li>
                        <li>
                            <img src={information} alt="information img" />
                        </li>
                    </ul>
                    <div className="information__info-boxes">
                        {/* Доставка и оплата */}
                        <div className={`info-content ${activeSection === 'delivery' ? 'active' : ''}`}>
                            <p className="information__info-boxes__text">По Москве доставка в течение 2-х дней. Оплата курьеру. Стоимость доставки в пределах МКАД 300 ₽. При отказе от заказа услуги курьера оплачиваются в размере 300 ₽. Стоимость доставки за МКАД по Московской области 500–1 000 ₽ в зависимости от удалённости от Москвы.</p>
                            <p className="information__info-boxes__text">В регионы России отправка производится Почтой России или транспортной компанией СДЭК. Оплата может производиться одним из 2-х способов, выбранных по Вашему желанию:</p>
                            <p className="information__info-boxes__text">1 способ: Оплата наложенным платежом при получении посылки стоимостью не более 5 000₽ <br /> Почта взимает небольшую комиссию за перевод денежных средств. Стоимость пересылки оплачивает покупатель.</p>
                            <p className="information__info-boxes__text">2 способ: При заказе более 5 000 ₽ с учётом частичной стоимости пересылки от 250р. до 700 ₽. Вам необходимо перечислить предоплату в размере 100% через Сбербанк или любой другой банк, на расчётный счёт компании ЛАНА ЛЮКС по следующим реквизитам:</p>
                            <div>
                                <p>ООО «ЛАНА ЛЮКС»</p>
                                <p>ОГРН 5077746962519</p>
                                <p>ИНН 7718651160 КПП 772401001</p>
                            </div>
                            <div>
                                <p>Юр.адрес: 115582, Москва ул. Домодедовская, дом 24, корп. 3 эт. 1 пом.2 ком. 1</p>
                                <p>к/с 30101810200000000593</p>
                                <p>р/с 40702810202360002431 в АО «АЛЬФА-БАНК» г. Москва</p>
                                <p>БИК 044525593</p>
                            </div>
                            <p className="information__info-boxes__text">Если сумма пересылки превышает 700рублей, то доплату берет на себя компания ЛАНА ЛЮКС.</p>
                        </div>

                        {/* ОБМЕН И ВОЗВРАТ */}
                        <div className={`info-content ${activeSection === 'exchange' ? 'active' : ''}`}>
                            <p className="information__info-boxes__text">По Москве доставка в течение 2-х дней. Оплата курьеру. Стоимость доставки в пределах МКАД 300 ₽. При отказе от заказа услуги курьера оплачиваются в размере 300 ₽. Стоимость доставки за МКАД по Московской области 500–1 000 ₽ в зависимости от удалённости от Москвы.</p>
                            <p className="information__info-boxes__text">В регионы России отправка производится Почтой России или транспортной компанией СДЭК. Оплата может производиться одним из 2-х способов, выбранных по Вашему желанию:</p>
                            <p className="information__info-boxes__text">2 способ: При заказе более 5 000 ₽ с учётом частичной стоимости пересылки от 250р. до 700 ₽. Вам необходимо перечислить предоплату в размере 100% через Сбербанк или любой другой банк, на расчётный счёт компании ЛАНА ЛЮКС по следующим реквизитам:</p>
                            <p className="information__info-boxes__text">1 способ: Оплата наложенным платежом при получении посылки стоимостью не более 5 000₽ <br /> Почта взимает небольшую комиссию за перевод денежных средств. Стоимость пересылки оплачивает покупатель.</p>
                            <div>
                                <p>ООО «ЛАНА ЛЮКС»</p>
                                <p>ОГРН 5077746962519</p>
                                <p>ИНН 7718651160 КПП 772401001</p>
                            </div>
                            <div>
                                <p>р/с 40702810202360002431 в АО «АЛЬФА-БАНК» г. Москва</p>
                                <p>Юр.адрес: 115582, Москва ул. Домодедовская, дом 24, корп. 3 эт. 1 пом.2 ком. 1</p>
                                <p>к/с 30101810200000000593</p>
                                <p>БИК 044525593</p>
                            </div>
                            <p className="information__info-boxes__text">Если сумма пересылки превышает 700рублей, то доплату берет на себя компания ЛАНА ЛЮКС.</p>
                        </div>

                        {/* РАЗМЕРЫ */}
                        <div className={`info-content ${activeSection === 'sizes' ? 'active' : ''}`}>
                            <p className="information__info-boxes__text">По Москве доставка в течение 2-х дней. Оплата курьеру. Стоимость доставки в пределах МКАД 300 ₽. При отказе от заказа услуги курьера оплачиваются в размере 300 ₽. Стоимость доставки за МКАД по Московской области 500–1 000 ₽ в зависимости от удалённости от Москвы.</p>
                            <p className="information__info-boxes__text">1 способ: Оплата наложенным платежом при получении посылки стоимостью не более 5 000₽ <br /> Почта взимает небольшую комиссию за перевод денежных средств. Стоимость пересылки оплачивает покупатель.</p>
                            <p className="information__info-boxes__text">2 способ: При заказе более 5 000 ₽ с учётом частичной стоимости пересылки от 250р. до 700 ₽. Вам необходимо перечислить предоплату в размере 100% через Сбербанк или любой другой банк, на расчётный счёт компании ЛАНА ЛЮКС по следующим реквизитам:</p>
                            <p className="information__info-boxes__text">В регионы России отправка производится Почтой России или транспортной компанией СДЭК. Оплата может производиться одним из 2-х способов, выбранных по Вашему желанию:</p>
                            <div>
                                <p>ОГРН 5077746962519</p>
                                <p>ООО «ЛАНА ЛЮКС»</p>
                                <p>ИНН 7718651160 КПП 772401001</p>
                            </div>
                            <div>
                                <p>Юр.адрес: 115582, Москва ул. Домодедовская, дом 24, корп. 3 эт. 1 пом.2 ком. 1</p>
                                <p>к/с 30101810200000000593</p>
                                <p>р/с 40702810202360002431 в АО «АЛЬФА-БАНК» г. Москва</p>
                                <p>БИК 044525593</p>
                            </div>
                            <p className="information__info-boxes__text">Если сумма пересылки превышает 700рублей, то доплату берет на себя компания ЛАНА ЛЮКС.</p>
                        </div>

                        {/* Акции */}
                        <div className={`info-content ${activeSection === 'promotions' ? 'active' : ''}`}>
                            <p className="information__info-boxes__text">В регионы России отправка производится Почтой России или транспортной компанией СДЭК. Оплата может производиться одним из 2-х способов, выбранных по Вашему желанию:</p>
                            <p className="information__info-boxes__text">1 способ: Оплата наложенным платежом при получении посылки стоимостью не более 5 000₽ <br /> Почта взимает небольшую комиссию за перевод денежных средств. Стоимость пересылки оплачивает покупатель.</p>
                            <p className="information__info-boxes__text">2 способ: При заказе более 5 000 ₽ с учётом частичной стоимости пересылки от 250р. до 700 ₽. Вам необходимо перечислить предоплату в размере 100% через Сбербанк или любой другой банк, на расчётный счёт компании ЛАНА ЛЮКС по следующим реквизитам:</p>
                            <p className="information__info-boxes__text">По Москве доставка в течение 2-х дней. Оплата курьеру. Стоимость доставки в пределах МКАД 300 ₽. При отказе от заказа услуги курьера оплачиваются в размере 300 ₽. Стоимость доставки за МКАД по Московской области 500–1 000 ₽ в зависимости от удалённости от Москвы.</p>
                            <div>
                                <p>ООО «ЛАНА ЛЮКС»</p>
                                <p>ОГРН 5077746962519</p>
                                <p>ИНН 7718651160 КПП 772401001</p>
                            </div>
                            <div>
                                <p>к/с 30101810200000000593</p>
                                <p>Юр.адрес: 115582, Москва ул. Домодедовская, дом 24, корп. 3 эт. 1 пом.2 ком. 1</p>
                                <p>БИК 044525593</p>
                                <p>р/с 40702810202360002431 в АО «АЛЬФА-БАНК» г. Москва</p>
                            </div>
                            <p className="information__info-boxes__text">Если сумма пересылки превышает 700рублей, то доплату берет на себя компания ЛАНА ЛЮКС.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Information;

