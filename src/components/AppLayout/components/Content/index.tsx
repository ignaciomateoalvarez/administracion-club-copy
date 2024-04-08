import Header from '../Header';
import Sidebar from '../Sidebar';
import { Outlet} from "react-router-dom"
import './styles.css'


const AppLayout = () => {
  return (
    <div className="root-layout">
      <Header/>
      <main className='main-container'>
        <Sidebar/>
        <div className="main-outlet">
          <Outlet />
        </div>
      </main>
    </div>
  )
} 

export default AppLayout;