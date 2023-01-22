// import React from 'react';
// import{BrowserRouter,  Route, Switch } from 'react-router-dom';
// import './App.css';
// import Form from '../form/formInitialize';
import { ThemeProvider } from "@mui/material";
import theme from "../../config/theme";

// export default function App() {
//   return (
//        <ThemeProvider theme={theme}>
//        <BrowserRouter>
//         <Switch>
//         <Route exact path="/" component={Form} />
//       </Switch>
//       </BrowserRouter>
//       </ThemeProvider>
//   );
// }

import { Switch, Route } from "react-router-dom";
import { Suspense, useEffect } from "react";
// import { ToastContainer } from 'react-toastify';
import routes from "../../routes";

import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/authOperations";

import PrivateRoute from "../privateRoute/privateRoute";
import PublicRoute from "../publicRoute/publicRoute";
import Layout from "../../components/loyout/loyout";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // auth.onAuthStateChanged(userAuth => {
    //     if(userAuth !== null)
    //     localStorage.setItem('token', userAuth.uid);
    // });
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Suspense fallback={<div>"Loading.."</div>}>
            <Switch>
              {routes.map((route) =>
                route.privated ? (
                  <PrivateRoute
                    key={route.path}
                    component={route.component}
                    {...route}
                  ></PrivateRoute>
                ) : (
                  <PublicRoute
                    key={route.path}
                    restricted={true}
                    component={route.component}
                    {...route}
                  ></PublicRoute>
                )
              )}
            </Switch>
          </Suspense>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
// import Loader from './Loader';

// export default function App() {
//   const dispatch = useDispatch();
//   const onRefresh = () => {
//     dispatch(authOperations.currentUser());
//   };

//   useEffect(() => {
//     // onRefresh();

//   }, []);

//   return (
//     <>
//     <ThemeProvider theme={theme}>
//       {/* <Suspense fallback={<Loader />}> */}
//       <Suspense >
//         <Switch>
//           {routes.map(

//             ({ path, isProtected, redirectTo, exact, component: Component }) =>
//               isProtected === null ? (
//                 <Route
//                   exact={exact}
//                   key={[path]}
//                   path={path}
//                   component={Component}
//                   redirectTo={redirectTo}
//                 />
//               ) : isProtected ? (
//                 <PrivateRoute
//                   exact={exact}
//                   key={path}
//                   path={path}
//                   component={Component}
//                   redirectTo={redirectTo}
//                 />
//               ) : (
//                 <PublicRoute
//                   exact={exact}
//                   key={[path]}
//                   path={path}
//                   component={Component}
//                   redirectTo={redirectTo}
//                 />
//               ),
//           )}
//         </Switch>
//       </Suspense>
//       </ThemeProvider>
//     </>
//   );
// }
