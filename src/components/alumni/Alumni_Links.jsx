import React from "react";
import UmakAdmin from "../../assets/UmakAdmin.png";
import { Link } from "react-router-dom";

const Alumni_Links = () => {
  return (
    <div
      style={{ backgroundImage: `url(${UmakAdmin})` }}
      className="container max-w-[2000px] mx-auto  antialiased bg-center bg-cover "
    >
      <div className="bg-gradient-to-r from-umakdarkblue  via-transparent to-umakdarkblue py-6 px-8 font-metropolis text-white space-y-4 md:space-y-8">
        {/* section title */}
        <div className="flex items-center md:space-x-8">
          <span className="h-[2.4px] bg-white rounded-full w-full hidden md:inline-block" />
          <h1 className="text-nowrap md:text-4xl  font-medium flex text-2xl w-full md:w-auto justify-center underline-offset-8 underline md:no-underline">
            Alumi Link
          </h1>
          <span className="h-[2.4px] bg-white rounded-full w-full hidden md:inline-block" />
        </div>

        {/* section contents */}
        <div className="flex flex-col items-center md:gap-4 pb-4">
          <h1 className="text-4xl md:text-6xl font-medium">Be Involved</h1>
          <p className="text-base md:text-3xl text-center">
            UPDATE YOUR INFORMATION WITH US
          </p>
          <Link
            to="/Alumnitracking"
            className="border-2 rounded-md px-5 py-2 text-base md:text-2xl font-medium hover:bg-white hover:bg-opacity-20 mt-2 md:mt-0"
          >
            Update Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Alumni_Links;
