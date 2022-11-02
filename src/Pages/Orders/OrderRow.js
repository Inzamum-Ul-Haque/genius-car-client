import React, { useEffect, useState } from "react";

const OrderRow = (props) => {
  const { order, handleDelete, handleStatusUpdate } = props;
  const { _id, serviceName, name, price, phone, service, status } = order;
  const [services, setServices] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [service]);

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={services.img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">{price}</span>
      </td>
      <td>Purple</td>
      <th>
        <button
          onClick={() => handleStatusUpdate(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrderRow;
