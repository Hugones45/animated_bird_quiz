import { GiEagleEmblem, GiNestEggs, GiBirchTrees } from "react-icons/gi"
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Beggining.module.css"

export const Beggining = () => {

    const loaderVariants = {
        animationOne: {
            x: [0, 1050],
            y: [0, -150],
            transition: {
                duration: 4,
                repeatType: "mirror",
                repeat: Infinity,
            }
        }
    }


    const navigate = useNavigate()

    const handleDragEnd = (event) => {
        const birdRect = event.target.getBoundingClientRect();
        const nestRect = document.getElementById("nest").getBoundingClientRect();

        if (
            birdRect.left >= nestRect.left &&
            birdRect.right <= nestRect.right &&
            birdRect.top >= nestRect.top &&
            birdRect.bottom <= nestRect.bottom
        ) {
            navigate('/questionPages')
        }
    };

    return (
        <div
            className={styles.divContainer}>
            <motion.div
                variants={loaderVariants}
                animate='animationOne'
                drag
                dragConstraints={{ left: 30, top: 1, right: 1000, bottom: 1 }}
                dragElastic={0.9}
                onDragEnd={handleDragEnd}
                className={styles.holdHere}
                style={{ scale: '9.5', position: "absolute", top: "500px", left: "100px", zIndex: '1' }}><GiEagleEmblem /></motion.div>

            <motion.div
                id="nest"
                style={{ scale: '8', position: "absolute", top: "150px", left: "510px", zIndex: '1', color: '#b8860b' }}>
                <GiNestEggs />
            </motion.div>

            <div>
                <GiBirchTrees style={{ scale: '65', zIndex: '0', color: '#8b4513' }} className={styles.theTree} />
            </div>

        </div>
    );
};



