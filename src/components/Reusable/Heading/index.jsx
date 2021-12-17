import "./styles.css";
import {} from '@fortawesome/fontawesome-free';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Heading = (props) => {
    const { textUppercase, text } = props;
    console.log("Heading");
    return (
        <div className="text">
            <div className="icon">
                <FontAwesomeIcon icon={faStar} className="small_star" />
                <FontAwesomeIcon icon={faStar} className="star"/>
                <FontAwesomeIcon icon={faStar} className="big_star"/>
                <FontAwesomeIcon icon={faStar} className="star"/>
                <FontAwesomeIcon icon={faStar} className="small_star" />   
            </div>
            <h2>{ textUppercase }</h2>
            <p>{ text }</p>
        </div>
    );

}

export default Heading;