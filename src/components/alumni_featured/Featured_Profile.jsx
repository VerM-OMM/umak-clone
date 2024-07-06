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
    <div className="container max-w-[2000px] mx-auto bg-umakskyblue py-8 px-8">
      <div className="grid sm:grid-cols-2 gap-10 max-w-[1100px] mx-auto">
        {/* profile card */}
        {profiles.map(({ imageProfile, imageDesc }, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden rounded-lg shadow-lg flex justify-center flex-col md:flex-row mx-auto"
          >
            <div className="w-[300px] h-[170px] md:w-96">
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
