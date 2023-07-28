import Avatar from "./Avatar"
import Button from "./Button"
import CardPanel from "./CardPanel"
import Next from "./Next"
import Question from "./Question"


const Card = ({ children }) => {
    return (
        <div className="card">
            <CardPanel>
                <Avatar/>
                <Question/>
                <Button/>
                <Button/>
                <Button/>
                <Button/>
                <Next/>
            </CardPanel>
        </div>
    )
}

export default Card
