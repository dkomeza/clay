import { Link } from "@nextui-org/react";

function SignupWelcome() {
  return (
    <>
      <h1 className="text-3xl mt-6">Hello There</h1>
      <span className="text-gray-500 font-light mt-2">
        Already have an account?{" "}
        <Link className="text-gray-500 font-bold cursor-pointer" href="/login">
          Log in
        </Link>
      </span>
    </>
  );
}

export default SignupWelcome;
