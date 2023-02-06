import { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = ({ form }) => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div
      className={
        form
          ? "max-w-sm w-full mx-4 bg-white shadow-lg rounded-lg p-4"
          : "hidden"
      }
    >
      <h3 className="text-2xl text-black text-center font-semibold my-6">
        Login
      </h3>

      <Link
        to={""}
        className="text-white bg-black p-4 flex justify-center items-center gap-2 mb-8 text-center rounded-lg hover:bg-green hover:scale-105"
      >
        <BsGoogle /> Sign In with Google
      </Link>

      <div className="mb-6 flex justify-center items-center relative">
        <h2 className="text-[#999] absolute bg-white p-2">OR</h2>
        <hr className="text-sm text-[#999] w-full mx-auto" />
      </div>

      <form action="">
        <label htmlFor="email" className="flex flex-col text-sm">
          Email
          <input
            type="email"
            id="email"
            name="email"
            value={userInput.email}
            onChange={handleInput}
            required
            autocomplete="off"
            className="mt-1 p-2 w-full bg-[#f0f7f7] rounded-md outline-none"
          />
        </label>
        <label htmlFor="password" className="flex flex-col text-sm mt-2">
          Password
          <input
            type="password"
            id="password"
            name="password"
            value={userInput.password}
            onChange={handleInput}
            required
            autocomplete="off"
            className="mt-1 p-2 w-full bg-[#f0f7f7] rounded-md outline-none"
          />
        </label>
        <div className="flex flex-col justify-between items-center mt-4">
          <button
            type="submit"
            className="bg-black flex gap-4 py-3 px-4 rounded-md items-center justify-center text-white hover:bg-green text-sm sm:text-sm md:text-md hover:scale-105 w-full"
          >
            Login
          </button>
          <div className="text-green mt-4">
            You don't have an account?{" "}
            <Link
              to={"/register"}
              className="text-sm mr-4 text-black hover:text-[#999] hover:underline cursor-pointer"
            >
              Sign up?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
