import { useContext, useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import { AuthContext } from "../Providers/AuthProvider";
import MyScheduleSingle from "./MyScheduleSingle";
import Footer from "../Shared/Footer";
import MyPendingWork from "./MyPendingWork";
import Swal from "sweetalert2";

const MySchedule = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [pending, setPending] = useState([]);
  console.log(user);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [url]);

  // pending data
  const url2 = `http://localhost:5000/pendingBooking?serviceProviderEmail=${user?.email}`;
  useEffect(() => {
    fetch(url2)
      .then((res) => res.json())
      .then((data) => {
        setPending(data);
      });
  }, [url2]);

  const handleChange = (id) => {
    console.log("changing", id);
    fetch(`http://localhost:5000/pendingBooking/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal("data updated");
        }
      });
  };

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

      <h1 className="text-3xl font-bold my-10 ">My Pending works </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SI No :</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {pending.map((item, idx) => (
              <MyPendingWork
                item={item}
                handleChange={handleChange}
                idx={idx}
                key={item._id}
              ></MyPendingWork>
            ))}
          </tbody>
        </table>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MySchedule;
