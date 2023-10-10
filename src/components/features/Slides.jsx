// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Slides() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="text-gray-400">
          <div className="flex-1 flex items-center justify-center">
            <img src="https://purepng.com/public/uploads/large/purepng.com-tomato-in-bowlvegetables-tomato-941524727356xeyyh.png" />
          </div>
          <div className="flex-1 ">
            <div>
              <div className="">
                <h4 className="text-[28px] text-gray-800 font-[800]  ">Lorem ipsun</h4>
              </div>
              <p className="paragraph ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dui enim, pharetra at auctor vitae.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400">
          <div className="flex-1 flex items-center justify-center">
            <img src="https://purepng.com/public/uploads/large/purepng.com-tomato-in-bowlvegetables-tomato-941524727356xeyyh.png" />
          </div>
          <div className="flex-1 ">
            <div>
              <div className="">
                <h4 className="text-[28px] text-gray-800 font-[800]  ">Lorem ipsun</h4>
              </div>
              <p className="paragraph ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dui enim, pharetra at auctor vitae.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400">
          <div className="flex-1 flex items-center justify-center">
            <img src="https://purepng.com/public/uploads/large/purepng.com-tomato-in-bowlvegetables-tomato-941524727356xeyyh.png" />
          </div>
          <div className="flex-1 ">
            <div>
              <div className="">
                <h4 className="text-[28px] text-gray-800 font-[800]  ">Lorem ipsun</h4>
              </div>
              <p className="paragraph ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dui enim, pharetra at auctor vitae.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400">
          <div className="flex-1 flex items-center justify-center">
            <img src="https://purepng.com/public/uploads/large/purepng.com-tomato-in-bowlvegetables-tomato-941524727356xeyyh.png" />
          </div>
          <div className="flex-1 ">
            <div>
              <div className="">
                <h4 className="text-[28px] text-gray-800 font-[800]  ">Lorem ipsun</h4>
              </div>
              <p className="paragraph ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dui enim, pharetra at auctor vitae.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400">
          <div className="flex-1 flex items-center justify-center">
            <img src="https://purepng.com/public/uploads/large/purepng.com-tomato-in-bowlvegetables-tomato-941524727356xeyyh.png" />
          </div>
          <div className="flex-1 ">
            <div>
              <div className="">
                <h4 className="text-[28px] text-gray-800 font-[800]  ">Lorem ipsun</h4>
              </div>
              <p className="paragraph ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dui enim, pharetra at auctor vitae.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400">
          <div className="flex-1 flex items-center justify-center">
            <img src="https://purepng.com/public/uploads/large/purepng.com-tomato-in-bowlvegetables-tomato-941524727356xeyyh.png" />
          </div>
          <div className="flex-1 ">
            <div>
              <div className="">
                <h4 className="text-[28px] text-gray-800 font-[800]  ">Lorem ipsun</h4>
              </div>
              <p className="paragraph ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dui enim, pharetra at auctor vitae.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400">
          <div className="flex-1 flex items-center justify-center">
            <img src="https://purepng.com/public/uploads/large/purepng.com-tomato-in-bowlvegetables-tomato-941524727356xeyyh.png" />
          </div>
          <div className="flex-1 ">
            <div>
              <div className="">
                <h4 className="text-[28px] text-gray-800 font-[800]  ">Lorem ipsun</h4>
              </div>
              <p className=" text-[16px]">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dui enim, pharetra at auctor vitae.
              </p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper2"
      >
        <SwiperSlide className="text-gray-400">
          <div className="flex-1 flex items-center justify-center">
            <img src="https://purepng.com/public/uploads/large/purepng.com-tomato-in-bowlvegetables-tomato-941524727356xeyyh.png" />
          </div>
          <div className="flex-1 ">
            <div>
              <div className="">
                <h4 className="text-[28px] text-gray-800 font-[800]  ">Lorem ipsun</h4>
              </div>
              <p className=" ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dui enim, pharetra at auctor vitae.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400">
          <div className="flex-1 flex items-center justify-center">
            <img src="https://purepng.com/public/uploads/large/purepng.com-tomato-in-bowlvegetables-tomato-941524727356xeyyh.png" />
          </div>
          <div className="flex-1 ">
            <div>
              <div className="">
                <h4 className="text-[28px] text-gray-800 font-[800]  ">Lorem ipsun</h4>
              </div>
              <p className=" ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dui enim, pharetra at auctor vitae.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400">
          <div className="flex-1 flex items-center justify-center">
            <img src="https://purepng.com/public/uploads/large/purepng.com-tomato-in-bowlvegetables-tomato-941524727356xeyyh.png" />
          </div>
          <div className="flex-1 ">
            <div>
              <div className="">
                <h4 className="text-[28px] text-gray-800 font-[800]  ">Lorem ipsun</h4>
              </div>
              <p className=" ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dui enim, pharetra at auctor vitae.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400">
          <div className="flex-1 flex items-center justify-center">
            <img src="https://purepng.com/public/uploads/large/purepng.com-tomato-in-bowlvegetables-tomato-941524727356xeyyh.png" />
          </div>
          <div className="flex-1 ">
            <div>
              <div className="">
                <h4 className="text-[28px] text-gray-800 font-[800]  ">Lorem ipsun</h4>
              </div>
              <p className=" ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dui enim, pharetra at auctor vitae.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400">
          <div className="flex-1 flex items-center justify-center">
            <img src="https://purepng.com/public/uploads/large/purepng.com-tomato-in-bowlvegetables-tomato-941524727356xeyyh.png" />
          </div>
          <div className="flex-1 ">
            <div>
              <div className="">
                <h4 className="text-[28px] text-gray-800 font-[800]  ">Lorem ipsun</h4>
              </div>
              <p className=" ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dui enim, pharetra at auctor vitae.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400">
          <div className="flex-1 flex items-center justify-center">
            <img src="https://purepng.com/public/uploads/large/purepng.com-tomato-in-bowlvegetables-tomato-941524727356xeyyh.png" />
          </div>
          <div className="flex-1 ">
            <div>
              <div className="">
                <h4 className="text-[28px] text-gray-800 font-[800]  ">Lorem ipsun</h4>
              </div>
              <p className=" ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dui enim, pharetra at auctor vitae.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400">
          <div className="flex-1 flex items-center justify-center">
            <img src="https://purepng.com/public/uploads/large/purepng.com-tomato-in-bowlvegetables-tomato-941524727356xeyyh.png" />
          </div>
          <div className="flex-1 ">
            <div>
              <div className="">
                <h4 className="text-[28px] text-gray-800 font-[800]  ">Lorem ipsun</h4>
              </div>
              <p className=" ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dui enim, pharetra at auctor vitae.
              </p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

      {/* swiper3 */}


      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper3"
      >
        <SwiperSlide className="text-gray-400">
          <div className="flex-1 flex items-center justify-center">
            <img src="https://purepng.com/public/uploads/large/purepng.com-tomato-in-bowlvegetables-tomato-941524727356xeyyh.png" />
          </div>
          <div className="flex-1 ">
            <div>
              <div className="">
                <h4 className="text-[28px] text-gray-800 font-[800]  ">Lorem ipsun</h4>
              </div>
              <p className=" ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dui enim, pharetra at auctor vitae.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400">
          <div className="flex-1 flex items-center justify-center">
            <img src="https://purepng.com/public/uploads/large/purepng.com-tomato-in-bowlvegetables-tomato-941524727356xeyyh.png" />
          </div>
          <div className="flex-1 ">
            <div>
              <div className="">
                <h4 className="text-[28px] text-gray-800 font-[800]  ">Lorem ipsun</h4>
              </div>
              <p className=" ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dui enim, pharetra at auctor vitae.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400">
          <div className="flex-1 flex items-center justify-center">
            <img src="https://purepng.com/public/uploads/large/purepng.com-tomato-in-bowlvegetables-tomato-941524727356xeyyh.png" />
          </div>
          <div className="flex-1 ">
            <div>
              <div className="">
                <h4 className="text-[28px] text-gray-800 font-[800]  ">Lorem ipsun</h4>
              </div>
              <p className=" ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dui enim, pharetra at auctor vitae.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400">
          <div className="flex-1 flex items-center justify-center">
            <img src="https://purepng.com/public/uploads/large/purepng.com-tomato-in-bowlvegetables-tomato-941524727356xeyyh.png" />
          </div>
          <div className="flex-1 ">
            <div>
              <div className="">
                <h4 className="text-[28px] text-gray-800 font-[800]  ">Lorem ipsun</h4>
              </div>
              <p className=" ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dui enim, pharetra at auctor vitae.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400">
          <div className="flex-1 flex items-center justify-center">
            <img src="https://purepng.com/public/uploads/large/purepng.com-tomato-in-bowlvegetables-tomato-941524727356xeyyh.png" />
          </div>
          <div className="flex-1 ">
            <div>
              <div className="">
                <h4 className="text-[28px] text-gray-800 font-[800]  ">Lorem ipsun</h4>
              </div>
              <p className=" ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dui enim, pharetra at auctor vitae.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400">
          <div className="flex-1 flex items-center justify-center">
            <img src="https://purepng.com/public/uploads/large/purepng.com-tomato-in-bowlvegetables-tomato-941524727356xeyyh.png" />
          </div>
          <div className="flex-1 ">
            <div>
              <div className="">
                <h4 className="text-[28px] text-gray-800 font-[800]  ">Lorem ipsun</h4>
              </div>
              <p className=" ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dui enim, pharetra at auctor vitae.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400">
          <div className="flex-1 flex items-center justify-center">
            <img src="https://purepng.com/public/uploads/large/purepng.com-tomato-in-bowlvegetables-tomato-941524727356xeyyh.png" />
          </div>
          <div className="flex-1 ">
            <div>
              <div className="">
                <h4 className="text-[28px] text-gray-800 font-[800]  ">Lorem ipsun</h4>
              </div>
              <p className=" ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dui enim, pharetra at auctor vitae.
              </p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
