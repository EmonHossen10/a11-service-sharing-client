import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import MyserviceSingle from "./MyserviceSingle";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyServices = () => {
  const[datas,setDatas]=useState([])

  useEffect(()=>{
    fetch("http://localhost:5000/showAddService")
    .then(res=>res.json())
    .then(data=>setDatas(data))
  },[])

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => console.log(data));

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
      const remaining = datas.filter((data) => data._id !== id);
      setDatas(remaining)
      
    });
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
