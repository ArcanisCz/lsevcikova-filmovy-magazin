import React from 'react'
import { useParams } from 'react-router-dom'
import movies from '../../movie-database'

const Movie = () => {
  const { id } = useParams()
  const movieData = movies.find(movie => movie.id === Number(id))
  return (
    <div className='movie-wrapper'>
      <h2>{movieData.title}</h2>
      <div className='movie-content'>
        <div className='poster'>
          <img src={movieData.poster}></img>
        </div>
        <div className='description'>
          <div>
            {movieData.director}, {movieData.year}, {movieData.rating}
          </div>
          <p>{movieData.storyline}</p>
        </div>
      </div>
    </div>
  )
}

export default Movie
