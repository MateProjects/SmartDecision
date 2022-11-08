import authActions from "./authActions";
import api from "../../services/apiServices";

const register = (credentials, history) => (dispatch) => {
  // debugger
  dispatch(authActions.registerRequest());
  // debugger;
  api
    .register(credentials)
    .then(({ data }) => {
      // debugger;
      dispatch(authActions.registerSuccess(data));
    })
    // .then(() => history.push("/login"))
    .catch((err) => {
      if (err.response.data) {
        dispatch(authActions.loginError(err.response.data));
      } else dispatch(authActions.loginError(err));
    });
};

const login = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest());
  // debugger
  api
    .login(credentials)
    .then(({ data }) => {
      console.log(data);
      // api.setToken(data.accessToken);
      // debugger;
      const { accessToken } = data;
      const userInfo = {
        auth: { accessToken },
      };
      dispatch(authActions.loginSuccess(userInfo));
    })
    .catch((err) => {
      if (err.response.data) {
        dispatch(authActions.loginError(err.response.data));
      } else dispatch(authActions.loginError(err));
    });
};

const logout = () => (dispatch) => {
  dispatch(authActions.logoutRequest());

  api
    .logout()
    .then(({ data }) => {
      api.unsetToken();
      dispatch(authActions.logoutSuccess(data));
    })
    .catch((err) => dispatch(authActions.logoutError(err)));
};

const refresh = () => (dispatch, getState) => {
  dispatch(authActions.refreshRequest());
  const {
    auth: { sid, refreshToken },
  } = getState();

  api.setToken(refreshToken);

  api
    .refresh({ sid: sid })
    .then(({ data }) => {
      dispatch(authActions.refreshSuccess(data.newAccessToken));
    })
    .catch((err) => {
      return dispatch(authActions.refreshError(err));
    });
};

const ops = { register, login, logout, refresh };

export default ops;
