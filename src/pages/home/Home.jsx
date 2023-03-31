import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import Popular from './popuar/Popular'
import './style.scss'
import TopRated from './topRated/TopRated'
import Trending from './trending/Trending'


const Home = () => {
  return (
    <div className='homePage' >
      <HeroBanner />
      <Trending/>
      <Popular/>
      <TopRated/>
      
    </div>
  )
}

export default Home