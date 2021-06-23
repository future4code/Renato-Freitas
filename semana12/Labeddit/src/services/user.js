import { BASE_URL } from "../constants/urls";
import axios from "axios";
import { goToPosts } from "../routes/coordinator";


export const login = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToPosts(history)
    })
    .catch((err) => {
      alert(err);
    });
};


