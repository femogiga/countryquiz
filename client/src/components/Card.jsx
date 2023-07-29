import { useContext, useEffect, useState, useRef } from "react"
import Avatar from "./Avatar"
import Button from "./Button"
import CardPanel from "./CardPanel"
import Next from "./Next"
import Question from "./Question"
import { CountryContext } from "../context/CountryContext"
import random from "random"










const Card = (children) => {
    const { data, setData } = useContext(CountryContext)
    const [current, setCurrent] = useState();
    const [optionOne, setOptionOne] = useState({})
    const [optionTwo, setOptionTwo] = useState({})
    const [optionThree, setOptionThree] = useState({})
    const [score, setScore] = useState(0)
    const [mapped, setMapped] = useState([])
    const [answerState, setAnswerState] = useState(false)
    const [right, setRight] = useState(false)
    const [wrong, setWrong] = useState(false)
    const [array, setArray] = useState()
    const [style, setStyle] = useState('')

    const ref = useRef(null)

    //let array = []
    useEffect(() => {
        // set current question and remove question from main data array

        const randomIndex1 = random.int(0, data.length - 1);
        const randomIndex2 = random.int(0, data.length - 1);
        const randomIndex3 = random.int(0, data.length - 1);
        const randomIndex4 = random.int(0, data.length - 1);
        const randomIndex5 = random.int(0, 3);

        if (data.length > 0) {


            setCurrent(() => data[randomIndex1])
            setOptionOne(() => data[randomIndex2]);
            setOptionTwo(() => data[randomIndex3]);
            setOptionThree(() => data[randomIndex4]);

            //array sort randomize the order to which the answers appear
            // array.sort(() => Math.random() - 0.5)
            console.log('newArry', array)
            console.log('current', current)
            console.log('option', optionOne)
            console.log('option', optionTwo)
            console.log('option', optionThree)
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
        const buttons = document.querySelectorAll('.button button');
        buttons.forEach((button) => {
            button.classList.remove('right-answer-style', 'wrong-answer-style');
        });

        const filtered = data.filter(item => item?.name?.common !== current?.name?.common)
        setData(filtered)
        setAnswerState(false)
        e.preventDefault()
        setRight(false)
        setWrong(false)

        return
    }



    //ref from forwardRef on Question component
    // id compared to the ref innerText if the component
    const handleAnswer = (e) => {
        console.log(current?.capital)

        e.preventDefault()
        e.target.classList.remove('right-answer-style')
        e.target.classList.remove('wrong-answer-style')
        if (e.target.id === ref.current.innerText) {
            // console.log(e.target.id + " ==== " + ref.current.innerText)
            console.log('true')
            e.target.classList.add('right-answer-style')
            setScore(score => score + 1)
            setAnswerState(true)
            console.log("score", score)
            setRight(() => true)
            setWrong(() => false)
            return
        }
        else {
            setRight(() => false)
            setWrong(() => true)
            setAnswerState(true)
            console.log('false')
            console.log("score", score)
            e.target.classList.add('wrong-answer-style')
            e.target.classList.remove('right-answer-style')
            return;
        }

    }





    return (
        <div className="card">
            <CardPanel>
                <Avatar />
                {/* <Question questionText={current?.capital} />
                <Button countryText={current?.name?.common} />
                <Button countryText={optionOne?.capital} />
                <Button countryText={optionTwo?.capital} />
                <Button countryText={optionThree?.capital} /> */}

                <Question key='question' questionText={mapped[random.int(0, 3)]?.capital} value={mapped[random.int(0, 3)]} ref={ref} />
                {
                    mapped.map((answer, index) => (<Button id={answer?.capital} className wrong={wrong} right={right} disabled={answerState} key={index} letter={letter[index]} countryText={answer?.name?.common} onClick={(e) => handleAnswer(e)} value={answer?.name?.common} />))
                }

                <Next onClick={(e) => handleNext(e)} />
            </CardPanel>
        </div>
    )
}

export default Card
