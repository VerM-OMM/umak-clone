import React from "react";
import UmakAdmin from "../../assets/UmakAdmin.png";

const About_Title = () => {
  return (
    <div
      style={{ backgroundImage: `url(${UmakAdmin})` }}
      className="container mx-auto max-w-[4000px] bg-cover bg-center antialiased"
    >
      <div className="space-y-4 bg-gradient-to-r from-umakdarkblue via-transparent to-umakdarkblue px-8 pb-8 pt-14 font-marcellus text-white md:space-y-8 md:pb-14">
        {/* section title */}
        <div className="flex items-center md:space-x-8">
          <span className="hidden h-[2.4px] w-full rounded-full bg-white md:inline-block" />
          <h1 className="flex w-full justify-center text-nowrap text-2xl font-medium underline underline-offset-8 md:w-auto md:text-6xl md:no-underline">
            Alumni Affairs
          </h1>
          <span className="hidden h-[2.4px] w-full rounded-full bg-white md:inline-block" />
        </div>

        <div className="flex justify-center text-center">
          <p className="text-base md:text-xl">
            Step into the future of alumni engagemenet with the University of
            Makati Alumni Tracking Website, a powerful digital ecosystem
            meticulousy crafted to murture, connect, and celebrates. In this
            dynamic online space, we go beyond traditional boundesries,
            seamlessly bridging the gap bewtween past and present, and
            empowering our alumni community for continuos growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About_Title;
