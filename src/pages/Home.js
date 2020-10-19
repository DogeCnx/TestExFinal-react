import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div>
        <Link to="signin-form">Question #1 - Sign in Form</Link>
      </div>

      <div>
        <Link to="css-transformation">Question #2 - CSS Transformation</Link>
      </div>

      <div>
        <Link to="pokemon-data-fetch">Question #3 - Pokemon Data Fetching</Link>
      </div>
    </>
  )
}

export default Home;
