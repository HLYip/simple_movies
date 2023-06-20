import React from 'react'
import Hero from '../hero/Hero'


function Home({movies}) {
  return (
    <div>Welcome!!!

        <Hero movies={movies}></Hero>
    </div>
  )
}

export default Home