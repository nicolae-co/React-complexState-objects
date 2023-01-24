import starEmpty from '../assets/star-empty.png'
import starFull from '../assets/star-filled.png'

function Star(props) {
    let starIcon = props.isFilled ? starFull : starEmpty

    return(
        <img 
            src={starIcon} 
            className="card--favorite"
            onClick={props.handleClick}
        />
    )
}
export default Star
