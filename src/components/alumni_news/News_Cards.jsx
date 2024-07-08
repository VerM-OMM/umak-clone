import React from "react";

const newsCards = [
  {
    Image: "/img/news1.jpg",
    Title: "sample 1",
    Description: "asdawdasdawdasdawd",
    Date: "20201",
  },
  {
    Image: "/img/news2.jpg",
    Title: "sample 1",
    Description: "asdawdasdawdasdawd",
    Date: "20201",
  },
  {
    Image: "/img/news3.jpg",
    Title: "sample 1",
    Description: "asdawdasdawdasdawd",
    Date: "20201",
  },
  {
    Image: "/img/news4.jpg",
    Title: "sample 1",
    Description: "asdawdasdawdasdawd",
    Date: "20201",
  },
];

const News_Cards = () => {
  return (
    <div className="container mx-auto max-w-[4000px] bg-umakskyblue px-8 py-8">
      <div className="mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3 place-items-center">
        {/* profile card */}
        {newsCards.map(({ Image, Title, Description, Date }, index) => (
          <div
            key={index}
            className="flex flex-col justify-center overflow-hidden rounded-lg bg-white shadow-lg"
          >
            <div className="h-60 w-60">
              <img
                src={Image}
                alt="newscard"
                className="h-full w-full object-cover object-center"
              />
                </div>
                
                <div>
                    asdawd
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News_Cards;
