import useAuth from "@/hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
export default function PrivateRoute({ children }) {
  const { authUser } = useAuth();
  const location = useLocation();
  if (!authUser) {
    return <Navigate state={location.pathname} to="/login" />;
  }
  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
