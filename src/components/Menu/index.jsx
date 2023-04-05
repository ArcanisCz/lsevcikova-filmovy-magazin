import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <span> | </span>
      <Link to='/reviews'>Reviews</Link>
      <span> | </span>
      <Link to='/articles'>Articles</Link>
      <span> | </span>
      <Link to='/movies'>Movies</Link>
    </nav>
  )
}

export default Menu
