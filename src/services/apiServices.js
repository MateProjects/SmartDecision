import axios from "axios";

const url = "https://api-shark.herokuapp.com/";

axios.defaults.baseURL = url;

class ApiService {
  //===================  auth ===================

  register(newUser) {
    return axios.post("/signup", newUser);
  }

  login(userCredentials) {
    return axios.post("/login", userCredentials);
  }

  logout() {
    return axios.post("/logout");
  }

  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  unsetToken() {
    axios.defaults.headers.common.Authorization = ``;
  }

  getTenants(page) {
    return axios.get(`/tenants?page=${page}`);
  }
}

export default new ApiService();
