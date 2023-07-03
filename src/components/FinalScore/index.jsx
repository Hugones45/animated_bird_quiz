import styles from "./FinalScore.module.css"
import fossilBird from "../../assets/fossil_birdORI.jpg"
import arara from "../../assets/arara3.jpg"
import enantornithes from "../../assets/Enantiornithes.jpg"
import harpia from "../../assets/harpia.jpg"
import poisonBird from "../../assets/poisonbird.jpg"
import seriema from "../../assets/Sireima_2_ori.jpg"
import hoatzin from "../../assets/hoatzin.jpg"

export const FinalScore = ({ total, restartQuiz, catchBird }) => {

    const byPoints = [
        {
            points: 0,
            birdImg: fossilBird
        },
        {
            points: 25,
            birdImg: arara
        },
        {
            points: 50,
            birdImg: poisonBird
        },
        {
            points: 75,
            birdImg: hoatzin
        },
        {
            points: 100,
            birdImg: enantornithes
        },
        {
            points: 125,
            birdImg: harpia
        },
        {
            points: 150,
            birdImg: seriema
        },
    ]


    const findBird = (catchPoints) => {
        const findPoints = byPoints.find((item) => item.points === catchPoints)['birdImg']
        return findPoints
    }

    return (
        <div className={styles.finalScoreSet}>

            <div className={styles.scoreContainer}>
                <div >
                    <img className={styles.birdsImgResults} src={findBird(catchBird)} />
                </div>

                <div>
                    <h2>Sua pontuação foi: {total}</h2>
                </div>

                <div>{restartQuiz}</div>
            </div>

        </div >
    )
}
