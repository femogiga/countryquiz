import { useContext, useEffect, useState, useRef } from "react"
import Avatar from "./Avatar"
import Button from "./Button"
import CardPanel from "./CardPanel"
import Next from "./Next"
import Question from "./Question"
import { CountryContext } from "../context/CountryContext"
import random from "random"
import Flag from "./Flag"










const CardFlag = (children) => {
    const { data, setData } = useContext(CountryContext)
    const [current, setCurrent] = useState();
    const [optionOne, setOptionOne] = useState({})
    const [optionTwo, setOptionTwo] = useState({})
    const [optionThree, setOptionThree] = useState({})
    const [score, setScore] = useState(0)
    const [mapped, setMapped] = useState([])
    const [answerState, setAnswerState] = useState(false)
    const [array, setArray] = useState()
    const [styles, setStyles] = useState(null)



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

        return
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
            setStyles(false)
            setAnswerState(true)
            console.log('false')
            console.log("score", score)
            return;
        }


    }

    const quest =  [random.int(0, 3)]



    return (
        <div className="card">
            <CardPanel>
                <Avatar />
                <Flag src={mapped[quest]?.flags?.png}/>
                <Question key='question' questionText={mapped[quest]?.capital} ref={ref} />


                <Button id={mapped[0]?.capital} disabled={answerState} letter={letter[0]} countryText={mapped[0]?.name?.common} onClick={(e) => handleAnswer(e)} value={mapped[0]?.name?.common} />
                <Button id={mapped[1]?.capital} disabled={answerState} letter={letter[1]} countryText={mapped[1]?.name?.common} onClick={(e) => handleAnswer(e)} value={mapped[1]?.name?.common} />
                <Button id={mapped[2]?.capital} disabled={answerState} letter={letter[2]} countryText={mapped[2]?.name?.common} onClick={(e) => handleAnswer(e)} value={mapped[2]?.name?.common} />
                <Button id={mapped[3]?.capital} disabled={answerState} letter={letter[3]} countryText={mapped[3]?.name?.common} onClick={(e) => handleAnswer(e)} value={mapped[3]?.name?.common} />


                <Next onClick={(e) => handleNext(e)} />
            </CardPanel>
        </div>
    )
}

export default CardFlag
