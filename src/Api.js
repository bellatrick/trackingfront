import axios from "axios";
const username = localStorage.getItem("username");
const api = axios.create({
  baseURL: "https://wetrack.onrender.com/api",
});
export const signin = async (data) => {
  const { data: response } = await api.post("/auth/login", data);
  return { data: response.data, username: data.username };
};
export const register = async (data) => {
  const { data: response } = await api.post("/auth/register", data);
  return response.data;
};

export const postShippment = async (data) => {
  const { data: response } = await api.post("/tracking", data);
  return response.data;
};
export const postLog = async (data) => {
  const { data: response } = await api.post("/tracking/log", data);
  return response.data;
};
export const updateShippment = async ({ data, id }) => {
  const { data: response } = await api.put(`/tracking/${id}`, data);
  return response.data;
};
export const deleteShippment = async ({ id }) => {
  console.log(username)
  const { data: response } = await api.delete(
    `/tracking/${id}/?username=${username}`
  );
  return response.data;
};
export const getAllShippment = async (user) => {
  const { data: response } = await api.get(
    `/tracking/?user=${user || username}`
  );
  return response;
};
export const getAllLogs = async () => {
  const { data: response } = await api.get(`/log`);
  return response;
};
export const getOneShippment = async (id) => {
  if (!id || id === "") return;
  const { data } = await api.get(`/tracking/${id}`);
  console.log(data);
  return data;
};
