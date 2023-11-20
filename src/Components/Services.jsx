import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import ServiceAll from "./ServiceAll";
import Footer from "../Shared/Footer";

const Services = () => {
  const datas = useLoaderData();
  const [service, setService] = useState(datas);
  const [displayCount, setDisplayCount] = useState(6);
  console.log(datas)

  const searchRef = useRef();

  const handleSubmit = () => {
    const search = searchRef?.current?.value.toLowerCase();
    const filterData = datas.filter((item) =>
      item.serviceName.toLowerCase().includes(search)
    );

    if (filterData.length > 0) {
      toast.success(`Total ${filterData.length} Services Found`);
      setService(filterData);
      setDisplayCount(6);
    } else {
      toast.error("Invalid search");
    }
  };

  const handleShowMore = () => {
    setDisplayCount((prevCount) => prevCount + 6);
  };

  return (
    <div>
      <Helmet>
        <title>Service Master | All services</title>
      </Helmet>
      <Navbar></Navbar>

      {/* Search part */}
      <div>
        <p className="text-center">
          <input
            className="md:py-2 border-2 text-black md:pr-24 md:pl-3 pl-3 "
            defaultValue={""}
            ref={searchRef}
            type="text"
            placeholder="Search here...."
          />
          <button
            onClick={handleSubmit}
            className="bg-[#FFDC39] text-black md:px-6 md:py-2 px-2 rounded-r-md md:rounded-r-lg"
          >
            Search
          </button>
        </p>
      </div>

      <h3 className="text-3xl   font-bold my-10">
        Total services:
        {service.length}
      </h3>

      {/* Show slice data */}
      <div className="grid grid-cols-1 gap-5 my-10 mx-auto">
        {service.slice(0, displayCount).map((item) => (
          <ServiceAll key={item._id} item={item}></ServiceAll>
        ))}
      </div>

      {/* Show More button */}
      {displayCount < service.length && (
        <div className="text-center my-10">
          <button onClick={handleShowMore} className="btn btn-warning">
            Show More
          </button>
        </div>
      )}

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Services;
