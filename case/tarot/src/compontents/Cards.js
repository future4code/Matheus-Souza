import React from "react";
import ReactCardFlip from "react-card-flip";
import cards from "../tarot.json"



const Card = ({ carta }) => {
    const [isFlipped, setIsFlipped] = React.useState(false);
    // console.log(project);
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
         onClick={() => setIsFlipped((prev) => !prev)}
          className="CardFront"
        >
          <div>
              <img src={`https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/${carta.image}`}/>
          </div>

        </div>
        <div
          onClick={() => setIsFlipped((prev) => !prev)}>
              <img src={"https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png"}/>
        </div>
      </ReactCardFlip>
    );
  };

  export default Card
  