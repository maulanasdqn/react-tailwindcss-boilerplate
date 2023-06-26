import { api } from "@/services";

export const getUserMeRequest = async () => {
  const { data } = await api.get("/user");
  return data;
};

export const logoutRequest = async (payload) => {
  const { data } = await api.post("/auth/logout", payload);
  return data;
};
