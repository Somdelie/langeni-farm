// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Client, Databases } from "appwrite";
import "./styles.css";
import React from "react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Slides() {
  const [aboutSlide, setAboutSlide] = React.useState([]);

  const client = new Client()
    .setEndpoint(import.meta.env.VITE_PUBLIC_APPWRITE_URL)
    .setProject(import.meta.env.VITE_PUBLIC_APPWRITE_PROJECT_ID);

  const databases = new Databases(client);

  async function init() {
    const response = await databases.listDocuments(
      import.meta.env.VITE_PUBLIC_APPWRITE_DATABASE,
      import.meta.env.VITE_PUBLIC_APPWRITE_ABOUT_SLIDER_COLLECTION
    );
    setAboutSlide(response.documents);
    // console.log(response.documents);
  }

  React.useEffect(() => {
    init();
  }, []);
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
        {aboutSlide?.map((slide) => (
          <dv className="flex" key={slide.$id}>
            <SwiperSlide className="text-gray-400">
              <div className="flex-1 flex items-center justify-center">
                <img src={slide.imageUrl} />
              </div>
              <div className="flex-1 ">
                <div className="">
                  <div className="">
                    <h4 className="text-[28px] text-gray-800 font-[800]  ">
                      {slide.heading}
                    </h4>
                  </div>
                  <p className=" py-2 "> {slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          </dv>
        ))}
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
        {aboutSlide?.map((slide) => (
          <dv className="flex" key={slide.$id}>
            <SwiperSlide className="text-gray-400">
              <div className="flex-1 flex items-center justify-center">
                <img src={slide.imageUrl} />
              </div>
              <div className="flex-1 ">
                <div className="">
                  <div className="">
                    <h4 className="text-[28px] text-gray-800 font-[800]  ">
                      {slide.heading}
                    </h4>
                  </div>
                  <p className=" py-2 "> {slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          </dv>
        ))}
      </Swiper>
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
        {aboutSlide?.map((slide) => (
          <dv className="flex" key={slide.$id}>
            <SwiperSlide className="text-gray-400">
              <div className="flex-1 flex items-center justify-center">
                <img src={slide.imageUrl} />
              </div>
              <div className="flex-1 ">
                <div className="">
                  <div className="">
                    <h4 className="text-[28px] text-gray-800 font-[800]  ">
                      {slide.heading}
                    </h4>
                  </div>
                  <p className=" py-2 "> {slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          </dv>
        ))}
      </Swiper>
    </>
  );
}
