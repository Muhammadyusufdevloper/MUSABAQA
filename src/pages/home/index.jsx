import { memo } from 'react'
import './home.scss'
import Hero from './hero'
import TypesOfWool from './types-of-wool'
import Advantages from './advantages'
import Information from '../../components/information'
import Faq from '../../components/faq'
import Category from './category'
// import Loading from '../../components/loading'

const Home = () => {
    return (
        <>
            <Hero />
            <TypesOfWool />
            <Advantages />
            <Category/>
            <Information />
            <Faq />
        </>
    )
}

export default memo(Home)