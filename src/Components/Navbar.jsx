import React from 'react';

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto '>
            <div>
                <h3 className='font-bold text-2xl'>CS-Ticket System</h3>
            </div>
            <div class>
                <a>Home</a>
                <a>FAQ</a>
                <a>Changelog</a>
                <a>Blog</a>
                <a>Download</a>
                <a>Contact</a>
                <button>+ New Ticket</button>
            </div>
        </div>
    );
};

export default Navbar;