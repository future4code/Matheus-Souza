import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { MainContainer, MovieBox, MovieTitle, Detail, ButtonContainer, StyledButton } from './styled.js'
import { API_KEY } from '../../constants/apiKey.js'

const DetailsPage = () => {

  const Navigate = useNavigate()
  const params = useParams()

  const [synopsis, setSynopsis] = useState({})

  const getSynopsis = () => {
    axios
    .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`)
    .then((res) => {
      setSynopsis(res.data)
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  useEffect(() => {
    getSynopsis()
  }, [])



  const genres = synopsis.genres
  const number = synopsis.budget
  const budgetAmount = (new Intl.NumberFormat().format(number))
  const moviesByGenre = genres && genres.map((i) => {
    return (<div ley={i.id}>{i.name}</div>)
  })

  const time = () => {
    const runtime = synopsis && synopsis.runtime
    const hours = Math.floor(runtime / 60)
    const minutes = runtime % 60

    return (`${hours}h: ${minutes} min`)

  }

  return (

      <MainContainer>
          <MovieBox><img src={`https://image.tmdb.org/t/p/w500/${synopsis.poster_path}`} />
            <MovieTitle><b>{synopsis.title}</b></MovieTitle>
            <div><b>Budget: </b>US$ {budgetAmount}</div>
            {moviesByGenre && <div><b>Movie Genres:</b> {moviesByGenre[0]} {moviesByGenre[1]} {moviesByGenre[2]}</div>}
            <Detail><b>Movie Detail:</b>{synopsis.overview}</Detail>
            <div><b>Status:</b>{synopsis.status}</div>
            <div><b>Tagline:</b>{synopsis.tagline}</div>
            <div><b>Runtime:</b>{time()}</div>
            <div><b>Vote Average:</b>{synopsis.vote_average}</div>
          </MovieBox>
          <ButtonContainer>
             <StyledButton onClick={() => Navigate("/")}>Back</StyledButton> 
          </ButtonContainer>
      </MainContainer>
  )
}

export default DetailsPage  