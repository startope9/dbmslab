import { createBrowserRouter } from "react-router-dom";
import Home from "./Customers/Home";
import Account from "./Customers/Account";
import AdminHome from "./Admins/AdminHome";
import PostLogin from "./Customers/PostLogin";
import Photel from "./Customers/Photel";
import Viewaccount from "./Customers/Viewaccount";
import Dashboard from "./Customers/Dashboard";


const App = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/new-account',
    element: <Account />
  },
  {
    path: '/admin-access',
    element: <AdminHome />
  },
  {
    path: '/successLogin',
    element: <PostLogin />
  },
  {
    path: '/hotel/:idx',
    element: <Photel />
  },
  {
    path: '/my-account',
    element: <Viewaccount />
  },
  {
    path: '/hotelDashboard',
    element: <Dashboard />
  }
])

export default App;
