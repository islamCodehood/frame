import Card from '../card/card.component'
import './cards.style.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Movie } from '../../types'

const Cards = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const getNowPlaying = async () => {
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=6528ff68dbc27d13fb177793f4c69f9d&language=en-US'
    )
    return data.results
  }

  useEffect(() => {
    getNowPlaying().then((data) => setMovies(data))
  }, [])

  useEffect(() => {
    console.log(movies)
  }, [movies])

  return (
    <section className="latestPosts">
      <h2 className="latestPosts_title">Now Playing</h2>
      <div className="latestPosts_cards">
        {movies.map((movie) => (
          <Card key={movie.id} film={movie} />
        ))}
      </div>
    </section>
  )
}

export default Cards
