import { lazy, Suspense } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { publicPaths, privatePaths } from "../config/routes/routes";

import PrivateRoute from "./PrivateRoutes/PrivateRoutes";
import PublicRoute from "./PublicRoutes/PublicRoutes";
import LinearProgress from "@mui/material/LinearProgress";

const RegisterForm = lazy(() =>
  import("../levels/signInSignUp/Form/RegisterForm")
);
const SignUp = lazy(() => import("../levels/signInSignUp/SignUp/SignUp"));
const Tenants = lazy(() => import("../levels/user/Tenants/Tenants"));
const SearchTenants = lazy(() => import("../levels/user/Search/index"))

const publicRoutes = [
  { path: publicPaths.login, Component: <RegisterForm /> },
  { path: publicPaths.signUp, Component: <SignUp /> },
];

const privateRoutes = {
  tenant: [
    {
      path: "*",
      // Component: <NotExistingPage />
    },
  ],
  group: [
    {
      path: "*",
      // Component: <NotExistingPage />
    },
  ],
  admin: [],
  user: [
    {
      path: `${privatePaths?.user?.tenants}/*`,
      Component: <Tenants />,
    },
    {
      path: `${privatePaths?.user?.search}/*`,
      Component: <SearchTenants />,
    },
    {
      path: `${privatePaths?.user?.tenants}/*`,
      Component: <Tenants />,
    },
    {
      path: `${privatePaths?.user?.search}/*`,
      Component: <Tenants />,
    },
    {
      path: "*",
      // Component: <NotExistingPage />
    },
  ],
};

const see = privateRoutes?.["user"]?.map((route) => {
  return route;
});

const App = () => {
  // const {
  //   user: { type },
  // } = authStore;
  const type = "user";
  const role = type?.replace(/\s/g, "")?.toLowerCase() || "admin";
  return (
    <Suspense fallback={<LinearProgress />}>
      <Routes>
        {privateRoutes?.[role]?.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<PrivateRoute>{route.Component}</PrivateRoute>}
          />
        ))}
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<PublicRoute>{route.Component}</PublicRoute>}
          />
        ))}
        <Route path="*" element={<Navigate to={publicPaths.login} replace />} />
        <Route
          exact
          path="/"
          element={<Navigate to={publicPaths.login} replace />}
        />
      </Routes>
    </Suspense>
  );
};

export default App;
