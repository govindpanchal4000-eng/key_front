
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Home() {
  const slides = [
    {
      image:
        "https://i.pinimg.com/736x/2b/bb/2a/2bbb2a9dfb2a097072e66e10195efcfc.jpg",
      title: "Premium Keychains",
      text: "Make your keys stylish and unique",
    },
    {
      image:
        "https://i.pinimg.com/1200x/af/a0/f6/afa0f6453a217e1fa3ef45eb74901956.jpg",
      title: "Customize Your Style",
      text: "Create a keychain made just for you",
    },
    {
      image:
        "https://i.pinimg.com/1200x/8b/ca/26/8bca2621d1f01a853381f0576daa8be5.jpg",
      title: "Perfect Gift",
      text: "Beautiful keychains for every occasion",
    },
  ];

  return (
    <section className="fixed top-[80px] bottom-0 left-0 right-0 overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">

              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/45"></div>

              <div className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center">
                <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-2xl">

                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
                    {slide.title}
                  </h1>

                  <p className="mt-4 text-sm sm:text-base md:text-xl text-white/90">
                    {slide.text}
                  </p>

                  <NavLink
                    to="/all"
                    className="  inline-block  mt-6  px-6 sm:px-8 py-3 bg-white  text-gray-900  rounded-full  font-semibold   hover:bg-gray-200  hover:scale-105 transition-all">
                    Shop Now
                  </NavLink>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

