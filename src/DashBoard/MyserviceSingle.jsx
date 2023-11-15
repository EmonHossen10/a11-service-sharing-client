import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const MyserviceSingle = ({ item, handleDelete }) => {
  const {
    _id,
    Image,
    Name,
    Price,
    description,
    serviceArea,
    UserName,
    email,
    photo,
  } = item;
  console.log(UserName, email);

  return (
    <div className="card md:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={Image} className="md:w-[400px] w-full " alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Name}</h2>
        <p>{description} </p>
        <p>Service Area : {serviceArea}</p>
        <p>Price : {Price}</p>
        <p>User Email : {email} </p>
        <p>User Photo :</p>
        <div className="flex flex-col">
          <div className="flex ">
            <img
              alt=""
              className="w-12 h-12 rounded-full ri ri  bg-gray-500 ri ri"
              src={photo}
            />
          </div>
        </div>
        <div className="card-actions justify-end">
         <Link to={`/updateAddition/${_id}`} >
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
