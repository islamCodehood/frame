import './reviewCard.style.css'
import { Movie } from '../../types'
import { Link } from 'react-router-dom'
import useWindowDimensions from '../../hooks/useWindowDimensions'

type Props = {
  film: Movie
}

const ReviewCard = ({ film }: Props) => {
  const { width } = useWindowDimensions()
  return (
    <Link to={`/${film.id}`} className="reviewCard">
      <div className="reviewCard_image">
        <img
          src={`https://image.tmdb.org/t/p/w200${
            film.poster_path
          }`}
          width="100%"
          alt="project system"
        />
      </div>

      <div className="reviewCard_body">
          <div className="reviewCard_user">
            <div className="reviewCard_user_avatar"></div><span className="reviewCard_user_name">Islam Sayed</span>
          </div>
          <h3 className="reviewCard_title">{film.title}</h3><span className="reviewCard_date">{film.release_date.substring(0, 4)}</span>
          <div className="reviewCard_rate"> ★★★★★ </div>
          <p className="reviewCard_review">lorem ipsum dolor sit amet, consectetur adipisicing</p>
        </div>
    </Link>
  )
}

export default ReviewCard
