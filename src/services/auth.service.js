import axios from "axios";

const API_URL = `${process.env.REACT_APP_NODEAPI_BASE_URL}/api/auth/`;

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("userName", response.data.username);
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("showLeftsideBar", false);
        }

        return response.data;
      });
  }

  logout() {
    // localStorage.removeItem("user");
    localStorage.clear();
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
