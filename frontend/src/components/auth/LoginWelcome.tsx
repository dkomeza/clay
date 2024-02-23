import { Link } from "@nextui-org/react";

function LoginWelcome() {
  return (
    <>
      <h1 className="text-3xl mt-6">Welcome Back</h1>
      <span className="text-gray-500 font-light mt-2">
        Don't have an account yet?{" "}
        <Link className="text-gray-500 font-bold cursor-pointer" href="/signup">
          Sign up
        </Link>
      </span>
    </>
  );
}

export default LoginWelcome;
