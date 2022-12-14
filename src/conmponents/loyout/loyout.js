import React from 'react';
import PropTypes from 'prop-types';


const Layout = ({ children }) => (
  <>
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;