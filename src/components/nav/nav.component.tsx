import { useState, useEffect } from 'react'
import NavItem from '../navItem/navItem.component'
import Button from '../button/button.component'
import { Link } from 'react-router-dom'
import './nav.style.css'
import useWindowDimensions from '../../hooks/useWindowDimensions'
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { width } = useWindowDimensions()
    useEffect(() => {
        width > 768 ? setIsOpen(true) : setIsOpen(false)
    }, [width])
    const navList = [
        { listItem: 'Films' },
        { listItem: 'Lists' },
        { listItem: 'Members' },
        { listItem: 'Journal' },
    ]
    return (
        <div className="topBar">
            <Link to="/" className="logo">
                Frame
            </Link>
            <div className="navWrapper">
                <div className="menuAndButtonWrapper">
                    <Button
                        classes="nav_button"
                        handleClick={() => setIsOpen(true)}
                    >
                        Menu
                    </Button>

                    {isOpen ? (
                        <nav className="nav">
                            <Button
                                classes="nav_button nav_closeButton"
                                handleClick={() => setIsOpen(false)}
                            >
                                Close
                            </Button>
                            <ul className="nav_list">
                                {navList.map(({ listItem }) => (
                                    <NavItem
                                        key={listItem}
                                        route={listItem}
                                        closeNav={() => setIsOpen(false)}
                                    >
                                        {listItem}
                                    </NavItem>
                                ))}
                            </ul>
                        </nav>
                    ) : null}
                </div>
                <Link to="/auth" className="signinButton">
                    Sign in
                </Link>
            </div>
        </div>
    )
}

export default Nav
