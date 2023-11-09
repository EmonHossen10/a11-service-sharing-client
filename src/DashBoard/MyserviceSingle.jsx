 

/* eslint-disable react/prop-types */
const MyserviceSingle = ({ item ,handleDelete }) => {
  const { _id, Image, Name, Price, description, serviceArea, UserName, email } =
    item;
  console.log(UserName, email);

 

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={Image} className="w-[400px]" alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Name}</h2>
        <p>{description} </p>
        <p>Service Area : {serviceArea}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-warning  ">Edit</button>
          <button  onClick={()=>handleDelete(_id)} className="btn btn-error"> 
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyserviceSingle;
