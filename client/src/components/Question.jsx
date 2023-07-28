import { useRef } from "react"
import { forwardRef } from "react"


const Question = forwardRef(function Question({ questionText, flag}, ref) {

    return (
        <div className='flow-2'>
            <h2><span ref={ref}>{questionText}</span> is the capital of</h2>
        </div>
    )
})


export default Question
