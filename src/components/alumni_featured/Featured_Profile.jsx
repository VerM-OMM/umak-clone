import React from "react";

const Featured_Profile = () => {
  const featuredProfiles = [
    {
      Image: "/img/profile1.jpg",
      Name: "Oliver M. Molina",
      Yeargrad: 2025,
      College: "College of Computing and Information Sciences",
      Program: "Application Development",
      Description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, quas aut tenetur harum minus mollitia in quod architecto autem culpa?",
    },
    {
      Image: "/img/profile2.jpg",
      Name: "Oliver M. Molina",
      Yeargrad: 2025,
      College: "College of Computing and Information Sciences",
      Program: "Application Development",
      Description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, quas aut tenetur harum minus mollitia in quod architecto autem culpa?",
    },
    {
      Image: "/img/profile3.jpg",
      Name: "Oliver M. Molina",
      Yeargrad: 2025,
      College: "College of Computing and Information Sciences",
      Program: "Application Development",
      Description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, quas aut tenetur harum minus mollitia in quod architecto autem culpa?",
    },
    {
      Image: "/img/profile4.jpg",
      Name: "Oliver M. Molina",
      Yeargrad: 2025,
      College: "College of Computing and Information Sciences",
      Program: "Application Development",
      Description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, quas aut tenetur harum minus mollitia in quod architecto autem culpa?",
    },
  ];

  return (
    <div className="container mx-auto max-w-[4000px] bg-umakskyblue px-8 py-8">
      <div className="mx-auto grid max-w-[1300px] gap-10 sm:grid-cols-2">
        {/* profile card */}
        {featuredProfiles.map(
          ({ Image, Name, Yeargrad, College, Program, Description }, index) => (
            <div
              key={index}
              className="mx-auto flex flex-col justify-center overflow-hidden rounded-lg bg-white shadow-lg lg:flex-row"
            >
              <div className="h-60 w-auto lg:w-72 lg:h-72">
                <img
                  className="h-full w-full object-cover object-center"
                  src={Image}
                  alt="gallery-photo"
                />
              </div>
              {/* profile desc */}
              <div className="w-full text-wrap px-4 py-2 font-metropolis text-base font-medium leading-relaxed">
                <p className="text-lg">{Name}</p>
                <p className="">{Yeargrad}</p>
                <p className="">{College}</p>
                <p className="">{Program}</p>
                <p className="">{Description}</p>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Featured_Profile;
