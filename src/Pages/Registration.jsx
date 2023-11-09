import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 

const Registration = () => {

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(photo,name,email,password)

    // validation
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Your password should have at least one upper Case");
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
      toast.error("Your password should have at least one Special character");
      return;
    }

    // make user

    // createUser(email, password)
    //   .then((result) => {
    //     console.log(result.user);
    //     handleUpdateProfile(name, photo).then(() => {
    //       Swal.fire({
    //         icon: "success",
    //         title: "Successful",
    //         text: "  Successfully Create User ",
    //       });
    //     });
    //     navigate("/");
    //   })

    //   .catch((error) => {
    //     console.log(error.message);
    //     Swal.fire({
    //       icon: "error",
    //       title: "Error...",
    //       text: error.message,
    //     });
    //   });
  };


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
            <form  onSubmit={handleRegister} className="card-body">
              <h1 className="md:text-5xl text-3xl font-bold mb-5">
                Register now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
        <ToastContainer />
      </div>
            
        </>
    );
};

export default Registration;