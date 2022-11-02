import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router";
import { publicPaths, privatePaths } from "../config/routes/routes";

import PrivateRoute from "./PrivateRoutes/PrivateRoutes";
import PublicRoute from "./PublicRoutes/PublicRoutes";
import LinearProgress from "@mui/material/LinearProgress";

const SignIn = lazy(() => import("../levels/signInSignUp/SignIn/SignIn"));
// const SubFranchiseesPage = lazy(() =>
//   import('pages/Franchisee/SubFranshiseesPage')
// )
// const NotExistingPage = lazy(() => import('pages/NotExistingPage'))
// const SubFranshiseeDetailsPage = lazy(() =>
//   import('pages/Franchisee/SubFranshiseeDetailsPage')
// )
// const SubFranchiseeMerchantPage = lazy(() =>
//   import('pages/SubFranshisee/MerchantPage')
// )
// const MerchantPage = lazy(() => import('pages/SubFranshisee/MerchantPage'))
// const ShoppersMembersPage = lazy(() =>
//   import('pages/Franchisee/ShoppersMembersPage')
// )
// // NEED REMOVE AFTER CREATE ROOT FILE WITH ROUTES
// const MerchantGifts = lazy(() =>
//   import('pages/SubFranshisee/MerchantGiftsPage')
// )
// // NEED REMOVE AFTER CREATE ROOT FILE WITH ROUTES
// const MerchantGiftDetails = lazy(() =>
//   import('pages/SubFranshisee/MerchantGiftsPage/GiftDetails')
// )
// const MerchantDetails = lazy(() =>
//   import('pages/SubFranshisee/MerchantDetailsPage')
// )
// const MassEmailPage = lazy(() => import('pages/Franchisee/MassEmailPage'))
// const MassEmailDetails = lazy(() =>
//   import('pages/Franchisee/components/MassEmailPage/MassEmailDetails')
// )

// const PushNotificationsPage = lazy(() =>
//   import('pages/Franchisee/PushNotificationsPage')
// )

// const AllGiftsPage = lazy(() =>
//   import('pages/Franchisee/AllGifts/AllGiftsPage')
// )

// const NotificationsData = lazy(() =>
//   import('pages/Franchisee/components/PushNotificationsPage/NotificationsData')
// )

// const FileFolderPage = lazy(() => import('pages/Merchant/FileFolderPage'))
// const AllSubFranshiseeGiftsPage = lazy(() =>
//   import('pages/SubFranshisee/Gifts')
// )

// const SubFranshiseeGiftDetailsPage = lazy(() =>
//   import('pages/SubFranshisee/Gifts/SubFranshiseeGiftDetailPage')
// )

const publicRoutes = [{ path: publicPaths.login, Component: <SignIn /> }];

const privateRoutes = {
  tenant: [
    // {
    //   path: privatePaths.franchisee.sub_franshisees,
    //   Component: <SubFranchiseesPage />
    // },
    // {
    //   path: privatePaths.franchisee.subFranshisee,
    //   Component: <SubFranshiseeDetailsPage />
    // },
    // {
    //   path: `${privatePaths.franchisee.merchant}/*`,
    //   Component: <MerchantPage />
    // },
    // {
    //   path: `${privatePaths.franchisee.allGifts}/*`,
    //   Component: <AllGiftsPage />
    // },
    // {
    //   path: privatePaths.franchisee.shoppersMembers,
    //   Component: <ShoppersMembersPage />
    // },
    // // NEED REMOVE AFTER CREATE ROOT FILE WITH ROUTES
    // {
    //   path: privatePaths.franchisee.merchantDetails,
    //   Component: <MerchantDetails />
    // },
    // {
    //   path: privatePaths.franchisee.merchantGifts,
    //   Component: <MerchantGifts />
    // },
    // // NEED REMOVE AFTER CREATE ROOT FILE WITH ROUTES
    // {
    //   path: privatePaths.franchisee.merchantGiftDetails,
    //   Component: <MerchantGiftDetails />
    // },
    // {
    //   path: `${privatePaths.franchisee.massEmail}/*`,
    //   Component: <MassEmailPage />
    // },
    // {
    //   path: privatePaths.franchisee.massEmailDetails,
    //   Component: <MassEmailDetails />
    // },
    // {
    //   path: `${privatePaths.franchisee.pushNotifications}/*`,
    //   Component: <PushNotificationsPage />
    // },
    // {
    //   path: privatePaths.franchisee.pushNotificationsData,
    //   Component: <NotificationsData />
    // },
    {
      path: "*",
      // Component: <NotExistingPage />
    },
  ],
  group: [
    // {
    //   path: `${privatePaths.subfranchisee.merchant}/*`,
    //   Component: <SubFranchiseeMerchantPage adminType="sub_fran" />
    // },
    // {
    //   path: privatePaths.subfranchisee.merchantDetails,
    //   Component: <MerchantDetails adminType="subfranch" />
    // },
    // {
    //   path: `${privatePaths.subfranchisee.gifts}/*`,
    //   Component: <AllSubFranshiseeGiftsPage />
    // },
    // {
    //   path: privatePaths.subfranchisee.giftDetails,
    //   Component: <SubFranshiseeGiftDetailsPage />
    // },
    {
      path: "*",
      // Component: <NotExistingPage />
    },
  ],
  admin: [],
  user: [
    // {
    //   path: `${privatePaths.merchant.fileFolder}/*`,
    //   Component: <FileFolderPage />
    // },
    {
      path: "*",
      // Component: <NotExistingPage />
    },
  ],
};

console.log("Alex");

const App = () => {
  // const {
  //   user: { type },
  // } = authStore;
  const type = "user";
  const role = type?.replace(/\s/g, "")?.toLowerCase() || "franchisee";
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
