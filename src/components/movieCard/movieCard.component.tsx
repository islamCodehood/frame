import './card.style.css'
import { Movie } from '../../types'
import { Link } from 'react-router-dom'

type Props = {
  film: Movie
}

const MovieCard = ({ film }: Props) => {
  return (
    <Link to={`/${film.id}`} className="latestPosts_card">
      <div className="latestPosts_cardImage">
        <img
          src={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
          width="100%"
          alt="project system"
        />
      </div>

      {/* <div className="latestPosts_cardBody">
          <h3 className="latestPosts_cardTitle">Never Stop Learning</h3>
          <p>lorem ipsum dolor sit amet, consectetur adipisicing</p>
        </div> */}
    </Link>
  )
}

export default MovieCard
