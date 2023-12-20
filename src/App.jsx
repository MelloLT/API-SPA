import Albums, { loader as albumsLoader } from "./components/Albums/Albums";
import Users, { loader as usersLoader } from "./components/Users/Users";
import User, { loader as userLoader } from "./components/User/User";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./routes/Layout";
import Album, { loader as albumLoader } from "./components/Album/Album";
import NotFound from "./components/NotFound/NotFound";
import styles from "./style.modules.css";
import { Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <Layout />,
    children: [
      {
        path: "/albums",
        loader: albumsLoader,
        element: <Albums />
      },
      {
        path: "/users",
        loader: usersLoader,
        element: <Users />
      },
      {
        path: "/users/:id",
        loader: userLoader,
        element: <User />
      },
      {
        path: "/albums/:id",
        loader: albumLoader,
        element: <Album />
      }
    ]
  }
]);

export default function App() {
  return (
    <RouterProvider router={router}>
      <Route path="*">
        <NotFound />
      </Route>
    </RouterProvider>
  );
}
