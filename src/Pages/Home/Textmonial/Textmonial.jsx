import test1 from "../../../assets/images/testmonial/test-1.jpg";
import test2 from "../../../assets/images/testmonial/text-2.jpg";
import test3 from "../../../assets/images/testmonial/test-3.jpg";
import test4 from "../../../assets/images/testmonial/test-4.jpeg";
import test5 from "../../../assets/images/testmonial/text-5.jpg";
import test6 from "../../../assets/images/testmonial/test-6.jpeg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

const Textmonial = () => {
  return (
    <div>
      <div className="py-8">
        <h3 className="text-2xl font-bold text-[#ff2200] text-center py-4">
          Testimonial
        </h3>
        <h1 className="text-4xl font-bold text-center text-black py-2">What Customer Says</h1>
        <p className="text-xl text-center mt-2">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br></br>
          words which dont look even slightly believable.
        </p>
      </div>
      <div className="py-8">
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
          <div className="">
            {/*-----------Slider-------1-------*/}
            <SwiperSlide>
              <div className="p-4 border-2 border-[#ff2200] relative flex w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                <div className="relative flex items-center justify-between gap-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                  <div className="h-[58px] w-[58px] rounded-full">
                    <img
                      src="https://i.ibb.co/Drs30hD/rev-1.jpg"
                      className="border-[3px] border-sky-500 h-[58px] w-[58px] relative inline-block rounded-full object-cover object-center"
                    />
                  </div>
                  <div className="flex items-center">
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-regular fa-star-half-stroke text-xl text-[#ff2200]"></i>
                    <i className="fa-regular fa-star-half-stroke text-xl text-[#ff2200]"></i>
                  </div>
                </div>
                <div className="">
                  <h5 className="text-2xl font-bold text-[#008080]">
                    Tania Andrew
                  </h5>
                  <p className="py-4 text-xl font-sans text-inherit">
                    I found solution to all my design needs from Creative Tim. I
                    use them as a freelancer in my hobby projects for fun!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/*-----------Slider-------2-------*/}
            <SwiperSlide>
              <div className="p-4 border-2 border-[#ff2200] relative flex w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                <div className="relative flex items-center justify-between gap-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                  <div className="h-[58px] w-[58px] rounded-full">
                    <img
                      src="https://i.ibb.co/JzLhcqK/rev-2.jpg"
                      className="border-[3px] border-sky-500 h-[58px] w-[58px] relative inline-block rounded-full object-cover object-center"
                    />
                  </div>
                  <div className="flex items-center">
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-regular fa-star-half-stroke text-xl text-[#ff2200]"></i>
                    <i className="fa-regular fa-star-half-stroke text-xl text-[#ff2200]"></i>
                  </div>
                </div>
                <div className="">
                  <h5 className="text-2xl font-bold text-[#008080]">
                    Tania Andrew
                  </h5>
                  <p className="py-4 text-xl font-sans text-inherit">
                    I found solution to all my design needs from Creative Tim. I
                    use them as a freelancer in my hobby projects for fun!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/*-----------Slider-------3-------*/}
            <SwiperSlide>
              <div className="p-4 border-2 border-[#ff2200] relative flex w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                <div className="relative flex items-center justify-between gap-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                  <div className="h-[58px] w-[58px] rounded-full">
                    <img
                      src="https://i.ibb.co/59thnDP/rev-3.jpg"
                      className="border-[3px] border-sky-500 h-[58px] w-[58px] relative inline-block rounded-full object-cover object-center"
                    />
                  </div>
                  <div className="flex items-center">
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-regular fa-star-half-stroke text-xl text-[#ff2200]"></i>
                    <i className="fa-regular fa-star-half-stroke text-xl text-[#ff2200]"></i>
                  </div>
                </div>
                <div className="">
                  <h5 className="text-2xl font-bold text-[#008080]">
                    Tania Andrew
                  </h5>
                  <p className="py-4 text-xl font-sans text-inherit">
                    I found solution to all my design needs from Creative Tim. I
                    use them as a freelancer in my hobby projects for fun!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/*-----------Slider-------4-------*/}
            <SwiperSlide>
              <div className="p-4 border-2 border-[#ff2200] relative flex w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                <div className="relative flex items-center justify-between gap-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                  <div className="h-[58px] w-[58px] rounded-full">
                    <img
                      src="https://i.ibb.co/H4kmffH/rev-4.jpg"
                      className="border-[3px] border-sky-500 h-[58px] w-[58px] relative inline-block rounded-full object-cover object-center"
                    />
                  </div>
                  <div className="flex items-center">
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-regular fa-star-half-stroke text-xl text-[#ff2200]"></i>
                    <i className="fa-regular fa-star-half-stroke text-xl text-[#ff2200]"></i>
                  </div>
                </div>
                <div className="">
                  <h5 className="text-2xl font-bold text-[#008080]">
                    Tania Andrew
                  </h5>
                  <p className="py-4 text-xl font-sans text-inherit">
                    I found solution to all my design needs from Creative Tim. I
                    use them as a freelancer in my hobby projects for fun!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/*-----------Slider-------5-------*/}
            <SwiperSlide>
              <div className="p-4 border-2 border-[#ff2200] relative flex w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                <div className="relative flex items-center justify-between gap-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                  <div className="h-[58px] w-[58px] rounded-full">
                    <img
                      src="https://i.ibb.co/mzfF0LQ/rev-5.jpg"
                      className="border-[3px] border-sky-500 h-[58px] w-[58px] relative inline-block rounded-full object-cover object-center"
                    />
                  </div>
                  <div className="flex items-center">
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-regular fa-star-half-stroke text-xl text-[#ff2200]"></i>
                    <i className="fa-regular fa-star-half-stroke text-xl text-[#ff2200]"></i>
                  </div>
                </div>
                <div className="">
                  <h5 className="text-2xl font-bold text-[#008080]">
                    Tania Andrew
                  </h5>
                  <p className="py-4 text-xl font-sans text-inherit">
                    I found solution to all my design needs from Creative Tim. I
                    use them as a freelancer in my hobby projects for fun!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/*-----------Slider-------6-------*/}
            <SwiperSlide>
              <div className="p-4 border-2 border-[#ff2200] relative flex w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                <div className="relative flex items-center justify-between gap-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                  <div className="h-[58px] w-[58px] rounded-full">
                    <img
                      src="https://i.ibb.co/jvygcGx/rev-6.jpg"
                      className="border-[3px] border-sky-500 h-[58px] w-[58px] relative inline-block rounded-full object-cover object-center"
                    />
                  </div>
                  <div className="flex items-center">
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-regular fa-star-half-stroke text-xl text-[#ff2200]"></i>
                    <i className="fa-regular fa-star-half-stroke text-xl text-[#ff2200]"></i>
                  </div>
                </div>
                <div className="">
                  <h5 className="text-2xl font-bold text-[#008080]">
                    Tania Andrew
                  </h5>
                  <p className="py-4 text-xl font-sans text-inherit">
                    I found solution to all my design needs from Creative Tim. I
                    use them as a freelancer in my hobby projects for fun!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/*-----------Slider-------7-------*/}
            <SwiperSlide>
              <div className="p-4 border-2 border-[#ff2200] relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                <div className="relative flex items-center justify-between gap-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                  <div className="h-[58px] w-[58px] rounded-full">
                    <img
                      src="https://i.ibb.co/2PgMh5f/rev-7.jpg"
                      className="border-[3px] border-sky-500 h-[58px] w-[58px] relative inline-block rounded-full object-cover object-center"
                    />
                  </div>
                  <div className="flex items-center">
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-regular fa-star-half-stroke text-xl text-[#ff2200]"></i>
                    <i className="fa-regular fa-star-half-stroke text-xl text-[#ff2200]"></i>
                  </div>
                </div>
                <div className="">
                  <h5 className="text-2xl font-bold text-[#008080]">
                    Tania Andrew
                  </h5>
                  <p className="py-4 text-xl font-sans text-inherit">
                    I found solution to all my design needs from Creative Tim. I
                    use them as a freelancer in my hobby projects for fun!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/*-----------Slider-------8-------*/}
            <SwiperSlide>
              <div className="p-4 border-2 border-[#ff2200] relative flex w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                <div className="relative flex items-center justify-between gap-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                  <div className="h-[58px] w-[58px] rounded-full">
                    <img
                      src="https://i.ibb.co/Fq5gYgW/rev-8.jpg"
                      className="border-[3px] border-sky-500 h-[58px] w-[58px] relative inline-block rounded-full object-cover object-center"
                    />
                  </div>
                  <div className="flex items-center">
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-solid fa-star text-xl text-[#ff2200]"></i>
                    <i className="fa-regular fa-star-half-stroke text-xl text-[#ff2200]"></i>
                    <i className="fa-regular fa-star-half-stroke text-xl text-[#ff2200]"></i>
                  </div>
                </div>
                <div className="">
                  <h5 className="text-2xl font-bold text-[#008080]">
                    Tania Andrew
                  </h5>
                  <p className="py-4 text-xl font-sans text-inherit">
                    I found solution to all my design needs from Creative Tim. I
                    use them as a freelancer in my hobby projects for fun!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

{
  /*------------Testimonial---------1----------*/
}
// <div className="border-2 border-rose-500 p-3 relative flex w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
//   <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
//     <img
//       src={test1}
//       className="relative inline-block h-[50px] w-[58px] !rounded-full object-cover object-center"
//     />
//     <div className="flex w-full flex-col gap-0.5">
//       <div className="flex items-center justify-between">
//         <h5 className="block font-bold text-xl antialiased  leading-snug tracking-normal text-blue-gray-900">
//           Tania Andrew
//         </h5>
//         <div className="flex items-center gap-0 5">
//           <i className="fa-solid fa-car-burst text-3xl text-rose-400"></i>
//         </div>
//       </div>
//       <p className="block font-medium text-base antialiased  leading-relaxed text-blue-gray-900">
//         Engin Meaker
//       </p>
//     </div>
//   </div>
//   <div className="p-0">
//     <p className="block  text-base antialiased  leading-relaxed text-inherit">
//       I found solution to all my design needs from Creative Tim. I use
//       them as a freelancer in my hobby projects for fun! And its really
//       affordable, very humble guys !!
//     </p>
//   </div>
//   <div className="mt-1">
//     <i className="fa-solid fa-star text-2xl text-rose-400"></i>
//     <i className="fa-solid fa-star text-2xl m-1 text-rose-400"></i>
//     <i className="fa-solid fa-star text-2xl m-1 text-rose-400"></i>
//     <i className="fa-regular fa-star-half-stroke text-2xl m-1 text-rose-400"></i>
//     <i className="fa-regular fa-star-half-stroke text-2xl m-1 text-rose-400"></i>
//   </div>
// </div>
export default Textmonial;
