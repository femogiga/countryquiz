const Avatar = ({src})=>{

    src='../src/assets/countryquiz/headerimg.svg'
    return(
        <div className="avatar flex">
            <h1>Country Quiz</h1>
            <img src={src}></img>
        </div>
    )
}


export default Avatar
