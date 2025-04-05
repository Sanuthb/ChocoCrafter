import React from "react";
import { Avatar, Carousel, Rate } from "antd";

const Reviews = () => {
  const reviews = [
    {
      name: "Narine Anush",
      rating: 5,
      color: "#EA7300",
      inital: "N",
      text: "Sublime! From the first bite, a symphony of flavors unfolded. An experience that transcends mere chocolate. A true masterpiece.",
    },
    {
        name: "Thema Ekene",
        rating: 4,
        color: "#F7374F",
        inital: "T",
        text: "Another great review! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "Aisha Khan",
        rating: 5,
        color: "#4CAF50",
        inital: "A",
        text: "Absolutely loved the chocolate! The flavors were so unique and delicious. Will definitely be ordering again.",
      },
      {
        name: "David Lee",
        rating: 4,
        color: "#2196F3",
        inital: "D",
        text: "The customization options are fantastic. I was able to create the perfect gift. Great service!",
      },
      {
        name: "Sofia Rodriguez",
        rating: 5,
        color: "#9C27B0",
        inital: "S",
        text: "The chocolate was exquisite! The packaging was beautiful and the taste was even better. Highly recommend.",
      },
      {
        name: "Ben Carter",
        rating: 4,
        color: "#FF9800",
        inital: "B",
        text: "Really enjoyed the variety of fillings. The chocolate was fresh and high-quality. A bit pricey, but worth it.",
      },
      {
        name: "Emily Chen",
        rating: 5,
        color: "#00BCD4",
        inital: "E",
        text: "The best chocolate I've ever had! The customer service was exceptional. Thank you for a wonderful experience.",
      },
  ];

  const contentStyle = {
    borderRadius: "20px",
    padding: "20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#fd85b2"
  };

  return (
    <div className="w-full p-20">
      <div>
        <h1 className="text-3xl font-extrabold text-[#e34f4d]">
          Our Clients Taste Experiences
        </h1>
      </div>
      <div className="mt-8">
        <Carousel arrows infinite={true} autoplay={true} draggable={true}>
          {reviews.map((review, index) => (
            <div key={index}>
              <div style={contentStyle}>
                <Avatar style={{ background: review.color }} size={40}>
                  {review.inital}
                </Avatar>
                <div style={{ marginTop: "50px" }}>
                  <Rate disabled defaultValue={review.rating} />
                  <p className="mt-4 text-gray-600">{review.text}</p>
                  <p className="mt-4 font-semibold">{review.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
