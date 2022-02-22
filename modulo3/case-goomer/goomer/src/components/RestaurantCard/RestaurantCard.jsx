import { useNavigate } from "react-router-dom";
import { RestauranCardContainer, ImgContainer, NameContainer,DetailsContainer } from "./styles";

export const RestaurantCard = ({ name, id, address, img }) => {
  const navigate = useNavigate();

  return (
    <RestauranCardContainer onClick={() => navigate(`/menu/${id}`)}>
      <ImgContainer>
        <img src={img} />
      </ImgContainer>
      <DetailsContainer>
        <NameContainer>
          <h3>{name}</h3>
        </NameContainer>
        <p>{address}</p>
      </DetailsContainer>
    </RestauranCardContainer>
  );
};
