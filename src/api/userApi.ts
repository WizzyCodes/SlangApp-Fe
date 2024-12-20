/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const URL: string = "http://localhost:3440/api/user";

export const createAccount = (data: any) => {
  try {
    return fetch(`${URL}/create-user`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },

      body: data,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res;
      });
  } catch (error) {
    console.log(error);
  }
};

export const createUser = (data: any) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    return axios
      .post(`${URL}/api/user/create-user`, data, config)

      .then((res) => {
        return res?.data;
      });
  } catch (error) {
    console.log(error);
  }
};
export const LoginUser = async (data: any) => {
  try {
    return axios.post(`${URL}/login`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const readoneUser = async (userID: any) => {
  try {
    return await axios.get(`${URL}/read-one-user/${userID}`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    return error;
  }
};

export const readAllUsers = async (userID: any) => {
  try {
    return await axios.get(`${URL}/read-all-users/${userID}`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    return error;
  }
};
