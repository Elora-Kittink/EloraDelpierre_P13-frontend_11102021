import GET_DATAS from "../actions/getDatasAction";

const initialState = {};

export default function getDatasReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATAS:
      return action.payload;
    default:
      return state;
  }
}
