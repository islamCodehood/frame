import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home.component'
import Films from './pages/films/films.component'
import Lists from './pages/lists/lists.component'
import Journal from './pages/journal/journal.component'
import Members from './pages/members/members.component'
import Header from './components/header/header.component'
import Auth from './pages/auth/auth.component'
import Footer from './components/footer/footer.component'
import Film from './pages/film/film.component'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/members" element={<Members />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/:id" element={<Film />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
