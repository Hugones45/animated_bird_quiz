import { useState, useEffect } from "react"
import { useTheTotalContext } from "../../context/UseContextTotal"
import { motion } from "framer-motion"
import { Modal } from "../Modal"
import { LoadingModal } from "../LoadingModal"
import { FinalScore } from "../FinalScore"
import { ButtonBirds } from "../ButtonBirds"

import styles from "./QuestionPages.module.css"


export const QuestionPages = () => {

    const url = "http://localhost:3000/Questions"

    const { theTotal, setTheTotal } = useTheTotalContext(0)
    const [response, setResponse] = useState(0)
    const [toggle, setToggle] = useState(false)

    const [pickQuestion, setPickQuestion] = useState(1)
    const [questionOfTheMoment, setQuestionOfTheMoment] = useState()
    const [questions, setQuestions] = useState([])
    const [loadingQuestion, setLoadingQuestion] = useState(false)

    const getData = async () => {
        await fetch(url)
            .then((res) => res.json())
            .then((data) =>
                setQuestions(data))
    }

    useEffect(() => {
        setToggle(false)
        getData()
        if (theTotal < 150) {
            setTheTotal(theTotal + response)
        }

        const findID = questions.find((item) => Number(item.id) === pickQuestion)
        if (findID) {
            setQuestionOfTheMoment(findID)
            return
        }

    }, [pickQuestion])

    const [firstPage, setFirstPage] = useState(null)
    const findIDOne = questions.find((item) => Number(item.id) === 1)

    useEffect(() => {
        setFirstPage(findIDOne)
        setLoadingQuestion(true)
        setTimeout(() => {
            setLoadingQuestion(false)
        }, 2000)

    }, [findIDOne, pickQuestion])

    const counterAmountOfQuestions = () => {
        setPickQuestion((prevQuestion) => prevQuestion + 1)
        setLoadingQuestion(true)

        setTimeout(() => {
            setLoadingQuestion(false)
        }, 1000)
    }

    const counterAmountOfQuestionsFirstPage = () => {
        setResponse(0)
        setTheTotal((prevTotal) => prevTotal = 0)
        setPickQuestion((prevQuestion) => prevQuestion = 1)
        setLoadingQuestion(true)

        setTimeout(() => {
            setLoadingQuestion(false)
        }, 1000)
    }

    const responseLogic = (value) => {
        if (pickQuestion === 7) {
            setToggle(false)
        } else {
            setToggle(true)
        }
        if (value === true) {
            setResponse(25)
        } else {
            setResponse(0)
        }
    }

    return (
        <div>
            {!questionOfTheMoment ? (
                <div >
                    {!loadingQuestion && <motion.div
                        initial={{ x: '-100vw' }}
                        animate={{ x: 0 }}
                        className={styles.firsModal1}
                    >
                        <div className={styles.modalContainer1}>

                            <div className={styles.modalContainer}>

                                <div className={styles.modalQuestionsTitle1}>
                                    <h2>{firstPage && firstPage.theQuestion}</h2>
                                </div>

                                <div>
                                    {firstPage && firstPage.perguntas.map((item, index) =>
                                        <div key={index} className={styles.alternativeContainer}>
                                            <div>
                                                <input
                                                    type="radio" name="inputQuestions" onClick={() => responseLogic(item.valueResponse)} />
                                            </div>

                                            <h2 className={styles.modalOptions} key={index}>{item.alternativa}</h2>
                                        </div>
                                    )}
                                </div>

                                <div className={styles.modalQuestionsButton1}>
                                    <ButtonBirds disabled={!toggle} text={'Enviar'} functions={() => counterAmountOfQuestions()} />
                                </div>
                            </div>
                        </div>
                    </motion.div>}
                    {loadingQuestion && <LoadingModal />}
                </div>
            ) :
                <div>
                    {loadingQuestion && <LoadingModal />}
                    <div>
                        {!loadingQuestion && pickQuestion < 7 && <Modal
                            questions={questionOfTheMoment && questionOfTheMoment.theQuestion}

                            options={questionOfTheMoment && questionOfTheMoment.perguntas.map((item, index) =>
                                <div key={index} className={styles.alternativeContainer}>
                                    <input key={index}
                                        type="radio"
                                        name="inputQuestions"
                                        onClick={() => responseLogic(item.valueResponse)} />
                                    <h2 className={styles.modalOptions}>{item.alternativa}</h2>
                                </div>
                            )}
                            button={<ButtonBirds disabled={!toggle} text={'Enviar'} functions={() => counterAmountOfQuestions()} />}
                        />}

                        {!loadingQuestion && pickQuestion === 7 && <FinalScore
                            catchBird={theTotal}
                            catchInformation={theTotal}
                            total={theTotal}
                            restartQuiz={<ButtonBirds disabled={false} styler={'230px'} text={'Restart Quiz!'} functions={() => counterAmountOfQuestionsFirstPage()} />}
                        />}
                    </div>
                </div>
            }
        </div>
    )
}
