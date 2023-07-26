import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import styles of this component
import styles from "./App.module.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";

// App component
const App = () => {
  
  const Layout = () => {
    return (
      <>
        <Nav />
        <Outlet />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
      ],
    },
  ]);
  return (
    <div className={`${styles["app"]}`}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
