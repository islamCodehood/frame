import StoryCard from '../storyCard/storyCard.component'
import './storiesCards.style.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Story } from '../../types'
import { Link } from 'react-router-dom'

const StoriesCards = () => {
  const [stories, setStories] = useState<Story[]>([])
  const getStories = async () => {
    const { data } = await axios.get('http://localhost:5000/story')
    return data.stories
  }

  useEffect(() => {
    getStories().then((data) => setStories(data))
  }, [])

  useEffect(() => {
    console.log(stories)
  }, [stories])

  return (
    <section className="stories">
      <h2 className="stories_title">Recent Stories</h2>
      <div className="stories_cards">
        {stories?.length ? (
          stories.map((story) => <StoryCard key={story._id} story={story} /> )
        ) : (
          <p>Loading...</p>
        )}
        {}
      </div>
      <Link to="/films" className="stories_moreLink">
        see more..{' '}
      </Link>
    </section>
  )
}

export default StoriesCards
