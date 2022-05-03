import axios from "axios";

const api = axios.create({
  baseURL: "https://glacial-escarpment-14514.herokuapp.com/api",
});
export const signin = async (data) => {
  console.log(data);
  const { data: response } = await api.post("/auth/login", data);
  return response.data;
};
export const register = async (data) => {
  console.log(data);
  const { data: response } = await api.post("/auth/register", data);
  return response.data;
};