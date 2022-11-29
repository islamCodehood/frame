import Nav from '../nav/nav.component'
import image from '../../assets/images/movie.jpg'
import './header.style.css'
import Button from '../button/button.component'
const Header = () => {
    return (
        <>
            <Nav />
            <div className="imageWrapper">
                <img className="image" src={image} alt="movie" />
                <div className="overlay"></div>
            </div>
            <Button classes="startButton">GET STARTED</Button>
        </>
    )
}

export default Header
