import ReviewCard from '../reviewCard/reviewCard.component'
import './reviewsCards.style.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Movie } from '../../types'
import { Link } from 'react-router-dom'

const ReviewsCards = () => {
  const [reviews, setReviews] = useState<Movie[]>([])
  const getNowPlaying = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=6528ff68dbc27d13fb177793f4c69f9d&language=en-US&page=1`
    )
    return data.results
  }

  useEffect(() => {
    getNowPlaying().then((data) => setReviews(data.splice(0, 12)))
  }, [])

  useEffect(() => {
    console.log(reviews)
  }, [reviews])

  return (
    <section className="reviews">
      <h2 className="reviews_title">Popular Reviews</h2>
      <div className="reviews_cards">
        {reviews.map(
          (movie) =>
            movie.poster_path && <ReviewCard key={movie.id} film={movie} />
        )}
      </div>
      <Link to="/films" className="reviews_moreLink">
        see more..{' '}
      </Link>
    </section>
  )
}

export default ReviewsCards
