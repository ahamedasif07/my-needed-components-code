import React from "react";
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";
import "./Carucel.css";

const CaeucelSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const reviews = [
    { id: 1, name: "Asif", image: "image1.jpg" },
    { id: 2, name: "John", image: "image2.jpg" },
    { id: 3, name: "Doe", image: "image3.jpg" },
    { id: 4, name: "Jane", image: "image4.jpg" },
  ];

  return (
    <div className="container border-4 mx-auto overflow-hidden">
      <Slider {...settings}>
        {reviews.map((student) => (
          <div key={student.id} className="">
            <div className=" md:h-[310px] border-2 flex flex-col justify-center items-center px-5 py-2 pb-5">
              <div className="flex flex-col justify-center">
                <img
                  className="border-2 border-amber-700 w-[80px] h-[80px] object-cover p-[3px] rounded-full mx-auto"
                  src={student.image}
                  alt={student.name}
                />
                <h1 className="text-center text-[16px] pt-1 font-[600] text-[#3e54a3]">
                  {student.name}
                </h1>
                <p className="text-[12px] text-[#00000090]">{student.SBatch}</p>
              </div>
              <span>
                <FaQuoteRight className="text-[25px] text-[#e28e11e6] mt-2" />
              </span>
              <h2 className="text-[16px] text-start SILIGURI mt-3"></h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CaeucelSlider;
