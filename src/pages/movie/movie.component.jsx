import { params } from 'react-router-dom'
const Movie = () => {
  const { id } = params()
  return <div>{id}</div>
}

export default Movie
