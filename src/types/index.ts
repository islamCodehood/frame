export type Movie = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type Story = {
  title: string
  link: string
  excerpt: string
  categories: string[]
  imagePath: string
  author: string
  date: string
  _id: string
  source: string
  url: string
}
