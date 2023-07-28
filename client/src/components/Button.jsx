const Button = ({ countryText }) => {
    countryText = "Sweden"
    return (
        <div className="button flow-1">
            <button className='flex flex-center'>
                <span className="flex col-gap-1">
                    <span className='letter'>A</span>
                    {countryText}
                </span>
                <span className="material-symbols-outlined"> cancel
                </span>
            </button>
        </div>
    )
}


export default Button