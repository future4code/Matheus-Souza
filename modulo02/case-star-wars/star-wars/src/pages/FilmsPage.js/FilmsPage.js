import { useContext, useEffect, useState } from "react"
import { charactersContext, } from "../../contexts/GlobalState"
import { filmsUrls } from "../../assets/imgUrls"
import { FilmsPageContainer, ImgContainer } from "./styles"

export const FilmsPage = () => {


    const { data, setData, getData } = useContext(charactersContext)


    useEffect(() => {
        getData("/films")

    }, [])

    console.log(data && data.map((i) => i.title))

    return (
        <FilmsPageContainer>
            {data && data.map((item, index) =>
                <div>
                    <ImgContainer>
                    <img src={filmsUrls[index + 1]} />
                    </ImgContainer>
                    <li>
                        {item.title}
                    </li>

                </div>)}

        </FilmsPageContainer>
    )
}