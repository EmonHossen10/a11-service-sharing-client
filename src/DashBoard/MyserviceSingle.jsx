import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const MyserviceSingle = ({ item, handleDelete }) => {
  const {
    _id,
    serviceImage,
    serviceName,
    serviceArea,
    servicePrice,
    serviceProviderName,
    userEmail,
    serviceProviderImage,
    serviceDescription,
  } = item;
  console.log(serviceProviderName, userEmail);

  return (
    <div className="card md:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={serviceImage} className="md:w-[400px] w-full " alt="Movie" />
      </figure>
      <div className="card-body md:w-6/12 ">
        <h2 className="card-title font-bold text-3xl">{serviceName}</h2>
        <p>{serviceDescription} </p>
        <p className="font-semibold">Service Area : {serviceArea}</p>
        <p className="font-semibold">Price : ${servicePrice}</p>
        <p className="font-semibold">User Email : {userEmail} </p>
        <p>User Photo :</p>
        <div className="flex flex-col">
          <div className="flex ">
            <img
              alt=""
              className="w-12 h-12 rounded-full ri ri  bg-gray-500 ri ri"
              src={serviceProviderImage}
            />
          </div>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/updateAddition/${_id}`}>
            <button className="btn btn-warning  ">Edit</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-error">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyserviceSingle;
