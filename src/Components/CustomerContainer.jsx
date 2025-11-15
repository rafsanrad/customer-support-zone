import React, { use, useState } from "react";
import States from "./States";
import CustomerCard from "./Cards/CustomerCard";

const CustomerContainer = ({ promise }) => {
  
  const data = use(promise);
  const [customers,setCustomers]=useState(data)
  return (
    <div>
      <States></States>

      <section className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className=" md:col-span-9">
          <h2 className="font-bold text-3xl">Customer Tickets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 space-y-5">
            {customers.map((customer) => (
              <CustomerCard
                // handleOrder={handleOrder}
                key={customer.id}
                customer={customer}
              ></CustomerCard>
            ))}
          </div>
        </div>
        {/* <div className="md:col-span-5 space-y-5">
          <h2 className="font-bold text-2xl">Cooking Now</h2>
          <div className="shadow p-10 space-y-5">
            {cookingItems.map((order) => (
              <CookingCard
                handleCooking={handleCooking}
                key={order.id}
                order={order}
              ></CookingCard>
            ))}
          </div>
          <h2 className="font-bold text-2xl">Order Ready</h2>
          <div className="shadow p-10 space-y-5">
            {readyItems.map((order) => (
              <ReadyCard key={order.id} order={order}></ReadyCard>
            ))}
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default CustomerContainer;
