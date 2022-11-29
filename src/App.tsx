import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home.component'
import Films from './pages/films/films.component'
import Lists from './pages/lists/lists.component'
import Journal from './pages/journal/journal.component'
import Members from './pages/members/members.component'
import Header from './components/header/header.component'
import Auth from './pages/auth/auth.component'

function App() {
    return (
        <div className="wrapper">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/films" element={<Films />} />
                <Route path="/lists" element={<Lists />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/members" element={<Members />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </div>
    )
}

export default App
