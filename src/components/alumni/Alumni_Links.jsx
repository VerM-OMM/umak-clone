import React from "react";
import UmakAdmin from "../../assets/UmakAdmin.png";
import { Link } from "react-router-dom";

const Alumni_Links = () => {
  return (
    <div
      style={{ backgroundImage: `url(${UmakAdmin})` }}
      className="container mx-auto max-w-[4000px] bg-cover bg-center antialiased"
    >
      <div className="space-y-4 bg-gradient-to-r from-umakdarkblue via-transparent to-umakdarkblue px-8 py-6 font-metropolis text-white md:space-y-8">
        {/* section title */}
        <div className="flex items-center md:space-x-8">
          <span className="hidden h-[2.4px] w-full rounded-full bg-white md:inline-block" />
          <h1 className="flex w-full justify-center text-nowrap text-2xl font-medium underline underline-offset-8 md:w-auto md:text-4xl md:no-underline">
            Alumi Link
          </h1>
          <span className="hidden h-[2.4px] w-full rounded-full bg-white md:inline-block" />
        </div>

        {/* section contents */}
        <div className="flex flex-col items-center pb-4 md:gap-4">
          <h1 className="text-4xl font-medium md:text-6xl">Be Involved</h1>
          <p className="text-center text-base md:text-3xl">
            UPDATE YOUR INFORMATION WITH US
          </p>
          <Link
            to="/Alumnitracking"
            className="mt-2 rounded-md border-2 px-5 py-2 text-base font-medium hover:bg-white hover:bg-opacity-20 md:mt-0 md:text-2xl"
          >
            Update Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Alumni_Links;
