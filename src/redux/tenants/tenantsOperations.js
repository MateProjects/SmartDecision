import tenantsActions from './tenantsActions';

import api from '../../services/apiServices';


const getTenants = options => (dispatch, getState) => {
  const {
    auth: { accessToken },
  } = getState();

  if (!accessToken) return;

  api.setToken(accessToken);

  dispatch(tenantsActions.getTenantsRequest());
    api
    .getTenants(options)
    .then(({ data }) => {
      let payload = {};
      if (data.tenants) {
        const { tenants} = data;
        payload = { tenants};
      } else {
        payload = {
            tenants: { ...data },
        };
      }
      dispatch(tenantsActions.getTenantsSuccess(payload));
    })
    .catch(err => dispatch(tenantsActions.getTenantsError(err)));
};

// const getProducts = (product) => async (dispatch) => {
//     dispatch(userProductActions.getProductsRequest());
//     dispatch(userProductActions.getProductsSuccess(product));
  
//   };
  

export default{

    getTenants,

};
