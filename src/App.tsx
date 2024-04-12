// React imports
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

// Layouts imports
import AppLayout from "@components/AppLayout/components/Content/index"

// Pages imports
import Dashboard from "@pages/Dashboard/index"
import Users from "@pages/Users/components/index"
import Fans from "@pages/Fans/components/index"
import Transactions from "@pages/Transactions/components/index"
import Fixture from "@pages/Fixture/components/index"
import TicketCollectors from "@pages/TicketCollectors/index"
import Donations from "@pages/Donations/components/index"
import Stadiums from "@pages/Stadiums/components/index"
import Sponsors from "@pages/Sponsors/components/index"
import Login from "@pages/Auth/components/Login/index"

// Styles imports
import "./styles.css";
import ProtectedRoutes from "./contexts/ProtectedRoutes/ProtectedRoutes"

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes><AppLayout /></ProtectedRoutes>,
    children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "users",
        element: <Users />
      },
      {
        path: "fans",
        element: <Fans />
      },
      {
        path: "transactions",
        element: <Transactions />
      },
      {
        path: "fixture",
        element: <Fixture />
      },
      {
        path: "ticket-collectors",
        element: <TicketCollectors />
      },
      {
        path: "donations",
        element: <Donations />
      },
      {
        path: "stadiums",
        element: <Stadiums />
      },
      {
        path: "sponsors",
        element: <Sponsors />
      },
    ]
  },
  {
    path: "/auth/login",
    element: <Login />,
  }
]
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
