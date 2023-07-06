import styles from "./FinalScore.module.css"
import fossilBird from "../../assets/fossil_birdORI.jpg"
import arara from "../../assets/arara3.jpg"
import enantornithes from "../../assets/Enantiornithes.jpg"
import harpia from "../../assets/harpia.jpg"
import poisonBird from "../../assets/poisonbird.jpg"
import seriema from "../../assets/Sireima_2_ori.jpg"
import hoatzin from "../../assets/hoatzin.jpg"

import { motion } from "framer-motion"

export const FinalScore = ({ total, restartQuiz, catchBird, catchInformation }) => {

    const byPoints = [
        {
            points: 0,
            birdImg: fossilBird,
            curiosity: "Birds originated during the Jurassic period approximately 150 million years ago!"
        },
        {
            points: 25,
            birdImg: arara,
            curiosity: "Did you know that Brazil is the country with the highest number of psittacine species in the world? There are 87 species with a wide variety of colors and sizes!"
        },
        {
            points: 50,
            birdImg: poisonBird,
            curiosity: "The birds of the genus Pitohui are among the very few species of venomous birds in the world!"
        },
        {
            points: 75,
            birdImg: hoatzin,
            curiosity: "The hoatzin, also known as the ave-cigana is native to Brazil and is the only bird species in the world that still possesses claws on its wings as a hatchling!"
        },
        {
            points: 100,
            birdImg: enantornithes,
            curiosity: "Cratoavis cearensis is the oldest bird species ever found in Brazil, living in the lands of Ceará approximately 100 million years ago!"
        },
        {
            points: 125,
            birdImg: harpia,
            curiosity: "The talons of a harpy eagle can reach the same size as those of a brown bear!"
        },
        {
            points: 150,
            birdImg: seriema,
            curiosity: "The sariema is a voracious predator and has a peculiar characteristic - its feet have curved claws that closely resemble those of the extinct Velociraptors!"
        },
    ]

    const findBird = (catchPoints) => {
        const findPoints = byPoints.find((item) => item.points === catchPoints)['birdImg']
        return findPoints
    }

    const findCuriosity = (catchInformation) => {
        const findInformation = byPoints.find((item) => item.points === catchInformation)['curiosity']
        return findInformation
    }

    return (
        <div className={styles.finalScoreSet}>

            <motion.div
                animate={{ rotateZ: 360 }}
                className={styles.scoreContainer}>
                <div>
                    <img className={styles.birdsImgResults} src={findBird(catchBird)} />
                </div>
                <div className={styles.quizScore}>
                    <div
                        className={styles.curiosityContainer}>
                        <h2 style={{ display: 'flex', justifyContent: 'center' }}>Your score was: <motion.span animate={{ marginLeft: '10px', fontSize: 50, color: '#FF0000' }}> {total} </motion.span> /150  </h2>
                        <p style={{ textAlign: 'center' }}><span>Curiosity!</span> {findCuriosity(catchInformation)}</p>
                    </div>


                    <div>{restartQuiz}</div>
                </div>
            </motion.div>

        </div >
    )
}
