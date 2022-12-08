import './storyCard.style.css'
import { Story } from '../../types'
import { Link } from 'react-router-dom'
import useWindowDimensions from '../../hooks/useWindowDimensions'

type Props = {
  story: Story
}

const StoryCard = ({ story }: Props) => {
  const { width } = useWindowDimensions()
  return (
    <div className="storyCard">
      <div className="storyCard_image">
        <img src={`${story.imagePath}`} width="100%" alt="project system" />
      </div>

      <div className="storyCard_body">
        <h3 className="storyCard_title">{story.title}</h3>
        <p>{story.excerpt}</p>
        <a target="_blank" className="storyCard_more" href={story.link}>
          Read Story
        </a>
      </div>
    </div>
  )
}

export default StoryCard
