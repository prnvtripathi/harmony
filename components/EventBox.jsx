import Card from "./Card";
import { motion } from "framer-motion";

const cardData = [
    {
        heading: "Cultural Events",
        description: "Culture is the characteristics and knowledge of a particular group of people, encompassing language, religion, cuisine, social habits, music and arts.",
        imageUrl: "https://picsum.photos/200",
    },
    {
        heading: "Technical Events",
        description: "Technical events are events that are related to the technical aspects of a particular field. For example a hackathon, speaker sessions, ted talks.",
        imageUrl: "https://picsum.photos/200",
    },
    {
        heading: "Sports Events",
        description: "Sports events are events that are related to the sports aspects of a particular field. For example a athletics, volleyball, table-tennis etc.",
        imageUrl: "https://picsum.photos/200",
    },
]

const EventBox = () => {
    return (
        <div className="bg-white px-4 py-12 text-black">
            <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-center text-2xl md:text-5xl font-bold mt-3 mb-9 underline-offset-2 underline"
            >
                Events happening around the campus...
            </motion.h2>
            <div className="flex flex-col md:flex-row justify-evenly items-center">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        heading={card.heading}
                        description={card.description}
                        imageUrl={card.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default EventBox;
