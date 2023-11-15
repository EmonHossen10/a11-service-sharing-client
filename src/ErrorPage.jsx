import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className=" md:w-4/12 w-full "
        src="https://i.imgur.com/tSUx6nJ.jpg"
        alt=""
      />
      <Link to="/" >
        {" "}
        <button  className="btn btn-success ">Go Back Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
