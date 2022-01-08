import React from "react";
import { ChildContainer, Container } from "../Styles/styled";
import { Select, ContaineTypeGame, ContainerLogo, ContainerBalls, ContainerConcurso, ContainerGame } from "../Styles/styled";
import { colors } from "../constants/colors";
import { useState } from "react";
import { Logo } from "../constants/logo";
import axios from "axios"
import { useEffect } from "react";
import { BASE_URL } from "../constants/urls"
import { useRequestData } from "../hooks/useRequestData"

export function SlideBar() {

    const [game, setGame] = useState(0)
    const [color, setColor] = useState(0)
    const [numeros, setNumeros] = useState([17,32,41,19])


    const name = useRequestData(`${BASE_URL}/loterias`, 'mega-sena')
    const loteriasId = useRequestData(`${BASE_URL}/loterias-concursos`, 0)


    function handleChange(e) {

        setGame(e.target.value);
        setColor(colors[e.target.value]);

        axios.get(`${BASE_URL}/concursos/${loteriasId[game] && loteriasId[game].concursoId}`)
            .then((res) => {
                setNumeros(res.data.numeros);
                console.log('res', res.data.numeros);

            })
            .catch((err) => console.log(err));

    }
    return (
        <Container style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 0 }}>
                <svg
                    width="600px"
                    viewBox="0 0 743 769"
                    fill={colors[0]}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M630 0C630 0 440.26 401.011 630 812H0V0H690Z" fill={color} />
                </svg>
            </div>
            <ChildContainer>

                <Select id="options" onChange={(e) => handleChange(e)} value={game} name="game">

                    <option defaultValue="selected" value={0}>MAGA-SENA</option>
                    <option value={1}>QUINA</option>
                    <option value={2}>LOTOFACIL</option>
                    <option value={3}>LOTOMANIA</option>
                    <option value={4}>TIMEMANIA</option>
                    <option value={5}>DIA DE SORTE</option>
                </Select>

                <ContaineTypeGame>
                    <ContainerLogo>
                        <Logo />
                        <h1>{name[game] && name[game].nome}</h1>
                    </ContainerLogo>
                </ContaineTypeGame>

                <ContainerConcurso>
                    <h3>concurso</h3>
                </ContainerConcurso>
            </ChildContainer>

            <ContainerGame>
                <ContainerBalls>
                    <ul>  {numeros && numeros.map((n) => <li>{n}</li>)}</ul>

                </ContainerBalls>
                <div>
                    <p>
                        Este sorteio é meramente ilustrativo e não possui nenhuma ligação
                        com a CAIXA.
                    </p>
                </div>
            </ContainerGame>
        </Container>
    );
}

