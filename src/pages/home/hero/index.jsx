import "./Hero.scss"
import heroBottomImg from "../../../assets/images/hero/herobottom.png"
import heroTopImg from "../../../assets/images/hero/hero-img.png"

const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="home__container hero__wrapper">
                    <div className="hero__info-box">
                        <h2 className="hero__info-box__title">Кардиганы: <br />
                            80% шерсти мериноса
                            и 20% шерсти ангоры</h2>
                        <button className="hero__info-box__btn">Перейти</button>
                    </div>
                    <div className="hero__img-box">
                        <img src={heroTopImg} alt="Hero img" />
                    </div>
                </div>
                <div className="hero__bottom__img-card">
                    <img className="hero__bottom__img" src={heroBottomImg} alt="Hero bottom img" />
                </div>
            </section>
        </>
    )
}

export default Hero