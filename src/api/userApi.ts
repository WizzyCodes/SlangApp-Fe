import axios from "axios";

const URL: string = "https://localhost:3440/api/user";

export const LoginUser = async (data: any) => {
  try {
    return axios.post(`${URL}/login`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
