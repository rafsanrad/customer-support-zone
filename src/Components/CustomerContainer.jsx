import React, { use, useState } from "react";
import States from "./States";
import CustomerCard from "./Cards/CustomerCard";
import TaskCard from "./Cards/TaskCard";
import ResolvedCard from "./Cards/ResolvedCard";

const CustomerContainer = ({ promise }) => {
  
  const data = use(promise);
  const [customers,setCustomers]=useState(data)
  const [taskItems, setTaskItems] = useState([]);
  const [resolvedItems, setResolvedItems] = useState([]);
    const handleCustomer = (customer) => {
    // console.log(customer);
    const isExist=taskItems.find(item=>item.id==customer.id);
    if(isExist){
        // toast.error("Order already on processing. !!!")
        return;
    }
    const newTaskItems = [...taskItems, customer];
    setTaskItems(newTaskItems);
  };
  const handleTask=(customer)=>{
    //1.ready items er vitore order k dhukao.
    customer.cooked_At=new Date().toLocaleTimeString();
    const newResolvedItems=[...resolvedItems,customer]
    setResolvedItems(newResolvedItems)
    //2.cooking items er vitor thke order ta k remove korbo.
    const remaining=taskItems.filter(item=>item.id!==customer.id)
    setTaskItems(remaining);
    //orders theke order card taa k remove kore dite hobe
    const remainingCustomers=customers.filter(item=>item.id!==customer.id)
    setCustomers(remainingCustomers)
  }

  return (
    <div>
      <States 
        taskTotal={taskItems.length}
        resolvedTotal={resolvedItems.length}>
      </States>

      <section className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className=" md:col-span-9">
          <h2 className="font-bold text-3xl">Customer Tickets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 space-y-5">
            {customers.map((customer) => (
              <CustomerCard
                handleCustomer={handleCustomer}
                key={customer.id}
                customer={customer}
              ></CustomerCard>
            ))}
          </div>
        </div>
        <div className="md:col-span-3 space-y-5">
          <h2 className="font-bold text-2xl">Task Status</h2>
          <div className="shadow p-3 space-y-5">
            {taskItems.map((customer) => (
              <TaskCard
                handleTask={handleTask}
                key={customer.id}
                customer={customer}
              ></TaskCard>
            ))}
          </div>
          <h2 className="font-bold text-2xl">Resolved Task</h2>
          <div className="shadow p-3 space-y-5">
            {resolvedItems.map((customer) => (
              <ResolvedCard key={customer.id} customer={customer}></ResolvedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerContainer;
