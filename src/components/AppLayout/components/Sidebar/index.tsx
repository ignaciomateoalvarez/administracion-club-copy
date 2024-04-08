import {NavLink} from "react-router-dom"
import './styles.css'
import UsersIcon from "@assets/sidebar-icons/UsersIcon";
import HomeIcon from "@assets/sidebar-icons/HomeIcon";
import FansIcon from "@assets/sidebar-icons/FansIcon";
import TransactionsIcon from "@assets/sidebar-icons/TransactionsIcon";
import FixtureIcon from "@assets/sidebar-icons/FixtureIcon";
import TicketCollectorsIcon from "@assets/sidebar-icons/TicketCollectorsIcon";
import DonationsIcon from "@assets/sidebar-icons/DonationsIcon";
import StadiumsIcon from "@assets/sidebar-icons/StadiumsIcon";
import SponsorsIcon from "@assets/sidebar-icons/SponsorsIcon";

const Sidebar = () => {
  return (
    <div className="app-sidebar">
      <NavLink to="/">
        <HomeIcon/>
        Inicio
        </NavLink>
      <NavLink to="/users">
        <UsersIcon/>
        Users
      </NavLink>
      <NavLink to="/fans">
        <FansIcon/>
        Hinchas
        </NavLink>
      <NavLink to="/transactions">
        <TransactionsIcon/>
        Transacciones
        </NavLink>
      <NavLink to="/fixture">
        <FixtureIcon/>
        Fixture
        </NavLink>
      <NavLink to="/ticket-collectors">
        <TicketCollectorsIcon/>
        Controladores
        </NavLink>
      <NavLink to="/donations">
        <DonationsIcon/>
        Donaciones
        </NavLink>
      <NavLink to="/stadiums">
        <StadiumsIcon/>
        Sedes
        </NavLink>
      <NavLink to="/sponsors">
        <SponsorsIcon/>
        Sponsors
      </NavLink>
    </div>
  )
} 

export default Sidebar;