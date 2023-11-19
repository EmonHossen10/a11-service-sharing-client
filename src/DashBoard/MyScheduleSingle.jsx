import Swal from "sweetalert2";

const MyScheduleSingle = ({ item }) => {
  const {
    _id,
    serviceName,
    email,
    date,
    plan,
    serviceImage,
    serviceProviderEmail,
    status
  } = item;

  const handleBuySuccess = () => {
    Swal.fire({
      title: "Good job!",
      text: "Successfully buy the service!",
      icon: "success",
    });
  };

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={serviceImage} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body  ">
          <h2 className="card-title">{serviceName}</h2>
          <p>
            {" "}
            Date : <span className="font-semibold">{date}</span>{" "}
          </p>
          <p> Your Plan : {plan}</p>
          <p className="font-semibold" >Service Provider Email : {serviceProviderEmail}</p>
          <p className="font-bold" > Status :  
             {status ? status : "Pending"}
          
          </p>

          <div className="card-actions">
            <button onClick={handleBuySuccess} className="btn btn-primary">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyScheduleSingle;
