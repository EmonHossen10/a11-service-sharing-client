import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import ServiceAll from "./ServiceAll";
import Footer from "../Shared/Footer";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const datas = useLoaderData();
  const [service, setService] = useState(datas);

  console.log(datas);
  const searchRef = useRef();
  console.log(searchRef.current?.value);

  const handleSubmit = () => {
    const search = searchRef?.current?.value.toLowerCase();
    const filterData = datas.filter((item) =>
      item.serviceName.toLowerCase().includes(search)
    );

    if (filterData.length > 0) {
      toast.success(`Total ${filterData.length} Services Found`);
      setService(filterData);
    } else {
      toast.error("inValid search");
    }
  };

  return (
    <div>
      <Helmet>
        <title>Service Master | All services</title>
      </Helmet>
      <Navbar></Navbar>
      {/* search part */}
      <div>
        <p className="text-center">
          <input
            className="md:py-2   border-2   text-black md:pr-24 md:pl-3 pl-3 "
            defaultValue={""}
            ref={searchRef}
            type="text"
            placeholder="Search here...."
          />
          <button
            onClick={handleSubmit}
            className="bg-[#FFDC39] text-black  md:px-6 md:py-2 px-2 rounded-r-md md:rounded-r-lg"
          >
            Search
          </button>
        </p>
      </div>

      <h3 className="text-3xl text-center font-bold my-10">
       Total services : {datas.length}
      </h3>

      <div className="grid grid-cols-1 gap-5 my-10 mx-auto ">
        {service.map((item) => (
          <ServiceAll key={item._id} item={item}></ServiceAll>
        ))}
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Services;
