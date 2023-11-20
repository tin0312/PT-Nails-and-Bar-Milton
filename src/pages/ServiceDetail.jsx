// ServiceDetail.js

import React from "react";
import { useParams } from "react-router-dom";

const serviceDetails = {
  manicure: [
    { name: "Dipping Powder Manicure", price: "$45" },
    { name: "Regular Manicure", price: "$22" },
    { name: "Shellac Manicure", price: "$35" },
    { name: "Deluxe Manicure", price: "$37" },
    { name: "Regular Hand Polish Change", price: "$10" },
    { name: "Shellac Hand Polish Change", price: "$25" },
    { name: "Paraffin wax for hands", price: "$12" },
  ],
  pedicure: [
    { name: "Regular Pedicure", price: "$35" },
    { name: "Bath Bomb Pedicure", price: "$47" },
    { name: "Shellac Pedicure", price: "$50" },
    { name: "Collagen Deluxe Pedicure", price: "$55" },
    { name: "Regular Toe Polish Change", price: "$15" },
    { name: "Shellac Toes Polish Change", price: "$27" },
    { name: "Paraffin wax for feet", price: "$15" },
    { name: "Deluxe Seasonal Pedicure", price: "$57" },
  ],
  packages: [
    { name: "Regular Manicure and Pedicure", price: "$50" },
    { name: "Package Add-on: Shellac on each service", price: "+ $15" },
    { name: "Package Add-on: Bath Bomb Pedicure", price: "+ $15" },
    { name: "Package Add-on: Collagen Pedicure", price: "+ $20" },
    { name: "Package Add-on: Deluxe Seasonal Pedicure", price: "+ $25" },
  ],
  "artificial-nails": [
    { name: "Shellac Color Change", price: "$30" },
    { name: "Arcrylic Fullset", price: "$42+" },
    { name: "Arcrylic Fill", price: "$32+" },
    { name: "Solar Powder Gel Fullset", price: "$48+" },
    { name: "Solar Powder Gel Fill", price: "$38+" },
    { name: "Bio Gel Fullset", price: "$55+" },
    { name: "Bio Gel Overlay/ Plexi Gel", price: "$50/55" },
    { name: "Dipping Powder Fullset", price: "$50" },
    { name: "Bio Gel Refill", price: "$40+" },
    { name: "Add-on: Shellac Color", price: "+ $10" },
  ],
  "kids-services": [
    { name: "Kid Manicure", price: "$15" },
    { name: "Hands Color", price: "$8" },
    { name: "Toes Color", price: "$10" },
    { name: "Hands and Toes Color", price: "$16" },
    { name: "Kid Pedicure", price: "$30" },
    { name: "Kid Deluxe Pedicure", price: "$40" },
    { name: "Pedicure and Manicure", price: "$40" },
    { name: "Full Pedicure and Hands color", price: "$35" },
    { name: "Add-on: Shellac Color", price: "+ $10" },
    { name: "Services include free designs", price: "♥" },
  ],
  "eyeslash-extension": [
    { name: "Fullset", price: "$120" },
    { name: "Refill in 2 weeks", price: "$55" },
    { name: "Refill in 3 weeks", price: "$65" },
    { name: "Removal", price: "$20" },
    { name: "Lash Lift", price: "$80" },
  ],
  "extra-services": [
    { name: "Nails Trim - Hand", price: "$7" },
    { name: "Nails Trim - Toes", price: "$12" },
    { name: "Nail Repair", price: "$5+" },
    { name: "Nail Removal", price: "$15" },
    { name: "Nail Design", price: "$5+" },
    { name: "Shellac Removal: Hand", price: "$8" },
    { name: "Shellac Removal: Toes", price: "$10" },
    { name: "Dipping Removal", price: "$12" },
    { name: "Ombre style extra", price: "$15" },
    { name: "French extra", price: "$5" },
    { name: "French Tips", price: "$7+" },
    { name: "Nails Sculpture Add-on", price: "+ $15" },
  ],
};

export default function ServiceDetail() {
  const { serviceName } = useParams();
  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };
  const formattedServiceName = capitalizeFirstLetter(serviceName);
  const selectedService = serviceDetails[serviceName];

  if (!selectedService) {
    return <div>Service not found</div>;
  }

  return (
    <div className="service-price-container">
      <h2 className="text-center py-6 text-4xl">{formattedServiceName}</h2>
      <h3 className="text-center text-2xl pb-4">Services and Price</h3>
      <div className="price-detail-container flex flex-col gap-8 py-12">
        {selectedService.map((service, index) => (
            <div className = "flex w-3/4 justify-between mx-auto"key={index}>
              <h4 className="uppercase font-bold">{service.name}</h4>
              <h4>{service.price}</h4>
            </div>
          ))}
      </div>
    </div>
  );
}
