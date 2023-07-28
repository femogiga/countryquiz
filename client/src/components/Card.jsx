import Button from "./Button"
import CardPanel from "./CardPanel"
import Question from "./Question"


const Card = ({ children }) => {
    return (
        <div className="card-panel">
            <CardPanel>
                <Question/>
                <Button/>
                <Button/>
                <Button/>
                <Button/>
            </CardPanel>
        </div>
    )
}

export default Card
