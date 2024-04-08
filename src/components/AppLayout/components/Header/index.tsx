import {NavLink} from "react-router-dom"
import './styles.css'
import BellIcon from "../../../../assets/header-icons/BellIcon";
import ArrowDownIcon from "../../../../assets/header-icons/ArrowDownIcon";


const Header = () => {
  return (
    <header className="app-header">
      <nav>
        <NavLink to="/">Deportivo Armenio</NavLink>
        <NavLink to="/profile">
          <div className="header-profile-info-container">
            <BellIcon/>
            Ignacio Alvarez
            <ArrowDownIcon/>
          </div>
        </NavLink>
      </nav>
    </header>
  )
} 

export default Header;