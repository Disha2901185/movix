import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import Img from '../../../components/lazyLoadImage/img'
import useFetch from '../../../hooks/useFetch'

import "./style.scss";
const HeroBanner = () => {
  const [background, setBackground] = useState("")
  const [query, setQuery] = useState("")
  const navigate=useNavigate();
  const { url } = useSelector((state) => state.home);


  const {data,loading}=useFetch('/movie/upcoming')
  
  const queryHandler=((event)=>{
    if(event.key==="Enter"&& query.length>0){
    navigate(`/search/${query}`)
    }
  })
  useEffect(()=>{
    const bg=url.backdrop + data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
    setBackground(bg)
    
  },[data])
  return (
    <div className="heroBanner">
        {!loading && <div className="backdrop-img">
          <Img src={background}/>
        </div>}

        <div className="opacity-layer">

        </div>
        <ContentWrapper>
          <div className="heroBannerContent">
            <span className="title">Welcome.</span>
            <span className="subTitle">
              Millions of movies,Tv-shows people to discover
              Explore Now
            </span>
            <div className="searchInput">
              <input type="text" placeholder='Search for a movie or Tv show...' onKeyUp={queryHandler} onChange={(e)=>setQuery(e.target.value)}/>
            <button className='button'>Search</button>
            </div>
          </div>
        </ContentWrapper>
        </div>
  )
}

export default HeroBanner
