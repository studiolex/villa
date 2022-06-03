import React, { useRef } from "react";
import { Pagination, Controller, Keyboard, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css/pagination";

function MiniGallery() {
  const [swiper, setSwiper] = React.useState();
  const prevRef = React.useRef();
  const nextRef = React.useRef();

  return (
    <>
      <div className="w-full">
        <Swiper
          className="gallery"
          modules={[Pagination, Controller, Autoplay]}
          updateOnWindowResize
          observer
          observeParents
          onSwiper={setSwiper}
          slidesPerView={"auto"}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          initialSlide={"0"}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <div className="minigallery">
            <SwiperSlide>
              <div className="w-full">
                <Image
                  src="/images/gallery_home_1.png"
                  alt="Picture of Coil Slitting"
                  width={533}
                  height={380}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <Image
                  src="/images/gallery_home_2.png"
                  alt="Picture of Coil Slitting"
                  width={533}
                  height={380}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <Image
                  src="/images/gallery_home_3.png"
                  alt="Picture of Coil Slitting"
                  width={533}
                  height={380}
                />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default MiniGallery;
