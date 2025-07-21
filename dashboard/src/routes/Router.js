import Login from "../pages/login/Login.js";
import Dashboard from "../pages/dashboard/Dashboard.js";

const Router = [
  {
    path: "/",
    exact: true,
    element: <Login />,
  },
  {
    path: "/login",
    exact: true,
    element: <Login />,
  },
  {
    path: "/dashboard",
    exact: true,
    element: <Dashboard />,
  }
];

export default Router;
