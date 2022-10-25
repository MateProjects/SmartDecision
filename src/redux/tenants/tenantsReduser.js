import { createReducer } from '@reduxjs/toolkit';
import authActions from '../auth/authActions';
import tenantsActions from './tenantsActions';

const initialState = {
  username: null,
  id: null,
  allTenants: [],

};

const tenants = createReducer(initialState, {
  [authActions.loginSuccess]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
//   [authActions.loginSuccess]: (state, { payload }) => payload.user,
//   [userActions.getCurrentUserSuccess]: (state, { payload }) => ({
//     ...state,
//     ...payload,
//   }),

  [tenantsActions.getTenantsSuccess]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  
});

export default tenants;
