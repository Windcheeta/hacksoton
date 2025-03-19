import womanImage from "../pics/woman.png"
import speechBubble from "../pics/speech.png"

const Woman = ({message, active}) => {
    return (
        <>
            <img src={womanImage} className="woman"></img>
            <img src={speechBubble} className="speechBubble">
                {message}
            </img>
        </>
    )
}

export default Woman