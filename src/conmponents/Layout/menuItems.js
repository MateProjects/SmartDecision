import { privatePaths } from "../../config/routes/routes";

import HomeIcon from "../../image/icons/HomeIcon";
import SearchIcon from "../../image/icons/SearchIcon";

export const menus = {
  user: [
    {
      id: 'home',
      title: 'Home',
      icon: <HomeIcon />,
      path: privatePaths.home
    },
    {
      id: 'search',
      title: 'Search',
      icon: <SearchIcon />,
      path: privatePaths.search
    }
  ]
}

