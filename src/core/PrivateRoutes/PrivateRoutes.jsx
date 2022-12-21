import { Navigate } from "react-router";
import { publicPaths } from "../../config/routes/routes";
// import Layout from "components/Layout";
import Layout from "../../conmponents/Layout/Layout";

const PrivateRoute = ({ children, setRole }) => {
  // if (!localStorage.getItem("access_token")) {
  if (false) {
    return <Navigate to={publicPaths.login} replace />;
  }

  return <Layout setRole={setRole}>{children}</Layout>;
};

export default PrivateRoute;
