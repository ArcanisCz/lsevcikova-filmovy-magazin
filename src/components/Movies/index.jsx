import React from 'react'
import MovieList from '../MoviesList'
import { Outlet } from 'react-router-dom'

const Movies = () => {
  return (
    <main className='movies'>
      <MovieList />
      <Outlet />
    </main>
  )
}

export default Movies
