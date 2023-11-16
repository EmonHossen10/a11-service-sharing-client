import { useContext, useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import { AuthContext } from "../Providers/AuthProvider";
import MyScheduleSingle from "./MyScheduleSingle";
import Footer from "../Shared/Footer";

const MySchedule = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [url]);
  return (
    <div>
      <Navbar></Navbar>
      <h3>My schedule : {bookings.length} </h3>
      <h1 className="text-3xl font-bold mt-10 ">My Bookings </h1>
      {bookings.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-5 my-10">
          {bookings.map((item) => (
            <MyScheduleSingle key={item._id} item={item}></MyScheduleSingle>
          ))}
        </div>
      ) : (
        <div className="my-10">
          <img src="https://i.imgur.com/KHIKAQK.jpg" alt="" />
        </div>
      )} 
      <h1 className="text-3xl font-bold my-10 ">My  Pending works </h1>

      <Footer></Footer>
    </div>
  );
};

export default MySchedule;
