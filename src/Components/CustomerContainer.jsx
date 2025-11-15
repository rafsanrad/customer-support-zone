import React from 'react';
import States from './States';

const CustomerContainer = ({promise}) => {
    console.log(promise)
    return (
        <div>
            <States></States>
        </div>
    );
};

export default CustomerContainer;