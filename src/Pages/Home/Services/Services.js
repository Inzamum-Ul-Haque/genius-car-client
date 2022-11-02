import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="text-center">
        <p className="text-2xl font-semibold text-orange-600 mb-5">Services</p>
        <h2 className="text-5xl font-bold mb-5">Our Service Area</h2>
        <p className="w-2/4 mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center my-10">
        <button className="btn btn-outline border-orange-600 text-orange-600 rounded-md hover:bg-orange-600 hover:text-white hover:border-orange-600">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
