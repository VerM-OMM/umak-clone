import React, { useState } from "react";

const Featured_Profile = () => {
  const [expandedProfiles, setExpandedProfiles] = useState({});

  const toggleReadMore = (index) => {
    setExpandedProfiles((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const featuredProfiles = [
    {
      Image: "/img/profile1.jpg",
      Name: "Oliver M. Molina",
      College: "College of Computing and Information Sciences (2025)",
      Program: "Application Development",
      Description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, quas aut tenetur harum minus mollitia in quod architecto autem culpa?",
    },
    {
      Image: "/img/profile2.jpg",
      Name: "Oliver M. Molina",
      College: "College of Computing and Information Sciences (2025)",
      Program: "Application Development",
      Description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, quas aut tenetur harum minus mollitia in quod architecto autem culpa? ",
    },
    {
      Image: "/img/profile3.jpg",
      Name: "Oliver M. Molina",
      College: "College of Computing and Information Sciences (2025)",
      Program: "Application Development",
      Description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, quas aut tenetur harum minus mollitia in quod architecto autem culpa? ",
    },
    {
      Image: "/img/profile4.jpg",
      Name: "Oliver M. Molina",
      College: "College of Computing and Information Sciences (2025)",
      Program: "Application Development",
      Description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, quas aut tenetur harum minus mollitia in quod architecto autem culpa? ",
    },
  ];

  return (
    <div className="container mx-auto max-w-[2000px] bg-umakskyblue px-8 py-8">
      <div className="grid gap-10 md:grid-cols-2">
        {/* profile card */}
        {featuredProfiles.map(
          ({ Image, Name, College, Program, Description }, index) => {
            const isExpanded = expandedProfiles[index];
            const shortDescription = `${Description.slice(0, 50)}...`;

            return (
              <div
                key={index}
                className="mx-auto flex flex-col justify-center overflow-hidden rounded-lg bg-white shadow-lg lg:flex-row"
              >
                <div className="h-48 w-auto">
                  <img
                    className="h-full w-full object-cover object-center"
                    src={Image}
                    alt="gallery-photo"
                  />
                </div>

                <div className="w-full px-4 py-2 font-metropolis text-base font-medium leading-normal">
                  <p className="text-xl font-semibold">{Name}</p>
                  <p className="">{College}</p>
                  <p className="">{Program}</p>
                  <p className="leading-tight">
                    {isExpanded ? Description : shortDescription}
                  </p>
                  {Description.length > 25 && (
                    <button
                      className="text-blue-500"
                      onClick={() => toggleReadMore(index)}
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  )}
                </div>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};

export default Featured_Profile;
