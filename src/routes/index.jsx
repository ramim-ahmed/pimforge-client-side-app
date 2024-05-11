import RootLayout from "@/layouts/RootLayout";
import AddQuerie from "@/pages/AddQuerie";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import MyQueries from "@/pages/MyQueries ";
import MyRecommendations from "@/pages/MyRecommendations";
import NotFound from "@/pages/NotFound";
import QuerieDetails from "@/pages/QuerieDetails";
import Queries from "@/pages/Queries";
import RecommendationsForMe from "@/pages/RecommendationsForMe";
import Register from "@/pages/Register";
import UpdateQuerie from "@/pages/UpdateQuerie";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "add-querie",
        element: <AddQuerie />,
      },
      {
        path: "/queries",
        element: <Queries />,
      },
      {
        path: "/querie-details/:id",
        element: <QuerieDetails />,
      },
      {
        path: "/querie-update/:id",
        element: <UpdateQuerie />,
      },
      {
        path: "/my-queries",
        element: <MyQueries />,
      },
      {
        path: "/my-recommendations",
        element: <MyRecommendations />,
      },
      {
        path: "/recommendations-for-me",
        element: <RecommendationsForMe />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default routes;
