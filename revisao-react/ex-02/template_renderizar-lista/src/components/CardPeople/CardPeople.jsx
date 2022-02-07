import { CardPeopleContainer, Container } from "./styles"


export const CardPeople =(props)=>{

    const {name, height, mass, hair_color, eye_color, birth_year, gender} = props.lista

    return (
        <Container>
        <CardPeopleContainer>
            <p>nome:{name}</p>
            <p>heigth:{height}</p>
            <p>mass:{mass}</p>
            <p>hair color:{hair_color}</p>
            <p>eye color {eye_color}</p>
            <p>birth year:{birth_year}</p>
            <p>gender:{gender}</p>
        </CardPeopleContainer>
        </Container>
    )
}