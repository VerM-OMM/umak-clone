import React from "react";

const Alumni_Descriptions = () => {
  return (
    <div className="container mx-auto max-w-[4000px] space-y-8 bg-umakskyblue px-8 py-6 font-marcellus text-black antialiased">
      {/* section title */}
      <div className="flex items-center md:space-x-8">
        <span className="hidden h-[2.4px] w-full rounded-full bg-black md:inline-block" />
        <h1 className="flex w-full justify-center text-nowrap text-xl underline underline-offset-8 font-medium-simulated md:text-4xl md:no-underline">
          University of Makati Alumni Website
        </h1>
        <span className="hidden h-[2.4px] w-full rounded-full bg-black md:inline-block" />
      </div>
      {/* section contents */}
      <div className="lg:gap-15 grid grid-cols-1 gap-6 pb-4 md:gap-10 md:px-8 md:pb-8 lg:grid-cols-2 xl:grid-cols-3">
        <div className="flex flex-col items-center justify-start space-y-4">
          <h1 className="text-3xl font-medium-simulated">Alumni</h1>
          <p className="text-justify leading-normal">
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
          <p className="text-justify leading-normal">
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
          <p className="text-justify leading-normal">
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
