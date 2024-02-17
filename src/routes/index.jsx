import App from "../App";
import Hallo from "../views/pages/Hallo";
import AdminLayout from "../views/layouts/AdminLayout";
import Users from "../views/pages/Users";
import Products from "../views/pages/Products";
import News from "../views/pages/News";

let itemRoutes = [
  {
    path: "/",
    element: <App />
  },
  {
    path: "/halo",
    element: <Hallo />
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "users",
        element: <Users />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "news",
        element: <News />
      }
    ]
  }
];

export default itemRoutes;