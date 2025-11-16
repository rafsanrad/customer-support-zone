import React from 'react';

const CustomerCard = ({customer,handleCustomer}) => {
    return (
       <div 
      onClick={()=>handleCustomer(customer)} 
      className="p-5 rounded-xl shadow-xl relative space-y-3">
      <div className='flex justify-between items-center'>
        <h2 className="text-lg flex items-center gap-3">
        {customer.title} -{customer.description}
        </h2>
        <p>{customer.status}</p>
      </div>
      <p className="text-normal text-gray-400 ">
        {customer.description}
      </p>

      <div className='flex md:flex-row flex-col justify-between '>
        <div className='flex gap-2'>
            <p>{customer.id}</p>
            <p>{customer.priority}</p>
        </div>
        <div className='flex gap-2'>
            <p>{customer.customer}</p>
            <p>{customer.createdAt}</p>
        </div>
      </div>
      

    </div>

    );
};

export default CustomerCard;