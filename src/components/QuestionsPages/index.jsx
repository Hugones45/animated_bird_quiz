import { useState, useEffect } from "react"
import { useTheTotalContext } from "../../context/UseContextTotal"
import { motion } from "framer-motion"
import { Modal } from "../Modal"
import { LoadingModal } from "../LoadingModal"
import { FinalScore } from "../FinalScore"

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
        setTimeout(() => {
            const findID = questions.find((item) => Number(item.id) === pickQuestion)
            if (findID) {
                setQuestionOfTheMoment(findID)
                return
            }
        }, 500)
    }, [pickQuestion])

    const [firstPage, setFirstPage] = useState(null)
    const findIDOne = questions.find((item) => Number(item.id) === 1)

    useEffect(() => {
        setFirstPage(findIDOne)

    }, [findIDOne, pickQuestion])

    const counterAmountOfQuestions = () => {
        setPickQuestion((prevQuestion) => prevQuestion + 1)
        setLoadingQuestion(true)

        setTimeout(() => {
            setLoadingQuestion(false)
        }, 2000)
    }

    const counterAmountOfQuestionsFirstPage = () => {
        setResponse(0)
        setTheTotal((prevTotal) => prevTotal = 0)
        setPickQuestion((prevQuestion) => prevQuestion = 1)
        setLoadingQuestion(true)

        setTimeout(() => {
            setLoadingQuestion(false)
        }, 2000)
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
                        className={styles.firsModal1}>
                        <div className={styles.modalContainer1}>
                            <div>
                                <div>
                                    <h2>{firstPage && firstPage.theQuestion}</h2>
                                </div>

                                <div>
                                    {firstPage && firstPage.perguntas.map((item, index) =>
                                        <div key={index} className={styles.alternativeContainer}>
                                            <input
                                                type="radio" name="inputQuestions" onClick={() => responseLogic(item.valueResponse)} />
                                            <h2 key={index}>{item.alternativa}</h2>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <button disabled={!toggle} onClick={() => counterAmountOfQuestions()}>Enviar</button>
                                    <h2>{theTotal}</h2>
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
                                    <h2>{item.alternativa}</h2>
                                </div>
                            )}
                            button={<button disabled={!toggle} onClick={() => counterAmountOfQuestions()}>Enviar</button>}
                            total={<h2>{theTotal}</h2>}
                        />}

                        {!loadingQuestion && pickQuestion === 7 && <FinalScore
                            catchBird={theTotal}
                            total={theTotal}
                            restartQuiz={<button onClick={() => counterAmountOfQuestionsFirstPage()}>Recomeçar o Teste!</button>}
                        />}
                    </div>
                </div>
            }
        </div>
    )
}
