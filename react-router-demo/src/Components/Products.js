import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
  return (
    <>
      <div>
        <input type='search' placeholder='--Search Products--'></input>
      </div>

      <nav className='secondary-nav'>

        {/* normal relative path url  */}
        <Link to='featured'> Featured </Link> <br />
        <Link to='new'> New </Link>

        {/* absolute path url  */}
        {/* <Link to='/products/featured'> Featured </Link> <br />
        <Link to='/products/new'> New </Link> */}
        
      </nav>
      <Outlet />
    </>
  )
}
