import { useContext, useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import { AuthContext } from "../Providers/AuthProvider";
import MyScheduleSingle from "./MyScheduleSingle";

 

const MySchedule = () => {
    const {user}=useContext(AuthContext);
    const [bookings,setBookings]=useState([])
  
    const url=`http://localhost:5000/bookings?email=${user?.email}`

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setBookings(data)
           
        })
    },[url])
    return (
        <div>
            <Navbar></Navbar>
            <h3>My schedule : {bookings.length} </h3>
            <div className="grid grid-cols-2 gap-5 my-10" >
                {
                    bookings.map(item=> <MyScheduleSingle key={item._id} item={item} ></MyScheduleSingle> )
                }
            </div>
        </div>
    );
};

export default MySchedule;