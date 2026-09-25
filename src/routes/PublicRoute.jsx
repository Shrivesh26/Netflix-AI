import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const user = useSelector((state) => state.user.user);

  if (user) {
    return <Navigate to="/browse" replace />;
  }

  return children;
};

export default PublicRoute;