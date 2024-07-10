import React from "react";

const About_Hero = () => {
  return (
    <div className="container mx-auto max-w-[4000px] bg-umakdarkblue px-8 py-8">
      <div className="container mx-auto grid max-w-[1100px] gap-10 leading-snug md:grid-cols-2">
        <div className="rounded-lg bg-white px-5 py-5">
          <h1 className="pb-2 font-serif text-3xl font-bold md:text-5xl">
            Mission
          </h1>
          <p className="text-wrap font-metropolis font-medium">
            The Center for Alumni Affairs exists to foster goodwill among UMAK
            alumni in support of the ideals and goals of the University. It
            provides opportunities for alumni to engage in lifelong involvement
            with their university community.
          </p>
        </div>
        <div className="rounded-lg bg-white px-5 py-5">
          <h1 className="pb-2 font-serif text-3xl font-bold md:text-5xl">
            Vision
          </h1>
          <p className="text-wrap font-metropolis font-medium">
            The Center for Alumni Affairs envisions to be the hub of all alumni
            matters at the University of Makati. It will strive to develop
            connections among alumni from all parts of the globe to strengthen
            their commitment to the University, as well as to serve their
            diverse needs and interests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About_Hero;
