import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-[#A1A1AA] ">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 p-5">
        <div className="space-y-3">
          <h3 className="font-bold text-lg ! text-white">CS — Ticket System</h3>
          <p >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type.
          </p>
        </div>
        <div className="space-y-5">
          <h3 className="font-semibold text-lg ! text-white">Company</h3>
          <p>About Us</p>
          <p>Our Mission</p>
          <p>Contact Salad</p>
        </div>
        <div className="space-y-5">
          <h3 className="font-semibold text-lg ! text-white">Services</h3>
          <p>Products & Services</p>
          <p>Customer Stories</p>
          <p>Download Apps</p>
        </div>
        <div className="space-y-5">
          <h3 className="font-semibold text-lg ! text-white">Information</h3>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Join Us</p>
        </div>
        <div className="space-y-5">
          <h3 className="font-semibold text-lg ! text-white ">Social Links</h3>
          <p>@CS — Ticket System</p>
          <p>@CS — Ticket System</p>
          <p>@CS — Ticket System</p>
          <p>support@cst.com</p>
        </div>
      </div>
      <hr />
      <div>
        <p className="text-center p-5">© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
