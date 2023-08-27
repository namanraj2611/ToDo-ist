import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

export const retriveHelloWorldBean = () => apiClient.get("/hello-world-bean");

// export function retriveHelloWorldBean(){
//     return  axios.get("http://localhost:8080/hello-world-bean")
// }

export const retriveHelloWorldPath = (username) =>
  apiClient.get(`/hello-world/path-variable/${username}`);
