import { useContext, useEffect, useState, useRef } from "react"
import Avatar from "./Avatar"
import Button from "./Button"
import CardPanel from "./CardPanel"
import Next from "./Next"
import Question from "./Question"
import { CountryContext } from "../context/CountryContext"
import random from "random"
import Flag from "./Flag"
import { getRandomIndex } from "../utility/randomgen"
import ScoreCard from "./ScoreCard"










const CardFlag = (children) => {
    const { data, setData } = useContext(CountryContext)                                               //gets data from context
    const [current, setCurrent] = useState(data[1]);                                                   //sets Curreent question
    const [optionOne, setOptionOne] = useState(data[getRandomIndex(data)])                              //sets option one
    const [optionTwo, setOptionTwo] = useState(data[getRandomIndex(data)])  //sets                       //set option two
    const [optionThree, setOptionThree] = useState(data[getRandomIndex(data)])                          //set option three
    const [score, setScore] = useState(0)                                                               //keeps track of score
    const [mapped, setMapped] = useState([])                                                            //shuffled mapped = [op1,op2,op3,cu]
    const [answerState, setAnswerState] = useState(false)                                                // answerState
    const [questionType, setQuestionType] = useState(false)
    const [numQuestions, setNumQuestions] = useState(0)
    const [finished, setFinished] = useState(false)



    const ref = useRef(null)

    //let array = []
    useEffect(() => {
        // set current question and remove question from main data array

        const randomIndex1 = random.int(0, data.length - 1);
        const randomIndex2 = random.int(0, data.length - 1);
        const randomIndex3 = random.int(0, data.length - 1);
        const randomIndex4 = random.int(0, data.length - 1);


        if (data.length > 0) {


            setCurrent(() => data[randomIndex1])
            setOptionOne(() => data[randomIndex2]);
            setOptionTwo(() => data[randomIndex3]);
            setOptionThree(() => data[randomIndex4]);

            //array sort randomize the order to which the answers appear
            // array.sort(() => Math.random() - 0.5)

            const array1 = [current, optionOne, optionTwo, optionThree]
            array1.sort(() => Math.random() - 0.5)
            setMapped(array1)

            // console.log('mapped', mapped)

        }
        else {
            return
        }



    }, [data])

    //array variable creates a normal array
    //and is set to mapped for the mapping of answers

    //array = [optionOne, optionTwo, optionThree, current]
    const letter = ["A", "B", "C", "D"]

    const handleNext = (e) => {
        e.preventDefault()
        if (numQuestions >= 9) {
            setFinished(true)
            return
        }
        else setNumQuestions((numQuestions => ++numQuestions))
        const buttons = document.querySelectorAll('.button button');
        buttons.forEach((button) => {
            button.classList.remove('right-answer-style', 'wrong-answer-style');
        });


        const filtered = data.filter(item => item?.name?.common !== current?.name?.common)
        setData(filtered)
        setAnswerState(false)
        if (new Date().getSeconds() % 2 === 0) {
            setQuestionType(() => true)
            return
        }
        else {
            setQuestionType(() => false)
            return
        }

    }


    //ref from forwardRef on Question component
    // id compared to the ref innerText if the component
    const handleAnswer = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.target.id === ref.current.innerText) {
            setScore(score => score + 1)
            setAnswerState(true)
            e.target.classList.add('right-answer-style')
        }

        else {
            e.target.classList.add('wrong-answer-style')
            setAnswerState(true)
            return;
        }


    }


    const handleRestart = () => {
        window.location.reload()
    }

    const quest = [random.int(0, 3)]

    //qustionType this renders the type of question based on the second of time
    // will use a boolean value to change state in the question object in
    // order to determine which question to render.
    // {rend}  hold  the value of questionType to render

    const rend = questionType ? (<div><Flag src={mapped[quest]?.flags?.png} /><Question questionType={questionType} key='question' questionText={mapped[quest]?.capital} ref={ref} /></div>) :
        (<div><div className='hold-space'></div><Question key='question' questionType={questionType} questionText={mapped[quest]?.capital} ref={ref} /></div>)

    return (
        <div className="card">
            {

                <>
                    <Avatar finished={finished} />
                    {
                        // finished state shecks if the numquestion has been reeach
                        // if so, render score else keep rendering question
                        finished ? <ScoreCard score={score} finished={finished} onClick={handleRestart} /> :
                            <CardPanel>
                                {rend}
                                {mapped.map((question, index) => (<Button key={index} id={question?.capital} disabled={answerState} letter={letter[index]} countryText={question?.name?.common} onClick={(e) => handleAnswer(e)} value={question?.name?.common} />))}
                                <Next onClick={(e) => handleNext(e)} />
                            </CardPanel>
                    }
                </>
            }
        </div>
    )
}

export default CardFlag
