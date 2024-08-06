import React from 'react'
import { useRouteError } from 'react-router-dom'
import NavBar from '../NavBar'

const ErrorPage = () => {
    const error = useRouteError()
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Whoops! something went wrong!</h1>
      </main>
    </div>
  )
}

export default ErrorPage
