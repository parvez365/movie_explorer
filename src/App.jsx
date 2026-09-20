import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./App.css";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MainLayout from "./layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/movies",
        element: <Movies />
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
