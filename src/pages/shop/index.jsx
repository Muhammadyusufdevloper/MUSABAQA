import { memo, useEffect } from 'react'
import './shop.scss'
import rubleImg from "../../assets/svg/shop/rubl.png"
import { IoCloseCircleOutline } from 'react-icons/io5'

const Shop = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <>
            <section className='cart'>
                <div className='cart__container'>
                    <h1 className='cart__title'>Ваша корзина</h1>
                    <div className='cart__cards'>
                        <div className="cart__card">
                            <div className='cart__img-boxes'>
                            </div>
                            <div className='cart__info-boxes'>
                                <div className='cart__info-boxes__left-info-card'>
                                    <h3 className='cart__info-boxes__title'>МУЖСКАЯ КУРТКА (СКАНДИНАВКА БЕЖЕВАЯ) С КАПЮШОНОМ </h3>
                                    <div>
                                        <p className='cart__info-boxes__size-text'>Размер: XXXL(54)</p>
                                        <p className='cart__info-boxes__size-text'>Рост: 170</p>
                                    </div>
                                </div>
                                <div className='cart__info-boxes__center-info-card'>
                                    <p className='cart__info-boxes__price-text'>8 000 <img src={rubleImg} alt="Ruble img" /></p>
                                    <div className='cart__info-boxes__center-info-card__buttons-card'>
                                        <button>-</button>
                                        <span>2</span>
                                        <button>+</button>
                                    </div>
                                    <div className='cart__info-boxes__center-info-card__sum-card'>
                                        <span>Cумма</span>
                                        <p className='cart__info-boxes__price-text'>16 000 <img src={rubleImg} alt="Ruble img" /></p>
                                    </div>
                                </div>
                                <button className='cart__info-boxes__right-info-card'>
                                    <IoCloseCircleOutline />
                                </button>
                            </div>
                            <button className='cart__right-info-card'>
                                <IoCloseCircleOutline />
                            </button>
                        </div>
                    </div>
                </div>
                <div className=''>
                </div>
            </section>
        </>
    )
}

export default memo(Shop)