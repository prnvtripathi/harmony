import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main className='min-w-screen min-h-screen'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout