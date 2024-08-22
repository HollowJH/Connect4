import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Game } from "./views/Game"
import { Home } from "./views/Home"
import { Rules } from "./views/Rules"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/index.html",
      element: <Home />
    },
    {
      path: "/game",
      element: <Game />
    },
    {
      path: "/darules",
      element: <Rules />
    }
  ])
  
  return (<>
    <RouterProvider router={router} />
  </>)
}

export default App
