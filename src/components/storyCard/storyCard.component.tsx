import './storyCard.style.css'
import { Movie } from '../../types'
import { Link } from 'react-router-dom'
import useWindowDimensions from '../../hooks/useWindowDimensions'

type Props = {
  film: Movie
}

const StoryCard = ({ film }: Props) => {
  const { width } = useWindowDimensions()
  return (
    <div className="storyCard">
      <div className="storyCard_image">
        <img
          src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
          width="100%"
          alt="project system"
        />
      </div>

      <div className="storyCard_body">
        <h3 className="storyCard_title">{film.title}</h3>
        <p>{film.overview}</p>
      </div>
    </div>
  )
}

export default StoryCard
