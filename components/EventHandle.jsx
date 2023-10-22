import { Montserrat } from "next/font/google"
import HR from "./HR";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const EventHandle = () => {
    return (
        <div className='p-6 flex flex-col gap-8 mb-4 mt-6'>
            <div className='flex items-center justify-evenly w-5/6 mx-auto'>
                <div>
                    <img className="rounded-lg hover:scale-95 transition" src="https://picsum.photos/500" alt="Picture of the author" />
                </div>
                <div>
                    <h2 className={`text-5xl font-bold w-5/6 ${montserrat.className}`}>We've kept the history</h2>
                </div>
            </div>
            <HR />
            <div className='flex items-center justify-evenly w-5/6 mx-auto'>
                <div>
                    <h2 className={`text-5xl font-bold w-5/6 ${montserrat.className}`}>and list of upcoming ones too..</h2>
                </div>
                <div>
                    <img className="rounded-lg hover:scale-95 transition" src="https://picsum.photos/500" alt="Picture of the author" />
                </div>
            </div>
        </div>
    )
}

export default EventHandle