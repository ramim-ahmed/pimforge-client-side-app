import axios from "axios";

const axiosIntance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

export default function useAxios() {
  return axiosIntance;
}
