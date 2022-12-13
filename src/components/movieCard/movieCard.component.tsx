import './movieCard.style.css'
import { Movie } from '../../types'
import { Link } from 'react-router-dom'
import useWindowDimensions from '../../hooks/useWindowDimensions'

type Props = {
  film: Movie
}

const MovieCard = ({ film }: Props) => {
  const { width } = useWindowDimensions()
  return (
    <Link to={`/${film.id}`} className="movieCard">
      <div className="movieCard_image">
        <img
          src={`https://image.tmdb.org/t/p/${width >= 768 ? 'w300' : 'w400'}${
            film.poster_path
          }`}
          width="100%"
          alt="project system"
        />
      </div>

      {/* <div className="movieCard_body">
          <h3 className="movieCard_title">Never Stop Learning</h3>
          <p>lorem ipsum dolor sit amet, consectetur adipisicing</p>
        </div> */}
    </Link>
  )
}

export default MovieCard
