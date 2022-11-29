import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Movie } from '../../types'

const Film = () => {
  const { id } = useParams()

  const [movie, setMovie] = useState<Movie>()

  const getMovieById = async (id: string) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6528ff68dbc27d13fb177793f4c69f9d&language=en-US`
    )
    console.log(data)
    return data
  }
  useEffect(() => {
    id && getMovieById(id).then((data) => setMovie(data))
  }, [])
  return (
    <div>
      <h1>{movie?.title}</h1>
    </div>
  )
}

export default Film
