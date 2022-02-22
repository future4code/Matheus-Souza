import { RestaurantCard } from "../../components/RestaurantCard/RestaurantCard";
import { useState } from "react";
import { BASE_URL } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";
import SearchIcon from "@mui/icons-material/Search";
import {
  Input,
  InputContainer,
  RestaurantPageContainer,
  Title,
  SearchIconContainer,
  RestaurantsContainer,
} from "./styles";


export const RestaurantsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const restaurants = useRequestData(`${BASE_URL}/restaurants`, []);

  const onChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterRestaurants = (restaurant) => {
    if (searchTerm === "") return true;
    if (restaurant.name.includes(searchTerm)) return true;
    return false;
  };

  return (
    <RestaurantPageContainer>
      <div />
      <Title>Bem-Vindo ao LabeRango</Title>

      <InputContainer>
        <Input
          placeholder="Buscar estabelcecimento"
          value={searchTerm}
          onChange={onChangeSearchTerm}
        />
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>
      </InputContainer>

      <RestaurantsContainer>
        {restaurants?.filter(filterRestaurants).map((res) => (
          <RestaurantCard
          img={res.image}
            address={res.address}
            name={res.name}
            id={res.id}
            key={res.id}
          />
        ))}
      </RestaurantsContainer>

    </RestaurantPageContainer>
  );
};
