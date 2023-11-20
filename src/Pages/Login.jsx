import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { FcGoogle } from "react-icons/fc";
import Footer from "../Shared/Footer";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loginUser, GoogleSignIn } = useContext(AuthContext);

  const location = useLocation();
  console.log("location in login page", location);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // login user
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: "success",
          title: "Successfully added",
          text: "User Login Successfully",
        });

        // navigate after login

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  /// google
  const handleGoogleLogin = () => {
    GoogleSignIn()
      .then((result) => {
        console.log(result.user);

        //
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Service Master | Login</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:gap-24   lg:flex-row">
          <div className="text-center lg:text-left">
            <img
              className="w-[800px]"
              src="https://i.imgur.com/AchMFsT.jpg"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="md:text-5xl text-3xl font-bold mb-5">
                Login now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1  h-px sm:w-16 bg-gray-700"></div>
                <p className="px-3 text-sm text-center text-gray-500">
                  Login with social accounts
                </p>
                <div className="flex-1  h-px sm:w-16 bg-gray-700"></div>
              </div>
              {/* social */}
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleGoogleLogin}
                  aria-label="Log in with Google"
                  className="p-1 rounded-sm"
                >
                  <FcGoogle className="text-3xl"></FcGoogle>
                </button>
              </div>
              <p className="text-xs text-center sm:px-6 dark:text-gray-400">
                Do not have an account ?
                <Link to="/registration">
                  <button className="font-semibold ms-2 text-blue-600 underline">
                    {" "}
                    Sign up
                  </button>
                </Link>
              </p>
            </form>
          </div>
          <ToastContainer></ToastContainer>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;
