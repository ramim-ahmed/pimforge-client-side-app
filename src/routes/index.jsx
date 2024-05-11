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
import PrivateRoute from "@/privateRoute/PrivateRoute";
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
        element: (
          <PrivateRoute>
            <AddQuerie />
          </PrivateRoute>
        ),
      },
      {
        path: "/queries",
        element: <Queries />,
      },
      {
        path: "/querie-details/:id",
        element: (
          <PrivateRoute>
            <QuerieDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/querie-update/:id",
        element: (
          <PrivateRoute>
            <UpdateQuerie />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-queries",
        element: (
          <PrivateRoute>
            <MyQueries />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-recommendations",
        element: (
          <PrivateRoute>
            <MyRecommendations />
          </PrivateRoute>
        ),
      },
      {
        path: "/recommendations-for-me",
        element: (
          <PrivateRoute>
            <RecommendationsForMe />
          </PrivateRoute>
        ),
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
