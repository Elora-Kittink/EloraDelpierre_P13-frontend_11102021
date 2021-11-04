import client from "../client";

export const LOGIN_SUCCESS = "LOGIN_SUCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const USERPROFILE = "USERPROFILE";

const login = (email, password) => {
  return (dispatch) => {
    client
      .post("user/login", { email, password })
      .then((res) => {
        console.log(res);
        dispatch({ type: LOGIN_SUCCESS, payload: { email, token: res.data.body.token } });
      })
      .catch(() => {
        dispatch({ type: LOGIN_ERROR });
      });
  };
};

const userProfile = (token) => {
  return (dispatch) => {
    client
      .post("user/profile", { headers: { Authorization: `Bearer` + token } })
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

export { userProfile, login };
