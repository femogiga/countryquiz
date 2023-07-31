import { useEffect, useState } from "react"

const Button = ({ countryText, letter, onClick, id, disabled,style}) => {
    const[clicked,setClicked] = useState()




    return (
        <div className="button flow-1">
            <button className={`flex flex-center`} onClick={onClick} id={id} disabled={disabled} style={style}>
                <span className="flex col-gap-1">
                    <span className='letter'>{letter}</span>
                    {countryText}
                </span>

                { <span className={`material-symbols-outlined wrong`}> cancel  </span>}
                { <span className={`material-symbols-outlined right`}> check_circle</span>}

            </button>
        </div>





    )
}


export default Button
