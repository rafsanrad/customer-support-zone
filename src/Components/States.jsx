import React from "react";

const States = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* In progress  */}
        <div
          style={{
            background: "linear-gradient(to right, #632EE3, #9F62F2)",
          }}
          className="text-white rounded-xl p-5"
        >
          <div className="flex  flex-col md:flex-row items-center justify-center h-[200px]">
            <div className="text-xl  text-center">
              <h2 className="text-3xl font-semibold">In Progress</h2>
              <h2 className="text-4xl font-bold">0</h2>
            </div>
          </div>
        </div>
        {/* resolved   */}
        <div style={{
            background: "linear-gradient(to right, #54CF68, #00827A)",
          }} className="text-white  rounded-xl p-5">
          <div className="flex flex-col md:flex-row items-center h-[200px]  justify-center">
            <div className="text-xl text-center">
              <h2 className="text-3xl font-semibold">Resolved</h2>
              <h2 className="text-4xl font-bold">0</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
