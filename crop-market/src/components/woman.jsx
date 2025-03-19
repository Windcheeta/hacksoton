import womanImage from "../pics/woman.png"
import speechBubble from "../pics/speechBubble.png"

const Woman = ({event, active}) => {
    return (
        <>
            <img src={womanImage}></img>
            <img src={speechBubble}>
                {event.message}
            </img>
        </>
    )
}