import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <div className="max-w-6xl mx-auto px-3 mt-10">
      <Swiper
        loop={true}
        navigation={true}
        speed={1200}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="bg-no-repeat w-full bg-center bg-cover h-[400px] flex justify-center items-center rounded-xl"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/2046807/pexels-photo-2046807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <div className="text-center bg-gray-700 h-full w-full bg-opacity-30 flex justify-center items-center rounded-xl">
              <div className="space-y-4">
                <h1 className="text-2xl text-white">Welcome To</h1>
                <h1 className="text-4xl font-bold text-white">
                  PIM FORGE ALWAYS CONNECT US.
                </h1>
                <div className="mt-3">
                  <Link to="/queries">
                    <Button className="w-52 text-base bg-themeColor">
                      All Queries
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-no-repeat rounded-xl w-full bg-center bg-cover h-[400px] "
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <div className="text-center bg-gray-700 h-full w-full bg-opacity-30 flex justify-center items-center rounded-xl">
              <div className="space-y-4">
                <h1 className="text-2xl text-white">Find To</h1>
                <h1 className="text-4xl font-bold text-white">
                  Alternative Quality Prouducts.
                </h1>
                <div className="mt-3">
                  <Link to="/queries">
                    <Button className="w-52 text-base bg-themeColor">
                      All Queries
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-no-repeat rounded-xl w-full bg-center bg-cover h-[400px] "
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <div className="text-center bg-gray-700 h-full w-full bg-opacity-30 flex justify-center items-center rounded-xl">
              <div className="space-y-4">
                <h1 className="text-2xl text-white">Share To</h1>
                <h1 className="text-4xl font-bold text-white">
                  Recommendation Quality Full Products.
                </h1>
                <div className="mt-3">
                  <Link to="/queries">
                    <Button className="w-52 text-base bg-themeColor">
                      All Queries
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
