import { useEffect, useState } from "react"

const Button = ({ countryText, letter, onClick, id, disabled, right, wrong }) => {
        const[clicked,setClicked]=useState(false)





    console.log('right===>', right)
    console.log('wrong===>', wrong)

    return (
        // <div className="button flow-1">
        //     <button className={`flex flex-center ${right ? "right-answer-style" : ""} ${wrong ? "wrong-answer-style" : ""} `} onClick={onClick} id={id} disabled={disabled}>
        //         <span className="flex col-gap-1">
        //             <span className='letter'>{letter}</span>
        //             {countryText}
        //         </span>

        //         {wrong && <span className={`material-symbols-outlined ${wrong} && wrong`}> cancel
        //         </span>}
        //         {right && <span className={`right material-symbols-outlined right`}>
        //             check_circle
        //         </span>
        //         }
        //     </button>
        // </div>

        <div className="button flow-1">
        <button className={`flex flex-center`} onClick={onClick} id={id} disabled={disabled}>
            <span className="flex col-gap-1">
                <span className='letter'>{letter}</span>
                {countryText}
            </span>

            {wrong && <span className={`material-symbols-outlined `}> cancel
            </span>}
            {right && <span className={`material-symbols-outlined`}>
                check_circle
            </span>
            }
        </button>
    </div>



    )
}


export default Button
