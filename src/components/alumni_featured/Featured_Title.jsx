import React from "react";
import UmakAdmin from "../../assets/UmakAdmin.png";

const Featured_Title = () => {
  return (
    //section container
    <div
      style={{ backgroundImage: `url(${UmakAdmin})` }}
      className="container max-w-[2000px] mx-auto  antialiased bg-center bg-cover"
    >
      <div className="bg-gradient-to-r from-umakdarkblue  via-transparent to-umakdarkblue pt-14 pb-8 md:pb-14 px-8 font-marcellus text-white space-y-4 md:space-y-8">
        {/* section title */}
        <div className="flex items-center md:space-x-8 ">
          <span className="h-[2.4px] bg-white rounded-full w-full hidden md:inline-block" />
          <h1 className="text-nowrap md:text-6xl  font-medium flex text-2xl w-full md:w-auto justify-center underline-offset-8 underline md:no-underline">
            Featured Alumni
          </h1>
          <span className="h-[2.4px] bg-white rounded-full w-full hidden md:inline-block" />
        </div>

        <div className="flex justify-center text-center">
          <p className="text-base md:text-xl">
            Alumni Herons showcasing their individual's achievements and
            experience post-graduation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured_Title;
