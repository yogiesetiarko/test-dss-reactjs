import App from "../App";
import Hallo from "../views/pages/Hallo";
import AdminLayout from "../views/layouts/AdminLayout";
import Users from "../views/pages/Users";
import Products from "../views/pages/Products";
import News from "../views/pages/News";

// import {
//   createBrowserRouter,
//   // Link,
//   // Route,
//   // RouterProvider,
//   // Routes,
// } from "react-router-dom";

// function Root() {
//   // 2️⃣ `BrowserRouter` component removed, but the <Routes>/<Route>
//   // component below are unchanged
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/blog/*" element={<BlogApp />} />
//       <Route path="/users/*" element={<UserApp />} />
//     </Routes>
//   );
// }

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
// let itemRoutes = [
//   { path: "*", Component: Root },
// ];

export default itemRoutes;