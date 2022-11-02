import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Link } from 'react-router-dom';
import './Tenants.css';

import { ReactComponent as Home } from '../../Icons/icons-tenants/home.svg';
import { ReactComponent as Search } from '../../Icons/icons-tenants/search.svg';
import { ReactComponent as Lang } from '../../Icons/icons-tenants/header/lang.svg';
import { ReactComponent as Account } from '../../Icons/icons-tenants/header/account.svg';
import { TenantsTable } from '../../components/Tenants/TenantsTable/TenantsTable';
import { TenantsWrapper } from '../../components/TenantsWrapper/TenantsWrapper';
import { TopBar } from '../../components/TopBar/TopBar';

export const Tenants = () => {
  const logOut = () => {
    localStorage.removeItem('accessToken');
  };

  return (
    <div className="tenants-page">
      <div className="tenants-page__side-bar side-bar">
        <div>LOGO</div>

        <div className="side-bar__content">
          <div className="home home--mgb">
            <div className="home-icon">
              <Home />
            </div>
            <p className="home-text">Tenants</p>
          </div>

          <div className="search">
            <div className="search-icon">
              <Search />
            </div>
            <p className="search-text">Search</p>
          </div>
        </div>

      </div>

      <div className="tenants-page__content content">
        <header className="header">
          <div className="container">
            <div className="header__selected-section">
              Current section
            </div>

            <div className="header__group-icons">
              <div className="lang">
                <Lang />
                <p className="lang-text">EN</p>
              </div>
              <div className="info">
                <InfoOutlinedIcon
                  width="50"
                  height="50"
                  className="header-info-icon"
                  fill="current"
                />
              </div>
              <div className="account">
                <Account />
              </div>

              <Link to="/signIn">
                <button
                  type="button"
                  onClick={logOut}
                >
                  Log out
                </button>
              </Link>
            </div>
          </div>

        </header>

        <TenantsWrapper
          bar={<TopBar />}
          table={<TenantsTable />}
        />
      </div>
    </div>
  );
};
