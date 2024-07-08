import React from "react";

const About_Hero = () => {
  return (
    <div className="container mx-auto max-w-[4000px] bg-umakskyblue px-8 py-8">
      <div className="container max-w-[1100px] mx-auto grid gap-10 md:grid-cols-2 leading-snug">
        <div className="rounded-lg bg-white px-5 py-5">
          <h1 className="pb-2 font-serif text-3xl md:text-5xl font-bold">Mission</h1>
          <p className="text-wrap font-metropolis font-medium">
            The Center for Alumni Affairs exists to foster goodwill among UMAK
            alumni in support of the ideals and goals of the University. It
            provides opportunities for alumni to engage in lifelong involvement
            with their university community.
          </p>
        </div>
        <div className="rounded-lg bg-white px-5 py-5">
          <h1 className="pb-2 font-serif text-3xl md:text-5xl font-bold">Vision</h1>
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
