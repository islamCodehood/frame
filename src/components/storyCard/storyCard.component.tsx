import './storyCard.style.css'
import { Story } from '../../types'
import { Link } from 'react-router-dom'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import flag from '../../assets/images/flag.png'
import share from '../../assets/images/share.png'
type Props = {
  story: Story
}

const StoryCard = ({ story }: Props) => {
  console.log(story)
  const { width } = useWindowDimensions()
  return (
    <div className="storyCard">
      <div className="storyCard_image">
        <img src={`${story.imagePath}`} width="100%" alt="project system" />
      </div>

      <div className="storyCard_body">
        <h3 className="storyCard_title">{story.title}</h3>
        <a href={story.url} target="_blank" rel="noreferrer" className="storyCard_source" >{story.source}</a>
          <img  className="storyCard_flag" src={flag} alt="" />
        <p>{story.excerpt}</p>
        <a target="_blank" className="storyCard_more" rel="noreferrer" href={story.link}>
          Read Story
        </a>
          <img  className="storyCard_anotherTab" src={share} alt="" />
      </div>
    </div>
  )
}

export default StoryCard
