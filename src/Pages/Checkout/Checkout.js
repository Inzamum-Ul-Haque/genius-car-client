import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Checkout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || "unregistered";
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      name,
      phone,
      email,
      message,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          alert("Order placed successfully!!");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="max-w-screen-xl mx-auto text-center my-10">
      <h2 className="text-4xl my-5">Your are about to order: {title}</h2>
      <h3 className="text-3xl my-5">Price: ${price}</h3>
      <form onSubmit={handleOrder}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="firstName"
            type="text"
            placeholder="First name"
            className="input input-bordered w-full mb-5"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last name"
            className="input input-bordered w-full mb-5"
          />
          <input
            name="phone"
            type="text"
            placeholder="Phone"
            className="input input-bordered w-full mb-5"
          />
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="input input-bordered w-full mb-5"
            defaultValue={user.email}
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered w-full mb-5"
          placeholder="Your message"
        ></textarea>
        <input
          className="btn btn-primary border-orange-600 bg-orange-600 text-white rounded-md hover:bg-orange-500 hover:border-orange-500"
          type="submit"
          value="Place Your Order"
        />
      </form>
    </div>
  );
};

export default Checkout;
