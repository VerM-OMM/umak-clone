import React from "react";

const Featured_Profile = () => {
  const profiles = [
    {
      imageProfile: "/img/profile1.jpg",
      imageDesc: "moasdawda",
    },
    {
      imageProfile: "/img/profile2.jpg",
      imageDesc: "moasdawda",
    },
    {
      imageProfile: "/img/profile3.jpg",
      imageDesc: "moasdawda",
    },
    {
      imageProfile: "/img/profile4.jpg",
      imageDesc: "moasdawda",
    },
  ];

  return (
    <div className="container max-w-[2000px] mx-auto bg-umakskyblue px-4 md:px-8 py-8">
      <div className="grid md:grid-cols-2 gap-4">
        {/* profile card */}
        {profiles.map(({ imageProfile, imageDesc }, index) => (
          <div
            key={index}
            className="flex flex-col items-center mx-auto bg-white overflow-hidden rounded-lg"
          >
            <div className="w-[250px] h-[250px]">
              <img
                className="h-full w-full object-cover object-center"
                src={imageProfile}
                alt="gallery-photo"
              />
            </div>
            {/* profile desc */}
            <div className="w-full text-base px-4 py-2">
              <p className="">{imageDesc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured_Profile;
