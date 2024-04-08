import { NavLink } from "react-router-dom"
import './styles.css'
import BellIcon from "@assets/header-icons/BellIcon";
import ArrowDownIcon from "@assets/header-icons/ArrowDownIcon";
import Logout from "@pages/Auth/components/Logout/index";

const Header = () => {
  return (
    <header className="app-header">
      <nav>
        <NavLink to="/">Deportivo Armenio</NavLink>
        <div className="header-profile-info-container">
          <NavLink to="/profile">
            <BellIcon />
            Ignacio Alvarez
            <ArrowDownIcon />
          </NavLink>
          <Logout />
        </div>
      </nav>
    </header>
  )
}

export default Header;