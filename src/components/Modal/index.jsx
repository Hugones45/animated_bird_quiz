import styles from "./Modal.module.css"
import { motion } from "framer-motion"

export const Modal = ({ questions, options, button, total }) => {


    return (
        <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            className={styles.firsModal}>
            <div className={styles.modalContainer}>

                <div>
                    <div className={styles.modalQuestionsTitle}>
                        <h2 >{questions}</h2>
                    </div>

                    <div >
                        {options}
                    </div>

                    <div className={styles.modalQuestionsButton}>
                        {button}
                    </div>
                </div>

            </div>
        </motion.div>
    )
}
