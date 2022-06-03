import React, { useRef } from "react";
import { Pagination, Navigation, Controller, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ArrowLeft from "../public/images/arrow_left.svg";
import ArrowRight from "../public/images/arrow_right.svg";

function Gallery() {
  const [swiper, setSwiper] = React.useState();
  const prevRef = React.useRef();
  const nextRef = React.useRef();

  React.useEffect(() => {
    if (swiper) {
      console.log("Swiper instance:", swiper);
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <>
      <div className="w-full z-0">
        <Swiper
          modules={[Navigation, Pagination, Controller, Keyboard]}
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current,
          }}
          updateOnWindowResize
          observer
          observeParents
          onSwiper={setSwiper}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          grabCursor={true}
          // loop={true}
          initialSlide={"0"}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            700: {
              initialSlide: 1,
            },
          }}
        >
          <div>
            <SwiperSlide>
              {" "}
              <Image
                src="/images/gallery_1.png"
                alt="Picture of Coil Slitting"
                width={290}
                height={445}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/images/gallery_2.png"
                alt="Picture of Coil Slitting"
                width={510}
                height={334}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/images/gallery_3.png"
                alt="Picture of Coil Slitting"
                width={515}
                height={334}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/images/gallery_4.png"
                alt="Picture of Coil Slitting"
                width={318}
                height={445}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/images/gallery_5.png"
                alt="Picture of Coil Slitting"
                width={756}
                height={334}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/images/gallery_6.png"
                alt="Picture of Coil Slitting"
                width={556}
                height={334}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/images/gallery_7.png"
                alt="Picture of Coil Slitting"
                width={297}
                height={445}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/images/gallery_8.png"
                alt="Picture of Coil Slitting"
                width={499}
                height={334}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/images/gallery_9.png"
                alt="Picture of Coil Slitting"
                width={312}
                height={445}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/images/gallery_10.png"
                alt="Picture of Coil Slitting"
                width={756}
                height={334}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/images/gallery_11.png"
                alt="Picture of Coil Slitting"
                width={628}
                height={445}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/images/gallery_12.png"
                alt="Picture of Coil Slitting"
                width={393}
                height={334}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                className="mr-36"
                src="/images/gallery_13.png"
                alt="Picture of Coil Slitting"
                width={740}
                height={445}
              />
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="flex items-center justify-center my-8 space-x-10">
          <div
            className="swiper-button cursor-pointer transition ease-in-out delay-50 hover:-translate-r-1 hover:scale-110  duration-300"
            ref={prevRef}
          >
            <ArrowLeft />
          </div>
          <div
            className="swiper-button cursor-pointer transition ease-in-out delay-50 hover:-translate-l-1 hover:scale-110  duration-300"
            ref={nextRef}
          >
            <ArrowRight />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
