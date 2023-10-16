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
