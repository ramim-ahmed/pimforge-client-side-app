import axios from "axios";
import { useEffect } from "react";
import "../firebase";
import { getAuth, signOut } from "firebase/auth";
const axiosIntance = axios.create({
  baseURL: "https://pim-forge-server-side-app.vercel.app/api/v1",
});

export default function useAxios() {
  // logout
  const logout = () => {
    const auth = getAuth();
    return signOut(auth);
  };
  useEffect(() => {
    axiosIntance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logout();
        }
      }
    );
  }, []);
  return axiosIntance;
}
