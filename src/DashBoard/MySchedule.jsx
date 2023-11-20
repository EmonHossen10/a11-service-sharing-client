import { useContext, useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import { AuthContext } from "../Providers/AuthProvider";
import MyScheduleSingle from "./MyScheduleSingle";
import Footer from "../Shared/Footer";
import MyPendingWork from "./MyPendingWork";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

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

  // updates status in backend

  const handleChange = (id, selectedValue) => {
    console.log("changing", id, selectedValue);
    fetch(`http://localhost:5000/pendingBooking/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: selectedValue }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("SweetAlert2 is working!");
          const remaining = pending.filter((pending) => pending._id !== id);
          const updated = pending.find((pending) => pending._id == id);
          updated.status = selectedValue;
          const newPending = [updated, ...remaining];
          setPending(newPending);
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Service Master | My Schedule</title>
      </Helmet>
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
          <img
            className="lg:h-[500px] lg:w-full "
            src="https://i.imgur.com/KHIKAQK.jpg"
            alt=""
          />
        </div>
      )}

      {/* here pending works */}

      <h1 className="text-3xl font-bold my-10 ">My Pending works </h1>
      {pending.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SI No :</th>
                <th>Name</th>
                <th>Description</th>
                <th>Date</th>
                <th>Service Status</th>
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
      ) : (
        <img
          className="lg:h-[500px] lg:w-full "
          src="https://i.imgur.com/dH46T9h.png"
          alt=""
        />
      )}

      <Footer></Footer>
    </div>
  );
};

export default MySchedule;
