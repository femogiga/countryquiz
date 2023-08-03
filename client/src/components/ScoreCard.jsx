import CardPanel from "./CardPanel"
import Avatar from "./Avatar"

const ScoreCard = ({ score, finished,onClick }) => {
    return (
        <div className='scorecard'>
            <CardPanel>
                {/* <Avatar finished={finished} /> */}
                <article className="try-again flex flex-col">
                    <div className="flow-1">
                        <img src='../src/assets/countryquiz/undraw_winners.svg' />
                    </div>
                    <h2 className="boldest">Results</h2>
                    <p className="flow-5">You got <span className='score boldest'>{score}</span> correct answers</p>
                    <div>
                        <button className="try-again-button bold" onClick = {onClick}>Try again</button>
                    </div>
                </article>
            </CardPanel>
        </div>
    )
}


export default ScoreCard
