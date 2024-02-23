import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@/layouts/AuthLayout";

import { SignupForm, SignupWelcome } from "@/components/auth";

function Login() {
  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="h-[100vh] w-full flex flex-col items-center justify-center">
      <AuthLayout welcome={<SignupWelcome />} form={<SignupForm />}></AuthLayout>
    </div>
  );
}

export default Login;
