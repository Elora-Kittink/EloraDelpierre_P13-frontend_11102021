export const initialState = {
  logged: false,
  email: "",
  password: "",
  id: "",
  firstName: "",
  lastName: "",
  token: "",
  error: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default user;
