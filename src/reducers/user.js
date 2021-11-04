import { LOGIN_ERROR, LOGIN_SUCCESS, USERPROFILE } from "../actions";

const initialState = {
  logged: false,
  email: "",
  id: "",
  firstName: "",
  lastName: "",
  token: "",
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        logged: true,
        error: false,
        email: action.payload.email,
        token: action.payload.token,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: true,
      };
    case USERPROFILE:
      return {
        ...state,
        logged: true,
        error: false,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };

    default:
      return state;
  }
};

export default userReducer;
