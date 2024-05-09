import LoginForm from "@/components/LoginForm";
import { Helmet } from "react-helmet-async";
export default function Login() {
  return (
    <div className="bg-[#D9D9D9]">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="h-[650px] flex justify-center items-center">
        <div className="lg:w-1/4">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
