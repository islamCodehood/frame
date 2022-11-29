import { Link } from 'react-router-dom'
import './navItem.style.css'
type PropsType = {
  route: string
  children: JSX.Element | string
  closeNav: Function
}

const NavItem = ({ children, route, closeNav }: PropsType) => {
  return (
    <li className="list_item">
      <Link
        onClick={() => closeNav()}
        className="list_item_link"
        to={`/${route}`}
      >
        {children}
      </Link>
    </li>
  )
}

export default NavItem
