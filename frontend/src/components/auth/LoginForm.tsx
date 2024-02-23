import { useAuth } from "@/context/AuthContext";
import { Input, Button } from "@nextui-org/react";
import { useState } from "react";

import {
  MailOutlineRounded,
  LockOutlined,
  VisibilityOffRounded,
  VisibilityRounded,
} from "@mui/icons-material";

function LoginForm() {
  const { logIn } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    logIn({ emailOrUsername: email, password });
  };

  const toggleVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <form className="flex flex-col gap-4 xl:w-80" onSubmit={handleLogin}>
      <Input
        className="focus:outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        classNames={{
          inputWrapper:
            "bg-black data-[hover=true]:bg-[rgb(16,16,16)] data-[focus=true]:!bg-[rgb(16,16,16)]",
        }}
        placeholder="email or username"
        startContent={<MailOutlineRounded className="opacity-50" />}
      />
      <Input
        classNames={{
          inputWrapper:
            "bg-black data-[hover=true]:bg-[rgb(16,16,16)] data-[focus=true]:!bg-[rgb(16,16,16)]",
        }}
        placeholder="password"
        startContent={<LockOutlined className="opacity-50" />}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        endContent={
          <div
            className="focus:outline-none"
            role="button"
            onClick={toggleVisibility}
          >
            {passwordVisible ? (
              <VisibilityOffRounded className="opacity-50" />
            ) : (
              <VisibilityRounded className="opacity-50" />
            )}
          </div>
        }
        type={passwordVisible ? "text" : "password"}
      />
      <Button color="primary" variant="shadow" className="py-6" type="submit">
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
