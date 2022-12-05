import StoryCard from '../storyCard/storyCard.component'
import './storiesCards.style.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Movie } from '../../types'
import { Link } from 'react-router-dom'

const StoriesCards = () => {
  const [stories, setStories] = useState<Movie[]>([])
  const getNowPlaying = async () => {
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=6528ff68dbc27d13fb177793f4c69f9d&language=en-US'
    )
    return data.results
  }

  useEffect(() => {
    getNowPlaying().then((data) => setStories(data))
  }, [])

  useEffect(() => {
    console.log(stories)
  }, [stories])

  return (
    <section className="stories">
      <h2 className="stories_title">Recent Stories</h2>
      <div className="stories_cards">
        {stories.map((movie) => (
          <StoryCard key={movie.id} film={movie} />
        ))}
      </div>
      <Link to="/films" className="stories_moreLink">see more.. </Link>
    </section>
  )
}

export default StoriesCards
