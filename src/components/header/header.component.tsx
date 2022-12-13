import Nav from '../nav/nav.component'
import image from '../../assets/images/movie.jpg'
import './header.style.css'
import Button from '../button/button.component'
import useShuffle from '../../hooks/useShuffle'
import axios from 'axios'
import { Movie } from '../../types'
import { useEffect, useState } from 'react'
import {useLocation } from 'react-router-dom'

const Header = () => {
  const [randomMovie, setRandomMovie] = useState<Movie>()
  const randomPage = useShuffle(500)
  const randomResult = useShuffle(20)
  const location = useLocation()
  const getRandomMovie = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=6528ff68dbc27d13fb177793f4c69f9d&language=en-US&page=${randomPage}`
    )
    const randomMovie = data.results[randomResult]
    console.log(randomMovie)
    return randomMovie
  }

  useEffect(() => {
    getRandomMovie().then((data) => setRandomMovie(data))
  }, [])

  return (
    <>
      <Nav />
      {
        location.pathname === '/' && (
          <>
            <div className="imageWrapper">
        <img
          className="image"
          src={
            randomMovie
              ? `https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}`
              : image
          }
          alt="movie"
          title={randomMovie?.title}
        />

        <div className="overlay"></div>
      </div>
      <Button classes="startButton">GET STARTED</Button>
          </>
        )
      }
      
    </>
  )
}

export default Header
