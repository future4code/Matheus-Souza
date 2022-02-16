
export const RestaurantCard=({data})=>{
    return (
    <div>
    <h2>name:{data.name}</h2>
    <p>endereço: {data.address}</p>
    </div>
    )
}