import Link from 'next/link'
import React from 'react'

const PageNotFound = () => {
  return (
    <div className="container">
        <h1>Oops! Page Not Found</h1>
        <Link href='/'>Go To Home Page</Link>
    </div>
  )
}

export default PageNotFound