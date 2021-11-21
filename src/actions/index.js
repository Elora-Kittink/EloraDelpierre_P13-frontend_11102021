import client from "../client";

export const LOGIN_SUCCESS = "LOGIN_SUCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const USERPROFILE = "USERPROFILE";
export const LOGOUT = "LOGOUT";

let token = "";

const login = (email, password) => {
  return (dispatch) => {
    client
      .post("user/login", { email, password })
      .then((res) => {
        token = res.data.body.token;
        localStorage.setItem("token", token);
        dispatch({ type: LOGIN_SUCCESS, payload: { email, token: res.data.body.token } });
      })
      .catch(() => {
        dispatch({ type: LOGIN_ERROR });
      });
  };
};

const userProfile = () => {
  return (dispatch) => {
    client
      .post("user/profile", {}, { headers: { Authorization: `Bearer ` + localStorage.getItem("token") } })
      .then((res) => {
        dispatch({
          type: USERPROFILE,
          payload: { firstName: res.data.body.firstName, lastName: res.data.body.lastName },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const logout = () => ({
  type: LOGOUT,
});

export const changeUserProfile = (firstName, lastName) => {
  return (dispatch) => {
    client
      .put(
        "user/profile",
        { firstName, lastName },
        { headers: { Authorization: `Bearer ` + localStorage.getItem("token") } }
      )
      .then(() => {
        dispatch({ type: USERPROFILE, payload: { firstName, lastName } });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export { userProfile, login, logout };
