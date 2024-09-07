import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import "./Products.css";

const CategorySlider = ({ CategoryItem }) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      speed={5000}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
        reverseDirection: true,
      }}
      loop={true}
      breakpoints={{
        420: { slidesPerView: 2, spaceBetween: 20 },
        640: { slidesPerView: 3, spaceBetween: 10 },
        1160: { slidesPerView: 6, spaceBetween: 10 },
        1650: { slidesPerView: 8, spaceBetween: 10 },
        2000: { slidesPerView: 9, spaceBetween: 10 },
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {CategoryItem.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="group bg-white relative border-2 border-gray-400 cursor-pointer ">
            <div className="w-[100%] h-[100%] menu-text-link absolute flex  justify-center items-center z-50 duration-300 group-hover:bg-[#00000097] bg-[#00000073]">
              <div className="d">
                <h1 className=" duration-300 group-hover:opacity-0  group-hover:mb-10 text-center items-center text-gray-300 font-bold uppercase">
                  {item?.name}
                </h1>
                <h1
                  className=" duration-300 opacity-0 group-hover:opacity-100 md:mb-[-30px]
                 text-center text-[14px] items-center text-gray-300 font-bold uppercase"
                >
                  view all
                </h1>
              </div>
            </div>
            <Image src={item.image} alt={item.name} className="rounded-lg  " />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategorySlider;
