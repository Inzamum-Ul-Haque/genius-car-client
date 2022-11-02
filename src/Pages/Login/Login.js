import React, { useContext } from "react";
import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => console.error(error));
  };

  return (
    <div className="hero max-w-screen-xl mx-auto">
      <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="py-6 h-96" src={login} alt="" />
        </div>
        <form
          onSubmit={handleLogin}
          className="card py-16 flex-shrink-0 w-max shadow-2xl bg-base-100"
        >
          <h1 className="text-5xl font-bold text-center">Login</h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered w-96"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a alt="" href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Login"
                className="btn btn-primary bg-orange-600 text-white rounded-md hover:bg-orange-500 border-orange-600 hover:border-orange-500"
              />
            </div>
          </div>
          <p className="text-center">
            New to Genius Car?{" "}
            <Link className="text-orange-600 font-bold" to="/signup">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
