
import { createAction } from '@reduxjs/toolkit';

const getTenantsRequest = createAction('tenants/getTenantsRequest');
const getTenantsSuccess = createAction('tenants/getTenantsSuccess');
const getTenantsError = createAction('tenants/getTenantsError');

const actions = {
    getTenantsRequest,
    getTenantsSuccess,
    getTenantsError,
  };
  
  export default actions;