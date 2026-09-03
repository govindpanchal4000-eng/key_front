return (
  <div className="w-full h-[calc(100vh-80px)] overflow-hidden">
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

            {/* Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="
                absolute inset-0
                w-full h-full
                object-cover
                object-center
              "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Content */}
            <div className="
              absolute inset-0 z-10
              flex items-center justify-center
              px-4 sm:px-6
              text-center
            ">
              
              <div className="
                w-[92%]
                sm:w-[80%]
                md:w-auto
                max-w-3xl
                bg-white/10
                backdrop-blur-md
                border border-white/20
                rounded-2xl sm:rounded-3xl
                p-5
                sm:p-7
                md:p-10
                text-white
                shadow-2xl
              ">

                {/* Title */}
                <h1 className="
                  text-2xl
                  sm:text-4xl
                  md:text-6xl
                  lg:text-7xl
                  font-bold
                  leading-tight
                ">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="
                  mt-3
                  sm:mt-4
                  text-sm
                  sm:text-base
                  md:text-xl
                  text-white/90
                ">
                  {slide.text}
                </p>

                {/* Button */}
                <button className="
                  mt-5
                  sm:mt-7
                  px-6
                  sm:px-8
                  py-2.5
                  sm:py-3
                  bg-white
                  text-gray-900
                  rounded-full
                  font-semibold
                  text-sm
                  sm:text-base
                  hover:bg-gray-200
                  hover:scale-105
                  transition-all
                ">
                  Shop Now
                </button>

              </div>
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);