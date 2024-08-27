import React from "react";
import Slider from "react-slick";
import banner1 from "../../assets/slideshow-character1.png";
import banner2 from "../../assets/slideshow-character2.png";
import banner3 from "../../assets/slideshow-character1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider_One = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const banners = [
    {
      id: 1,
      image: banner1,
      title: "SUMMER SALE STYLISH",
      subtitle: "WOMENS",
    },
    {
      id: 2,
      image: banner2,
      title: "WINTER COLLECTION",
      subtitle: "WOMENS",
    },
    {
      id: 3,
      image: banner3,
      title: "SPRING ARRIVALS",
      subtitle: "WOMENS",
    },
  ];

  return (
    <section className=" py-8 z-10 font-serif bg-gray-100">
      <div className=" max-w-6xl px-6 py-8 mx-auto">
        <Slider {...settings}>
          {banners.map((banner) => (
            <div key={banner.id} className="flex flex-col md:flex-row">
              <div className="flex ">
                <div className="w-full md:w-1/2 py-8 text-center md:text-left flex flex-col justify-center">
                  <h2 className=" mb-3 text-red-800"> NEW TREND</h2>
                  <h1 className="text-[#222222] text-4xl md:text-6xl">
                    {banner.title}
                  </h1>
                  <br />
                  <span className="text-3xl md:text-7xl font-semibold leading-tight tracking-tighter">
                    {banner.subtitle}
                  </span>
                </div>
                <div className="w-full md:w-1/2 py-8 flex justify-center md:justify-end">
                  <img
                    src={banner.image}
                    className="w-[400px] h-[600px] md:w-full max-w-xs md:max-w-md"
                    alt={banner.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Slider_One;
