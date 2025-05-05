import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(() => {
        alert("Login Successful");
        navigate(`${location.state ? location.state : '/'}`);

      })
      .catch((error) => {
        setError(error.code);
      });
  };

  return (
    <div className="card bg-base-100 w-[600px] h- mx-auto shrink-0 shadow-2xl">
      <div className="px-[73px] py-[76px]">
        <h1 className="text-4xl font-semibold text-center">
          Login your account
        </h1>
        <div className="border-1 border-base-300 mt-12 mb-6"></div>
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label font-semibold text-xl">Email address</label>
            <input
              name="email"
              type="email"
              className="input w-full bg-base-200 text-base py-5 border-0"
              placeholder="Enter your email address"
              required
            />
            <label className="label font-semibold text-xl">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full bg-base-200 text-base py-5 border-0"
              placeholder="Enter your password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {
              error && <p className="text-red-500 text-center">{error}</p>
            }
            <button
              type="submit"
              className="btn btn-neutral mt-4 font-semibold text-xl py-6"
            >
              Login
            </button>
            <p className="font-semibold text-base mt-7 text-center">
              Dont’t Have An Account ?{" "}
              <Link to={"/auth/register"} className="text-[#FF8C47]">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
