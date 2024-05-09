// import Loader from "@/components/Loader";
import Loader from "@/components/Loader";
import RegisterForm from "@/components/RegisterForm";
import useAuth from "@/hooks/useAuth";
import { Helmet } from "react-helmet-async";
export default function Register() {
  const { loading } = useAuth();
  return (
    <div className="bg-[#D9D9D9]">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="h-[850px] flex justify-center items-center">
        <div className="lg:w-1/4">
          {loading ? (
            <div className="w-full min-h-screen flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <RegisterForm />
          )}
        </div>
      </div>
    </div>
  );
}
