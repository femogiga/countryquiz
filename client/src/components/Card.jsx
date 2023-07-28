import { useContext, useEffect, useState } from "react"
import Avatar from "./Avatar"
import Button from "./Button"
import CardPanel from "./CardPanel"
import Next from "./Next"
import Question from "./Question"
import { CountryContext } from "../context/CountryContext"
import random from "random"

import { getRandomIndex } from "../utility/randomgen"





const Card = ({ children }) => {
    const { data, setData } = useContext(CountryContext)
    const [current, setCurrent] = useState();
    const [optionOne, setOptionOne] = useState({})
    const [optionTwo, setOptionTwo] = useState({})
    const [optionThree, setOptionThree] = useState({})
    const [past, setPast] = useState([])
    const [mapped, setMapped] = useState([])

    let array = []
    useEffect(() => {
        // set current question and remove question from main data array

        const randomIndex1 = random.int(0, data.length - 1);
        const randomIndex2 = random.int(0, data.length - 1);
        const randomIndex3 = random.int(0, data.length - 1);
        const randomIndex4 = random.int(0, data.length - 1);
        const randomIndex5 = random.int(0, 3);

        if (data.length > 0) {


            setCurrent(data[randomIndex1])
            setOptionOne(() => data[randomIndex2]);
            setOptionTwo(() => data[randomIndex3]);
            setOptionThree(() => data[randomIndex4]);
            // const filtered = data.filter(item => item?.name?.common !== current?.name?.common)
            // setData(filtered)
            //array sort randomize the order to which the answers appear
            array.sort(() => Math.random() - 0.5)
            console.log('newArry', array)
            console.log('option', optionOne)
            console.log('option', optionTwo)
            console.log('option', optionThree)
            setMapped(array)
            console.log('mapped', mapped)

        }
        else {
            return
        }


    }, [data])

    //array variable createss a normal array and is set to mapped

    array = [optionOne, optionTwo, optionThree, current]
    const letter = ["A", "B", "C", "D"]

    const handleNext =(e)=>{
        e.preventDefault()
        const filtered = data.filter(item => item?.name?.common !== current?.name?.common)
        setData(filtered)

    }


    return (
        <div className="card">
            <CardPanel>
                {

                    // console.log('current===>', current?.name?.common)
                }
                <Avatar />
                {/* <Question questionText={current?.capital} />
                <Button countryText={current?.name?.common} />
                <Button countryText={optionOne?.capital} />
                <Button countryText={optionTwo?.capital} />
                <Button countryText={optionThree?.capital} /> */}

                <Question questionText={mapped[random.int(0, 3)]?.capital} />
                {
                    mapped.map((answer, index) => (<Button key={index} letter={letter[index]} countryText={answer?.name?.common} />))
                }

                <Next onClick={(e)=>handleNext(e)} />
            </CardPanel>
        </div>
    )
}

export default Card
