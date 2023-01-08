import axios from "axios";

// const url =
//   "https://cors-anywhere.herokuapp.com/https://api-shark.herokuapp.com/";
const url = "https://api-shark.herokuapp.com/";

axios.defaults.baseURL = url;

class ApiService {
  //===================  auth ===================

  register(newUser) {
    debugger;
    return axios.post(
      "/signup",
      newUser
      //  {
      //   headers: {
      //     // Origin: "https://example.com",
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Origin": "*",
      //     // "Access-Control-Allow-Headers": "*",
      //   },
      // }
    );
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
