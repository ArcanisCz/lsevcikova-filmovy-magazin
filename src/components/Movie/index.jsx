import React from 'react'
import { useParams } from 'react-router-dom'
import movies from '../../movie-database'

const Movie = () => {
  const { id } = useParams()
  const movieData = movies.find(movie => movie.id === Number(id))
  return (
    <div>
      <h1>{movieData.title}</h1>
    </div>
  )
}

export default Movie
