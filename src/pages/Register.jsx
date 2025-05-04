import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="card bg-base-100 w-[600px] mx-auto shrink-0 shadow-2xl">
      <div className="px-[73px] pt-[50px]">
        <h1 className="text-4xl font-semibold text-center">
          Register your account
        </h1>
        <div className="border-1 border-base-300 mt-10 mb-4"></div>
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label font-semibold text-xl">Your Name</label>
            <input
              name="name"
              type="text"
              className="input w-full bg-base-200 text-base py-5 border-0"
              placeholder="Enter your name"
              required
            />
            <label className="label font-semibold text-xl">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input w-full bg-base-200 text-base py-5 border-0"
              placeholder="Enter photo URL"
              required
            />
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
              {/* <a className="link link-hover">Forgot password?</a> */}
            </div>
            <button
              type="submit"
              className="btn btn-neutral mt-4 font-semibold text-xl py-6"
            >
              Register
            </button>
            <p className="font-semibold text-base mt-7 text-center">
              Already Have An Account ?{" "}
              <Link to={"/auth/login"} className="text-[#FF8C47]">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
