import Loader from "@/components/Loader";
import LoginForm from "@/components/LoginForm";
import useAuth from "@/hooks/useAuth";
import { Helmet } from "react-helmet-async";
export default function Login() {
  const { loading } = useAuth();
  return (
    <div className="bg-[#D9D9D9]">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="h-[650px] flex justify-center items-center">
        <div className="lg:w-1/4">
          {loading ? (
            <div className="w-full min-h-screen flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <LoginForm />
          )}
        </div>
      </div>
    </div>
  );
}
