import headerImg from '../photos/headerimg.svg';

const Avatar = ({ src, finished }) => {

    src = headerImg
    return (
        <div className="avatar flex">
            <h1>Country Quiz</h1>
            {/* {finished ? null : <img src={src}></img> } */}
            {!finished && <img src={src}></img>}
        </div>
    )
}


export default Avatar
