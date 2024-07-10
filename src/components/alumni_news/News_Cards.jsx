import React from "react";

const newsCards = [
  {
    Image: "/img/news1.jpg",
    Title: "Sample 1",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dicta dolorem debitis ut illum nesciunt eveniet officia odit quos cupiditate exercitationem, minima corporis, molestiae possimus, dignissimos quod magni? Fugit, sit.",
    Date: "20201",
  },
  {
    Image: "/img/news2.jpg",
    Title: "Sample 1",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dicta dolorem debitis ut illum nesciunt eveniet officia odit quos cupiditate exercitationem, minima corporis, molestiae possimus, dignissimos quod magni? Fugit, sit.",
    Date: "20201",
  },
  {
    Image: "/img/news3.jpg",
    Title: "Sample 1",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dicta dolorem debitis ut illum nesciunt eveniet officia odit quos cupiditate exercitationem, minima corporis, molestiae possimus, dignissimos quod magni? Fugit, sit.",
    Date: "20201",
  },
  {
    Image: "/img/news4.jpg",
    Title: "Sample 1",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dicta dolorem debitis ut illum nesciunt eveniet officia odit quos cupiditate exercitationem, minima corporis, molestiae possimus, dignissimos quod magni? Fugit, sit.",
    Date: "20201",
  },
];

const News_Cards = () => {
  return (
    <div className="container mx-auto max-w-[4000px] bg-umakskyblue px-8 py-8">
      <div className="mx-auto grid place-items-center gap-10 sm:grid-cols-1 md:grid-cols-2 lg:max-w-[1000px] lg:grid-cols-3">
        {/* profile card */}
        {newsCards.map(({ Image, Title, Description, Date }, index) => (
          <div
            key={index}
            className="flex flex-col justify-center overflow-hidden rounded-lg bg-white shadow-lg"
          >
            <div className="h-72 w-72">
              <img
                src={Image}
                alt="newscard"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="w-72 px-4 py-2 font-metropolis font-medium">
              <p className="text-lg">{Title}</p>
              <p>{Description}</p>
              <p>{Date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News_Cards;
