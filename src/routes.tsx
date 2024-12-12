import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetailsPage from "./pages/GameDetailsPage";

const router = createBrowserRouter([
  {
    path: "/game-over",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "game/:slug", element: <GameDetailsPage /> },
    ],
  },
]);

export default router;
