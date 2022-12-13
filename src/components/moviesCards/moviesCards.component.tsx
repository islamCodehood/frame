import MovieCard from '../movieCard/movieCard.component'
import './moviesCards.style.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Movie } from '../../types'
import { Link } from 'react-router-dom'

const MoviesCards = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const getNowPlaying = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=6528ff68dbc27d13fb177793f4c69f9d&language=en-US&page=1`
    )
    return data.results
  }

  useEffect(() => {
    getNowPlaying().then((data) => setMovies(data.splice(0, 12)))
  }, [])

  useEffect(() => {
    console.log(movies)
  }, [movies])

  return (
    <section className="movies">
      <h2 className="movies_title">Now Playing</h2>
      <div className="movies_cards">
        {movies.map(
          (movie) =>
            movie.poster_path && <MovieCard key={movie.id} film={movie} />
        )}
      </div>
      <Link to="/films" className="movies_moreLink">
        see more..{' '}
      </Link>
    </section>
  )
}

export default MoviesCards
