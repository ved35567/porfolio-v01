// RequireAuth.jsx
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RequireAuth = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/Admin-login" replace />;
};

export default RequireAuth;
