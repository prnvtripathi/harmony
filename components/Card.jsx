import { motion } from "framer-motion";

const MAX_DESCRIPTION_LENGTH = 125;

const Card = ({ imageUrl, heading, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center shadow-lg rounded-lg w-1/4 p-6 gap-6 bg-gradient-to-r from-blue-200 to-cyan-200"
        >
            <img src={imageUrl} alt={heading} className="w-5/6 rounded-md" />
            <div className="flex flex-col justify-start items-center gap-3">
                <h5 className="text-3xl font-bold text-blue-600">{heading}</h5>
                <p className="text-sm font-light">{description.slice(0, MAX_DESCRIPTION_LENGTH)}{description.length > MAX_DESCRIPTION_LENGTH ? "..." : ""}</p>            </div>
        </motion.div>
    );
};

export default Card;
