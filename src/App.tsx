// React imports
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom"

// Layouts imports
import AppLayout from "./components/AppLayout/components/Content/index"

// Pages imports
import Dashboard from "./pages/Dashboard/components/index"
import Users from "./pages/Users/components/index"
import Fans from "./pages/Fans/components/index"
import Transactions from "./pages/Transactions/components/index"
import Fixture from "./pages/Fixture/components/index"
import TicketCollectors from "./pages/TicketCollectors/components/index"
import Donations from "./pages/Donations/components/index"
import Stadiums from "./pages/Stadiums/components/index"
import Sponsors from "./pages/Sponsors/components/index"

// Styles imports
import "./styles.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout/>}>
      <Route index element={<Dashboard />} />
      <Route path="users" element={<Users />} />
      <Route path="fans" element={<Fans />} />
      <Route path="transactions" element={<Transactions />} />
      <Route path="fixture" element={<Fixture />} />
      <Route path="ticket-collectors" element={<TicketCollectors />} />
      <Route path="donations" element={<Donations />} />
      <Route path="stadiums" element={<Stadiums />} />
      <Route path="sponsors" element={<Sponsors />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
