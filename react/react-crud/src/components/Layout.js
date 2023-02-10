import { Outlet } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import './Layout.css'
const Layout = () => {
    return (
            <main className="App">
                <Header/>
                <Outlet />
                <Footer/>
            </main>
    )
}

export default Layout
