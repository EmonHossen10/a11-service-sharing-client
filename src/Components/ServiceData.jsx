import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Swal from "sweetalert2";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const ServiceData = () => {
  const data = useLoaderData();
  const {user}=useContext(AuthContext)
  console.log(user?.email)

  const {
    _id,

    serviceName,
    serviceDescription,
    serviceProvider,
    serviceArea,
    servicePrice,
    serviceImage,
  } = data;

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const date = form.date.value;
    const plan = form.plan.value;
    const order = {
      serviceName,
      email,
      date,
      serviceImage,
      plan,
    };
    console.log(order);

    axios
      .post("http://localhost:5000/addbookings", order)
      .then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Successfully added",
            text: "Products Successfully added to backend",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // fetching

    // fetch("http://localhost:5000/addbookings", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(order),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data, "success");
    //     if (data.insertedId) {
    //       Swal.fire({
    //         icon: "success",
    //         title: "Successfully added",
    //         text: "Products Successfully added to backend",
    //       });
    //     }
    //   });
  };
  return (
    <div>
      <Navbar></Navbar>

      <h3 className="text-3xl font-bold ">Service Provider Information</h3>
      <div className=" my-5">
        <div className="card md:card-side bg-base-100  shadow-2xl">
          <figure>
            <img
              className="w-[400px]"
              src={serviceProvider.image}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name : {serviceProvider.name}</h2>
            <p >Area :  {serviceArea}</p>
          </div>
        </div>
      </div>

      {/* Single Service */}
      <h2 className="text-4xl font-bold my-5">Single Service Information</h2>

      <div className="card   bg-base-200 my-10 shadow-xl">
        <figure>
          <img className="md:w-5/12" src={serviceImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{serviceName}</h2>
          <p>{serviceDescription}</p>
          {/* service provider */}

          <div className="flex my-4  space-x-4 items-center  ">
            <img
              alt=""
              src={serviceProvider.image}
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm font-bold"
              >
                {serviceProvider.name}
              </a>
            </div>
          </div>

          <p className="font-bold">Price : {servicePrice}</p>
          <div className="card-actions  mt-3">
            {/* modal */}
            <button
              className="btn btn-outline btn-warning  "
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Book Now
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <form onSubmit={handleBookService} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Service Name</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      defaultValue={serviceName}
                      disabled
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Service Image</span>
                    </label>

                    <img className="w-[200px]" src={serviceImage} alt="" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Service Provider Name </span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      defaultValue={serviceProvider.name}
                      disabled
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">User Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={user?.email}
                      placeholder="email"
                      className="input input-bordered"
                       disabled
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Date</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        customized service plan
                      </span>
                    </label>
                    <input
                      type="text"
                      name="plan"
                      placeholder="Your demanding texts"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn btn-warning">Purchase</button>
                  </div>
                </form>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ServiceData;
