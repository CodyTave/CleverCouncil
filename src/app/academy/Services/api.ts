import axios, { AxiosInstance } from "axios";
const authToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJVc2VybmFtZSI6IkNsZXZlckFjYWRlbXkiLCJQYXNzd29yZCI6IkUwTTNDenZyZEJwWiJ9.Q4xb-M7QoAlqxmdlq9QDQpDYKtxHdjCeY6gGEs82vMQ";

const api: AxiosInstance = axios.create({
  baseURL: "https://clevercouncil.com/api/m",
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${authToken}`,
    "Content-Type": "application/json",
  },
});
export default api;

export async function getCategories() {
  try {
    const resp = await api.get("/categories");
    return resp.data;
  } catch (err) {
    throw err;
  }
}

export async function getCategoryBySlug(slug: string) {
  try {
    const resp = await api.get(`/categorie/details/${slug}`);
    return resp.data;
  } catch (err) {
    throw err;
  }
}
export async function getCategoryFormations(id: string) {
  try {
    const resp = await api.get(`/categorie/${id}`);
    return resp.data;
  } catch (err) {
    throw err;
  }
}
