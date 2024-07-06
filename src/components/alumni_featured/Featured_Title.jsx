import React from "react";
import UmakAdmin from "../../assets/UmakAdmin.png";

const Featured_Title = () => {
  return (
    //section container
    <div
      style={{ backgroundImage: `url(${UmakAdmin})` }}
      className="container mx-auto max-w-[2000px] bg-cover bg-center antialiased"
    >
      <div className="space-y-4 bg-gradient-to-r from-umakdarkblue via-transparent to-umakdarkblue px-8 pb-8 pt-14 font-marcellus text-white md:space-y-8 md:pb-14">
        {/* section title */}
        <div className="flex items-center md:space-x-8">
          <span className="hidden h-[2.4px] w-full rounded-full bg-white md:inline-block" />
          <h1 className="flex w-full justify-center text-nowrap text-2xl font-medium underline underline-offset-8 md:w-auto md:text-6xl md:no-underline">
            Featured Alumni
          </h1>
          <span className="hidden h-[2.4px] w-full rounded-full bg-white md:inline-block" />
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
