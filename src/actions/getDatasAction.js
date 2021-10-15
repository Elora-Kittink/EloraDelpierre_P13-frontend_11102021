import axios from "axios";

const GET_DATAS = "GET_DATAS";

export default function getDatas() {
  return (dispatch) => {
    return axios
      .get("http://localhost:3001")
      .then((res) => {
        dispatch({ type: GET_DATAS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
}
