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
  try {
    const res = await axios.post(
      `${BASE_URL}/user/${signup ? "signup" : "login"}/`,
      {
        name: data.name ? data.name : "",
        email: data.email,
        password: data.password,
      }
    );

    if (res.status !== 200 && res.status !== 201) {
      return console.log("Unable to Authenticate");
    }

    const resData = await res.data;

    return resData;
  } catch (error) {
    throw error;
  }
};

export const addPost = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/posts/`, {
      title: data.title,
      description: data.description,
      location: data.location,
      image: data.imageUrl,
      date: data.date,
      user: localStorage.getItem("userId"),
    });

    if (res.status !== 201) {
      return console.log("Error Occurred");
    }

    const resData = await res.data;

    return resData;
  } catch (error) {
    throw error;
  }
};

export const getPostDetails = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/posts/${id}`);
    if (res.status !== 200) {
      return console.log("Unable to fetch diary");
    }

    const resData = await res.data;
    return resData;
  } catch (error) {
    throw error;
  }
};

export const postUpdate = async (data, id) => {
  try {
    const res = await axios.put(`${BASE_URL}/posts/${id}`, {
      title: data.title,
      description: data.description,
      location: data.location,
      image: data.imageUrl,
    });

    if (res.status !== 200) {
      return console.log("Unable to udpate");
    }

    const resData = await res.data;
    return resData;
  } catch (error) {
    throw error;
  }
};

export const postDelete = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/posts/${id}`);

    if (res.status !== 200) {
      return console.log("Unable to delete");
    }

    const resData = await res.data;
    return resData;
  } catch (error) {
    throw error;
  }
};

export const getUserDetails = async () => {
  try {
    const id = localStorage.getItem("userId");
    const res = await axios.get(`${BASE_URL}/user/${id}`);

    if (res.status !== 200) {
      return console.log("No user found");
    }

    const resData = await res.data;
    return resData;
  } catch (error) {
    throw error;
  }
};
