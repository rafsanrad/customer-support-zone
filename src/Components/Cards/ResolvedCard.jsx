import React from "react";

const ResolvedCard = ({customer}) => {
  return (
    <div className=" bg-[#E0E7FF] p-1 shadow hover:shadow-lg">
        <h2>{customer.title}</h2>
    </div>
  );
};

export default ResolvedCard;
