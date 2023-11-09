import { useEffect, useState } from "react";
import PopularServicesSingle from "./PopularServicesSingle";
import { Link } from "react-router-dom";

 

const PopularServices = () => {
    const [services,setServices]=useState([])

useEffect(()=>{
    fetch("http://localhost:5000/services")
    .then(res=>res.json())
    .then(data=>setServices(data))
},[])

    return (
        <div  >
            <h2 className="text-5xl font-poppins text-center font-semibold my-3">Popular Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-24  "  >
                {
                    services.slice(0,4).map(item=><PopularServicesSingle key={item._id} item={item}></PopularServicesSingle>)
                }
            </div>
           <div className="my-8 text-center" >
          <Link to="/services" >
          <button className="btn btn-warning" >Show All</button>
          </Link>
           </div>


        </div>
    );
};

export default PopularServices;