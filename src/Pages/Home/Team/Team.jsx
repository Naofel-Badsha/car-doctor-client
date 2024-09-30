import team1 from "../../../assets/images/team/team-1.jpg";
import team2 from "../../../assets/images/team/team-2.jpg";
import team3 from "../../../assets/images/team/team-3.jpg";
import team4 from "../../../assets/images/team/team-4.jpg";
import team5 from "../../../assets/images/team/team-5.jpg";
import team6 from "../../../assets/images/team/team-6.jpg";

import teamSocialIcon1 from "../../../assets/images/social-icon/social-1.png";
import teamSocialIcon2 from "../../../assets/images/social-icon/social-2.png";
import teamSocialIcon3 from "../../../assets/images/social-icon/social-3.png";
import teamSocialIcon4 from "../../../assets/images/social-icon/sotial-4.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div>
      <div className="text-center py-16">
        <h3 className="text-2xl font-bold text-[#ff2200] text-center ">Team</h3>
        <h1 className="text-4xl font-bold py-4 text-black">Meet Our Team</h1>
        <p className="text-xl mt-2">
          The majority have suffered alteration in some form, by injected
          humour, or Randomised <br></br>
          words which dont look even slightly believable.
        </p>
      </div>
      {/*----------------------------*/}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={25}
        slidesPerView={1}
        autoplay={true}
        grabCursor={true}
        delay={"100"}
        loop={true}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <div>
          {/*-----------Slider-------1-------*/}
          <SwiperSlide>
            <div className="relative flex w-full flex-col rounded-xl border-2  border-[#ff2200] bg-white bg-clip-border text-gray-700 shadow-lg">
              <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img src={team1} />
              </div>
              <div className="p-6">
                <div className="text-center">
                  <h5 className="text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                    Car Engine Plug
                  </h5>
                  <p className="text-xl font-medium antialiased  leading-relaxed text-[#ff2200]">
                    Taier Change Expert
                  </p>
                </div>
                <div className="flex items-center justify-center gap-5 mt-3 group">
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon1} />
                  </Link>
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon2} />
                  </Link>
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon3} />
                  </Link>
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon4} />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/*-----------Slider-------2-------*/}
          <SwiperSlide>
            <div className="relative flex w-full flex-col rounded-xl border-2  border-[#ff2200] bg-white bg-clip-border text-gray-700 shadow-lg">
              <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img src={team3} />
              </div>
              <div className="p-6">
                <div className="text-center">
                  <h5 className="text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                    Car Engine Plug
                  </h5>
                  <p className="text-xl font-medium antialiased  leading-relaxed text-[#ff2200]">
                    Taier Change Expert
                  </p>
                </div>
                <div className="flex items-center justify-center gap-5 mt-3 group">
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon1} />
                  </Link>
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon2} />
                  </Link>
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon3} />
                  </Link>
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon4} />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/*-----------Slider-------3-------*/}
          <SwiperSlide>
            <div className="relative flex w-full flex-col rounded-xl border-2  border-[#ff2200] bg-white bg-clip-border text-gray-700 shadow-lg">
              <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img src={team3} />
              </div>
              <div className="p-6">
                <div className="text-center">
                  <h5 className="text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                    Car Engine Plug
                  </h5>
                  <p className="text-xl font-medium antialiased  leading-relaxed text-[#ff2200]">
                    Taier Change Expert
                  </p>
                </div>
                <div className="flex items-center justify-center gap-5 mt-3 group">
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon1} />
                  </Link>
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon2} />
                  </Link>
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon3} />
                  </Link>
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon4} />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/*-----------Slider-------4-------*/}
          <SwiperSlide>
            <div className="relative flex w-full flex-col rounded-xl border-2  border-[#ff2200] bg-white bg-clip-border text-gray-700 shadow-lg">
              <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img src={team4} />
              </div>
              <div className="p-6">
                <div className="text-center">
                  <h5 className="text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                    Car Engine Plug
                  </h5>
                  <p className="text-xl font-medium antialiased  leading-relaxed text-[#ff2200]">
                    Taier Change Expert
                  </p>
                </div>
                <div className="flex items-center justify-center gap-5 mt-3 group">
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon1} />
                  </Link>
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon2} />
                  </Link>
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon3} />
                  </Link>
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon4} />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/*-----------Slider-------5-------*/}
          <SwiperSlide>
            <div className="relative flex w-full flex-col rounded-xl border-2  border-[#ff2200] bg-white bg-clip-border text-gray-700 shadow-lg">
              <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img src={team5} />
              </div>
              <div className="p-6">
                <div className="text-center">
                  <h5 className="text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                    Car Engine Plug
                  </h5>
                  <p className="text-xl font-medium antialiased  leading-relaxed text-[#ff2200]">
                    Taier Change Expert
                  </p>
                </div>
                <div className="flex items-center justify-center gap-5 mt-3 group">
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon1} />
                  </Link>
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon2} />
                  </Link>
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon3} />
                  </Link>
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon4} />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/*-----------Slider-------6-------*/}
          <SwiperSlide>
            <div className="relative flex w-full flex-col rounded-xl border-2  border-[#ff2200] bg-white bg-clip-border text-gray-700 shadow-lg">
              <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img src={team6} />
              </div>
              <div className="p-6">
                <div className="text-center">
                  <h5 className="text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                    Car Engine Plug
                  </h5>
                  <p className="text-xl font-medium antialiased  leading-relaxed text-[#ff2200]">
                    Taier Change Expert
                  </p>
                </div>
                <div className="flex items-center justify-center gap-5 mt-3 group">
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon1} />
                  </Link>
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon2} />
                  </Link>
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon3} />
                  </Link>
                  <Link className="cursor-pointer">
                    <img className="w-[35px]" src={teamSocialIcon4} />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Team;
