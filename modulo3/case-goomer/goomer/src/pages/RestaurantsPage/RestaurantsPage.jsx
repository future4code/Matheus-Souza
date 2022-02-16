import { RestaurantCard } from "../../components/RestaurantCard/RestaurantCard"
import { BASE_URL } from "../../constants/urls"
import { useRequestData } from "../../hooks/useRequestData"




export const RestaurantsPage=()=>{

    const restaurants= useRequestData(`${BASE_URL}/restaurants`,[])

     console.log('restaurants',restaurants)

    return (
        <>
       
       {restaurants.map(restaurant => <RestaurantCard data={restaurant} key={restaurant.id}/>)}
        </>
    )
}