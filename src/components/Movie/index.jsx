import React from 'react'
import { useParams } from 'react-router-dom'
import movies from '../../movie-database'

const Movie = () => {
  const { id } = useParams()
  const movieData = movies.find(movie => movie.id === Number(id))
  return (
    <div className='movie-wrapper'>
      <h1>{movieData.title}</h1>
      <div className='movie-content'>
        <div className='poster'>
          <img src={movieData.poster}></img>
        </div>
        <p className='description'>{movieData.storyline}</p>
      </div>
    </div>
  )
}

export default Movie
