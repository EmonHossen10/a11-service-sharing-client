import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const ServiceData = () => {
  const data = useLoaderData();
  console.log(Object.keys(data).join(","));
  const {
    _id,
    id,
    serviceName,
    serviceDescription,
    serviceProvider,
    serviceArea,
    servicePrice,
    serviceImage,
  } = data;

  const handleBookService = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar></Navbar>

      <h3 className="text-3xl">Service Provider Information</h3>
      <div className=" my-5">
        <div className="card card-side bg-base-100  shadow-xl">
          <figure>
            <img
              className="w-[400px]"
              src={serviceProvider.image}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{serviceProvider.name}</h2>
            <p>{serviceArea}</p>
          </div>
        </div>
      </div>

      {/* Single Service */}
      <h2 className="text-4xl my-5">Single Service Information</h2>

      <div className="card   bg-base-200 my-10 shadow-xl">
        <figure>
          <img src={serviceImage} alt="Shoes" />
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
                <form className="card-body">
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
                      placeholder="email"
                      className="input input-bordered"
                      required
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
                      placeholder="Your demanding texts"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button
                      onClick={handleBookService}
                      className="btn btn-warning"
                    >
                      Book Now
                    </button>
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