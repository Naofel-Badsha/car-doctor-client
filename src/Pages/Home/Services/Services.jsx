// import { useEffect, useState } from "react";

import ServicesCard from "./ServicesCard";
import useServices from './../../../Hooks/useServices';


const Services = () => {
  //----custom hooks-------?
  const  services = useServices()

  // const [services, setServices] = useState([]);
  // useEffect(() => {
  //   //------server---side----get---see---all----name----
  //   fetch("http://localhost:5000/services")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);

  return (
    <div className="mt-16">
      <div className="text-center py-6">
        <h1 className="text-2xl font-bold text-[#ff2200] py-4">Our Services</h1>
        <h3 className="text-4xl font-bold  py-2 text-black">Our Services Area</h3>
        <p className="text-[18px] mt-2">
          The majority have suffered alternation in some form, <br></br>
          by injected humour, or randomised words don not look even slightly
          belivable
        </p>
      </div>
      <div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {services.map((service) => (
            <ServicesCard key={service._id} service={service}></ServicesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
