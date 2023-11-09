 
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import MyserviceSingle from "./MyserviceSingle";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyServices = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/showAddService")
      .then((res) => res.json())
      .then((data) =>  setDatas(data));
  }, []);

  const handleDelete = (id) => {
    // fetch(`http://localhost:5000/showAddService/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("success delete", data);
    //   });

    console.log(id)
  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="grid gap-5 my-5 ">
        {datas.map((item) => (
          <MyserviceSingle
            key={item._id}
            item={item}
            handleDelete={handleDelete}
          ></MyserviceSingle>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyServices;
