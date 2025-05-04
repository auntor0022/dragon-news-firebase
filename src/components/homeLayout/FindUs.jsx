import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-8">
      <h2 className="font-semibold text-xl mb-5">Find Us On</h2>
      <div className="join join-vertical w-full">
        <button className="btn bg-white justify-start text-accent font-medium text-base join-item"> <FaFacebook size={22}/> Facebook</button>
        <button className="btn bg-white justify-start text-accent font-medium text-base join-item"><FaTwitter size={22}/> Twitter</button>
        <button className="btn bg-white justify-start text-accent font-medium text-base join-item"><FaInstagram size={22}/> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
