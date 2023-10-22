import { Montserrat, Satisfy } from "next/font/google"

const montserrat = Montserrat({
    subsets: ['latin'],
    weights: ['400']
})

const satisfy = Satisfy({
    subsets: ['latin'],
    weight: ['400']
})

const Banner = () => {
    return (
        <div className="py-20 text-secondaryText text-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-2">
            <h2 className={`text-4xl md:text-6xl ${montserrat.className}`}>Host Events</h2>
            <p className={`text-lg md:text-2xl py-5 mx-4 ${satisfy.className}`}>with Harmony. 🎵</p>
        </div>
    )
}

export default Banner