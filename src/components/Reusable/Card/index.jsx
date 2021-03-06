import "./styles.css";


const Card = (props) => {
    const { text, imageUrl } = props;
    console.log("Card");
    return (
        <div className="card">
            <div className="card_image_wrapper">
                <img src={imageUrl} alt="address_image" />
            </div>
                <p className="card_text">
                    {text}
                </p>
        </div>
    );

}

export default Card;