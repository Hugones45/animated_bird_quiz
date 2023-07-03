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
        <div style={{ display: 'flex', gap: '80px' }}>
            <motion.div
                className={styles.loader}
                variants={loaderVariants}
                animate='animationOne'
            >
                <GiHummingbird style={{ scale: '8' }} />
            </motion.div>
            <motion.div
                className={styles.loader}
                variants={loaderVariantsOposite}
                animate='animationOneOposite'
            >
                <GiNestBirds style={{ scale: '8' }} />
            </motion.div>
            <motion.div
                className={styles.loader}
                variants={loaderVariants}
                animate='animationOne'
            >
                <GiEgyptianBird style={{ scale: '8' }} />
            </motion.div>
        </div>
    )
}
