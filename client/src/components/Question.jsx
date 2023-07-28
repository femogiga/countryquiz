const Question = ({ questionText, flag }) => {
    // questionText = "Kuala Lumpur is the capital of?"
    return (
        <div className='flow-2'>
            <h2>{`${questionText} is the capital of`}</h2>
        </div>
    )
}


export default Question
