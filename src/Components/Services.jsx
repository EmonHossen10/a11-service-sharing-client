import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import ServiceAll from "./ServiceAll";
import Footer from "../Shared/Footer";

const Services = () => {
  const datas = useLoaderData();
  console.log(datas);

  return (
    <div>
      <Navbar></Navbar>
      <h3 className="text-3xl text-center font-bold my-10" >services : {datas.length}</h3>
      {/* <div className="grid grid-cols-1 gap-5 my-10 mx-auto ">
        {datas.map((item) => (
          <ServiceAll key={item._id} item={item}></ServiceAll>
        ))}
      </div> */}
      <div className="grid grid-cols-1 gap-5 my-10 mx-auto ">
        {datas.map((item) => (
          <ServiceAll key={item._id} item={item}></ServiceAll>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Services;
