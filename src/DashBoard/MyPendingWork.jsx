/* eslint-disable react/prop-types */

import { useState } from "react";

const MyPendingWork = ({ item, idx, handleChange }) => {
  const {
    _id,
    serviceName,

    date,
    serviceImage,
    plan,
    serviceProviderEmail,
    status,
  } = item;
  // const [use, setUse] = useState(status);
  // console.log(use);

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

        {status === "Completed" ? (
          <span className="font-bold text-primary">Completed</span>
        ) : (
          <button onChange={(e) => handleChange(_id, e.target.value)}>
            <label htmlFor="dropdown"> </label>
            <select id="dropdown" defaultValue={status} name="dropdown">
              <option value="pending">Pending</option>
              <option value="In progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </button>
        )}
      </td>
    </tr>
  );
};

export default MyPendingWork;
