import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Button } from "./ui/button";
export default function Banner() {
  return (
    <>
      <Swiper
        loop={true}
        navigation={true}
        speed={1200}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="bg-no-repeat w-full bg-center bg-cover h-[500px] flex justify-center items-center"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/2046807/pexels-photo-2046807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <div className="text-center bg-gray-700 h-full w-full bg-opacity-30 flex justify-center items-center">
              <div className="space-y-4">
                <h1 className="text-2xl text-white">Welcome To</h1>
                <h1 className="lg:text-6xl text-4xl font-bold text-white">
                  PIM FORGE ALWAYS CONNECT US.
                </h1>
                <Button className="w-52 text-base bg-themeColor">
                  All Queries
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-no-repeat w-full bg-center bg-cover h-[500px] "
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <div className="text-center bg-gray-700 h-full w-full bg-opacity-30 flex justify-center items-center">
              <div className="space-y-4">
                <h1 className="text-2xl text-white">Welcome To</h1>
                <h1 className="lg:text-6xl text-4xl font-bold text-white">
                  PIM FORGE ALWAYS CONNECT US.
                </h1>
                <Button className="w-52 text-base bg-themeColor">
                  All Queries
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-no-repeat w-full bg-center bg-cover h-[500px] "
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <div className="text-center bg-gray-700 h-full w-full bg-opacity-30 flex justify-center items-center">
              <div className="space-y-4">
                <h1 className="text-2xl text-white">Welcome To</h1>
                <h1 className="lg:text-6xl text-4xl font-bold text-white">
                  PIM FORGE ALWAYS CONNECT US.
                </h1>
                <Button className="w-52 text-base bg-themeColor">
                  All Queries
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
