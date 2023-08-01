import { useRef } from "react"
import { forwardRef } from "react"


const Question = forwardRef(function Question({ questionText, flag, questionType }, ref) {

    return (
        <div className='flow-2'>
            {
                questionType ?
                    <h2><span disabled className='hide' ref={ref}>{questionText}</span>Which country does the flag belong to?</h2>
                    :
                    <h2><span disabled ref={ref}>{questionText}</span> is the capital of</h2>
            }
        </div>
    )
})


export default Question
