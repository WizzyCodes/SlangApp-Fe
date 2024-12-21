import axios from "axios";

const URL: string = "https://localhost:3440/api/user";

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
