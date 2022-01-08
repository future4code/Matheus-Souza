import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { HeadTitle, MainContainer } from './styled.js'
import { API_KEY } from '../../constants/apiKey.js'

const GenreListPage = () => {

  const [genre, setGenre] = useState([])

  const getGenre = () => {
    axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        setGenre(res.data.genres)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  useEffect(() => {
    getGenre()
  }, [])

  const movieGenreList = genre && genre.map((i) => {
    return (<div key={i.id}>{i.name}</div>)
  })


  return (

    <MainContainer>
      <HeadTitle>
        <h3>List of genres</h3>
      </HeadTitle>
      {movieGenreList}
    </MainContainer>
  )
}

export default GenreListPage 