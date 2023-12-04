import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const getAllPosts = async () => {
  const res = await axios.get(`${BASE_URL}/posts`);

  if (res.status !== 200) {
    return console.log("Some Error Occurred");
  }

  const data = res.data;

  return data;
};

export const sendAuthRequest = async (signup, data) => {
  const res = await axios
    .post(`${BASE_URL}/user/${signup ? "signup" : "login"}/`, {
      name: data.name ? data.name : "",
      email: data.email,
      password: data.password,
    })
    .catch((err) => console.log(err));

  if (res.status !== 200 && res.status !== 201) {
    return console.log("Unable to Authenticate");
  }

  const resData = await res.data;

  return resData;
};
