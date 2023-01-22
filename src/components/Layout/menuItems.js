import { privatePaths } from "../../config/routes/routes";

import HomeIcon from "../../image/icons/HomeIcon";
import SearchIcon from "../../image/icons/SearchIcon";

export const menus = (routeType) => ({
  user: [
    {
      id: "tenants",
      title: "Tenants",
      icon: <HomeIcon />,
      path: privatePaths[routeType].tenants,
    },
    {
      id: "search",
      title: "Search",
      icon: <SearchIcon />,
      path: privatePaths[routeType].search,
    },
  ],
});
