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