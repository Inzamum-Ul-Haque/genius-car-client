import React, { useContext } from "react";
import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero max-w-screen-xl mx-auto">
      <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="py-6 h-96" src={login} alt="" />
        </div>
        <form
          onSubmit={handleSignUp}
          className="card py-16 flex-shrink-0 w-max shadow-2xl bg-base-100"
        >
          <h1 className="text-5xl font-bold text-center">Sign Up</h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="email"
                className="input input-bordered w-96"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered w-96"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm password</span>
              </label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-primary bg-orange-600 text-white rounded-md hover:bg-orange-500 border-orange-600 hover:border-orange-500"
              />
            </div>
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <Link className="text-orange-600 font-bold" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
