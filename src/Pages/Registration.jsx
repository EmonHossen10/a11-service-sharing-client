import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";

 

const Registration = () => {
    return (
        <>
         <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:gap-24   lg:flex-row">
          <div className="text-center lg:text-left">
            <img
              className="w-[800px]"
              src="https://i.imgur.com/4uhnaBR.jpg"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <h1 className="md:text-5xl text-3xl font-bold mb-5">
                Register now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-success">Registration</button>
              </div>
               
             
              <p className="text-xs text-center sm:px-6 dark:text-gray-400">
                Already have an account ?
                <Link to="/login" >
                  <button className="font-semibold ms-2 text-blue-600 underline"> Login</button>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
            
        </>
    );
};

export default Registration;