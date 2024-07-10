import React from "react";

const About_Statement = () => {
  return (
    <div className="md:px-15 container mx-auto max-w-[4000px] space-y-4 bg-umakskyblue px-10 py-8 font-metropolis antialiased lg:px-20 2xl:px-48 2xl:py-14">
      <h1 className="text-3xl font-medium">Functional Statement</h1>
      <h2 className="px-4 text-base font-medium md:px-10 2xl:px-20">
        The Center for Alumni Affairs shall:
      </h2>
      <div className="space-y-2 px-8 font-medium md:px-20 2xl:px-40">
        <p>
          1. Encourage Alumni engagements in academic and non-academic related
          endeavors of the University of Makati in close coordination with
          Colleges and Institutes.
        </p>
        <p>
          2. Collaborate with AUAI in its programs and activities for the
          general welfare of the Alumni of the University of Makati.
        </p>
        <p>
          3. Continuously update the CAA social media platform for relevant
          information beneficial for all Alumni.
        </p>
        <p>
          4. Provide support in establishing college-based and international
          Alumni associations.
        </p>
        <p>
          5. Network the Alumni for possible employment or better employment.
        </p>
      </div>
    </div>
  );
};

export default About_Statement;
