import sheepImg from "../assets/images/types-of-wool/sheep.png"
import LlamaImg from "../assets/images/types-of-wool/AlpagaSouriantDesert.jpg"
import мериносImg from "../assets/images/types-of-wool/меринос.png"
import ламаAльпакаImg from "../assets/images/types-of-wool/лама - альпака.png"
import кашемирImg from "../assets/images/types-of-wool/кашемирImg.png"
import верблюдImg from "../assets/images/types-of-wool/верблюдImg.png"
import cashmere from "../assets/images/types-of-wool/cashmere.webp"
import camelHair from "../assets/images/types-of-wool/calel.jpg"

import carImg from "../assets/svg/advantages/car-img.svg";
import declarations from "../assets/svg/advantages/declarations.svg";
import bonuses from "../assets/svg/advantages/bonuses.svg";



const menuItems = [
    {
        title: 'ПОСТЕЛЬНОЕ БЕЛЬЁ',
        submenu: ['НАМАТРАСНИКИ', 'ОДЕЯЛА', 'ОДЕЯЛА ЗИМНИЕ', 'ПОДУШКИ', 'СПАЛЬНЫЙ КОМПЛЕКТ']
    },

    {
        title: 'Домашняя одежда',
        submenu: ['НАМАТРАСНИКИ', 'ОДЕЯЛА', 'ОДЕЯЛА ЗИМНИЕ', 'ПОДУШКИ', 'СПАЛЬНЫЙ КОМПЛЕКТ']
    },

    {
        title: 'Одежда',
        submenu: ['НАМАТРАСНИКИ', 'ОДЕЯЛА', 'ОДЕЯЛА ЗИМНИЕ', 'ПОДУШКИ', 'СПАЛЬНЫЙ КОМПЛЕКТ']
    },
    {
        title: 'Для детей',
        submenu: ['НАМАТРАСНИКИ', 'ОДЕЯЛА', 'ОДЕЯЛА ЗИМНИЕ', 'ПОДУШКИ', 'СПАЛЬНЫЙ КОМПЛЕКТ']
    },
    {
        title: 'Подушки для сна',
        submenu: ['НАМАТРАСНИКИ', 'ОДЕЯЛА', 'ОДЕЯЛА ЗИМНИЕ', 'ПОДУШКИ', 'СПАЛЬНЫЙ КОМПЛЕКТ']
    },
    {
        title: 'Декоративные подушки',
        submenu: ['НАМАТРАСНИКИ', 'ОДЕЯЛА', 'ОДЕЯЛА ЗИМНИЕ', 'ПОДУШКИ', 'СПАЛЬНЫЙ КОМПЛЕКТ']
    },
    {
        title: 'Головные уборы и шарфы',
        submenu: ['НАМАТРАСНИКИ', 'ОДЕЯЛА', 'ОДЕЯЛА ЗИМНИЕ', 'ПОДУШКИ', 'СПАЛЬНЫЙ КОМПЛЕКТ']
    },
    {
        title: 'Аксессуары и прочее',
        submenu: ['НАМАТРАСНИКИ', 'ОДЕЯЛА', 'ОДЕЯЛА ЗИМНИЕ', 'ПОДУШКИ', 'СПАЛЬНЫЙ КОМПЛЕКТ']
    },
    {
        title: 'Постель из хлопка',
        submenu: ['НАМАТРАСНИКИ', 'ОДЕЯЛА', 'ОДЕЯЛА ЗИМНИЕ', 'ПОДУШКИ', 'СПАЛЬНЫЙ КОМПЛЕКТ']
    },
];
export default menuItems


export const typesOfWool = [
    {
        id: 1,
        title: "Шерсть мериноса",
        basis: мериносImg,
        images: [
            sheepImg,
            sheepImg,
            sheepImg
        ]
    },
    {
        id: 2,
        title: "Шерсть ламы-альпаки",
        basis: ламаAльпакаImg,
        images: [
            LlamaImg,
            LlamaImg,
            LlamaImg
        ]
    },
    {
        id: 3,
        title: "кашемир",
        basis: кашемирImg,
        images: [
            cashmere,
            cashmere,
            cashmere
        ]
    },
    {
        id: 4,
        title: "шерсть верблюда",
        basis: верблюдImg,
        images: [
            camelHair,
            camelHair,
            camelHair
        ]
    }
]

export const advantagesData = [
    {
        id: 1,
        imgSrc: carImg,
        imgAlt: "Car img",
        title: "Доставка по России",
        text: "Почтой России или транспортной компанией СДЭК."
    },
    {
        id: 2,
        imgSrc: declarations,
        imgAlt: "Declarations img",
        title: "Декларации EAC",
        text: "В наличии на всю продукцию."
    },
    {
        id: 3,
        imgSrc: bonuses,
        imgAlt: "Bonuses img",
        title: "Бонусы и подарки",
        text: "При заказе."
    }
];
