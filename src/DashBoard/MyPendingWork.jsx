/* eslint-disable react/prop-types */
import { useState } from "react";
import Swal from "sweetalert2";

const MyPendingWork = ({ item, idx, handleChange }) => {
  
  const {
    _id,
    serviceName,
    email,
    date,
    serviceImage,
    plan,
    serviceProviderEmail,
    status,
  } = item;
  console.log(item);
  
  const [pending, setPending] = useState(status);
  return (
    <tr>
      <td className="font-bold">{idx + 1}</td>

      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={serviceImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
          </div>
        </div>
      </td>
      <td>
        {plan}
        <br />
        <span className="badge badge-ghost badge-sm">
          {serviceProviderEmail}
        </span>
      </td>
      <td className="  font-bold">{date}</td>
      <td>
        {/* <button className="btn btn-ghost btn-xs">Pending</button> */}

        <button onChange={() => handleChange(_id)}>
          <label htmlFor="dropdown"> </label>
          <select id="dropdown" defaultValue={pending} name="dropdown">
            <option value="option1">Pending</option>
            <option value="option2">In Progress</option>
            <option value="option3">Completed</option>
          </select>
        </button>
      </td>
    </tr>
  );
};

export default MyPendingWork;
