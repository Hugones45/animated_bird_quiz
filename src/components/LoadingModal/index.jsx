import { motion } from "framer-motion"
import styles from "./LoadingModal.module.css"
import { GiHummingbird, GiNestBirds, GiEgyptianBird } from "react-icons/gi"

export const LoadingModal = () => {

    const loaderVariants = {
        animationOne: {
            y: [0, -50],
            transition: {
                repeatType: "mirror",
                repeat: Infinity,
            }
        }
    }

    const loaderVariantsOposite = {
        animationOneOposite: {
            y: [-50, 0],
            transition: {
                repeatType: "mirror",
                repeat: Infinity,
            }
        }
    }

    return (
        <div className={styles.loaderContainer}>
            <motion.div
                variants={loaderVariants}
                animate='animationOne'
            >
                <GiHummingbird style={{ scale: '8' }} />
            </motion.div>
            <motion.div
                variants={loaderVariantsOposite}
                animate='animationOneOposite'
            >
                <GiNestBirds style={{ scale: '8' }} />
            </motion.div>
            <motion.div
                variants={loaderVariants}
                animate='animationOne'
            >
                <GiEgyptianBird style={{ scale: '8' }} />
            </motion.div>
        </div>
    )
}
