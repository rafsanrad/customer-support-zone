import React from "react";

const TaskCard = ({ customer, handleTask }) => {
  return (
    <div
      className="rounded-xl p-1 shadow hover:shadow-lg"
      
    >
      {/* Title */}
      <h3 className="text-lg font-semibold mb-2">
        {customer.title}-{customer.description}
      </h3>
      {/* Static Button */}
      <button
        onClick={() => handleTask(customer)}
        className="px-3 mt-3 py-1 shadow text-sm hover:bg-black hover:text-white text-white bg-green-600 w-full cursor-pointer rounded-xl"
      >
        Complete
      </button>
    </div>
  );
};

export default TaskCard;
