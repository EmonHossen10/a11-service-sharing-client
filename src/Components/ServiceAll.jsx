/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServiceAll = ({ item }) => {
  const {
    _id,
    serviceName,
    serviceDescription,
    serviceProviderImage,
    serviceProviderName,
    servicePrice,
    serviceImage,
    serviceArea,
    userEmail,
  } = item;
  return (
    <div>
      <div className="card   bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full md:h-[400px]   "
            src={serviceImage}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{serviceName}</h2>
          <p>{serviceDescription.slice(0, 100)}...</p>
          {/* service provider */}

          <div className="flex my-4  space-x-4 items-center  ">
            <img
              alt=""
              src={serviceProviderImage}
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm font-bold"
              >
                {serviceProviderName}
              </a>
            </div>
          </div>
          <p className="text-lg font-semibold">
            Service Provider Email : {userEmail}
          </p>

          <p
            className="font-semi
        bold"
          >
            Service Area : {serviceArea}
          </p>
          <p className="font-bold">Price : ${servicePrice}</p>
          <div className="card-actions  mt-3">
            <Link to={`/services/${_id}`}>
              <button className="btn btn-success">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAll;
