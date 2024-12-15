import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
// import GameDetailsPage from "./pages/GameDetailsPage";
import { ErrorPage } from "./pages/ErrorPage";
import React, { Suspense } from "react";
import GameSpinner from "./components/common/GameSpinner";

const GameDetailsComponent = React.lazy(
  () => import("./pages/GameDetailsPage")
);

const router = createBrowserRouter([
  {
    path: "/game-over",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "games/:slug",
        element: (
          <Suspense fallback={<GameSpinner />}>
            <GameDetailsComponent />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
