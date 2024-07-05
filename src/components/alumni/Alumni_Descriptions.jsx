import React from "react";

const Alumni_Descriptions = () => {
  return (
    <div className="container max-w-[2000px] mx-auto py-6 px-8 bg-umakskyblue font-marcellus text-black space-y-8 antialiased">
      {/* section title */}
      <div className="flex items-center md:space-x-8">
        <span className="h-[2.4px] bg-black rounded-full w-full hidden md:inline-block" />
        <h1 className="text-nowrap md:text-4xl  flex font-medium-simulated text-2xl w-full  justify-center underline-offset-8 underline md:no-underline">
          University of Makati Alumni Website
        </h1>
        <span className="h-[2.4px] bg-black rounded-full w-full hidden md:inline-block" />
      </div>
      {/* section contents */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-15 px-8">
        <div className="flex flex-col items-center justify-start space-y-4">
          <h1 className="text-3xl font-medium-simulated">Alumni</h1>
          <p className="text-justify leading-relaxed">
            Step into the future of alumni engagement with the University of
            Makati Alumni Website a powerful digital ecosystem meticulously
            crafted to nurture, connect, and celebrate the journeys of our
            esteemed graduates. In this dynamic online space, we go beyond
            traditional boundaries, seamlessly bridging the gap between past and
            present, and empowering our alumni for continuous growth. The
            University of Makati Alumni Tracking Website is a groundbreaking
            initiative, designed to be more than just a database it's a living,
            breathing testament to the successes of our graduates. Through this
            innovative platform, we are committed to providing a comprehensive,
            user-friendly experience that fosters a sense of belonging and
            facilitates meaningful connections.
          </p>
        </div>
        <div className="flex flex-col items-center justify-start space-y-4">
          <h1 className="text-3xl font-medium-simulated">Featured Alumni</h1>
          <p className="text-justify leading-relaxed">
            Explore the Feature Alumni section, where inspiring stories of our
            distinguished graduates come to life. Delve into their achievements,
            career journeys, and contributions to society, showcasing the
            diverse paths taken by members of our esteemed alumni community.
            From groundbreaking research to entrepreneurial ventures, these
            profiles highlight the impact of our graduates on the world stage,
            serving as beacons of inspiration for current and future alumni
            alike.
          </p>
        </div>
        <div className="flex flex-col items-center justify-start space-y-4">
          <h1 className="text-3xl font-medium-simulated">Newsroom</h1>
          <p className="text-justify leading-relaxed">
            The Newsroom provides a secluded space for alumni to access
            exclusive updates and stories tailored to their interests. Concealed
            behind a discreet link or password-protected portal, this section
            highlights notable alumni achievements, campus events, and insider
            insights. Through curated feature articles, alumni spotlights, and
            event coverage, the Newsroom fosters a sense of community and
            connection among graduates. With its hidden allure, it serves as a
            sanctuary where alumni can engage, reminisce, and celebrate their
            alma mater's legacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Alumni_Descriptions;
