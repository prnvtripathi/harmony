import { motion } from 'framer-motion';
import { Advent_Pro } from 'next/font/google'

const adventPro = Advent_Pro({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});


const Hero = () => {
    return (
        <div className="h-screen w-full mx-auto flex justify-center items-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, type: 'spring', stiffness: 100, delay: 0.5 }}
                viewport={{ once: true }}
            >
                <h1 className={`text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent ${adventPro.className}`}>Harmony</h1>
                <p className="text-xl">Everything happening in the college is here.</p>
            </motion.div>
        </div>
    )
}

export default Hero