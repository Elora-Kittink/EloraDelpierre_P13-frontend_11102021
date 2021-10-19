import client from "../client";

export const LOGIN_SUCCESS = "LOGIN_SUCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
let token = "";

export default function login(email, password) {
  return (dispatch) => {
    client
      .post("user/login", { email, password })
      .then((res) => {
        token = res.data.body.token;
        dispatch({ type: LOGIN_SUCCESS, payload: { email, password, token } });
      })
      .catch(() => {
        dispatch({ type: LOGIN_ERROR });
      });
  };
}
