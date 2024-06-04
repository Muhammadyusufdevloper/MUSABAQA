import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <Header />
            <main style={{ background: "#F9F7F4",minHeight:"100vh" }}> <Outlet /> </main>
            <Footer />
        </div>
    )
}

export default Layout