import React, { useEffect, useState } from "react"
import {useNavigate } from "react-router-dom"
import axios from "axios"
import { MovieContainer, ImgStyled, TextStyled } from "./Styled"
import { BASE_URL } from "../../constants/urls"
import { API_KEY } from "../../constants/apiKey"

const HomePage = () => {

  const Navigate = useNavigate()

  const [movies, setMovies] = useState([])

  let [pages, setPages] = useState(1)

  const getAllMovies = () => {
    axios
    .get(`${BASE_URL}movie/popular?api_key=${API_KEY}&page=${pages}`)
    .then((res) => {
      setMovies(res.data.results)
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  const handlePageChange = () => {
    setPages(pages + 1)
  }

  useEffect(() => {
    getAllMovies()
  }, [pages])

  const details = (id) => {
    Navigate(`/movies/${id}`)
  }

  const showMovies = movies && movies.map((i) => {
    return (
      <div onClick={() => details(i.id)}>
        <ImgStyled src={`https://image.tmdb.org/t/p/w500/${i.poster_path}`}/>
        <TextStyled>{i.original_title}</TextStyled>
      </div>
    )
  })


  return (

      <div>
          <MovieContainer>
            {showMovies}
          </MovieContainer>
          <button onClick={()=>handlePageChange(pages)}>
           More films
          </button>

          <button onClick={() =>Navigate("/genre/movie/list")}>
            Genre list
          </button>
      </div>
  )
}

export default HomePage 