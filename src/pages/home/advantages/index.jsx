import { advantagesData } from "../../../static";
import "./Advantages.scss";
import advantagesImg from "../../../assets/images/advantages/advantagesImg.png"

const Advantages = () => {
    const advantagesCards = advantagesData.map((advantage) => (
        <div className="advantages__card" key={advantage.id}>
            <img src={advantage.imgSrc} alt={advantage.imgAlt} />
            <div>
                <h3 className="advantages__card-title">{advantage.title}</h3>
                <p className="advantages__card-text">{advantage.text}</p>
            </div>
        </div>
    ));

    return (
        <section className="advantages">
            <div className="home__container">
                <div className="advantages__wrapper">
                    <img className="advantages__img" src={advantagesImg} alt="advantages background img" />
                    <div className="advantages__boxes">
                        <h2 className="advantages__title">Преимущества</h2>
                        <div className="advantages__cards">
                            {advantagesCards}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;
