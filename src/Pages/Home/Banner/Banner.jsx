import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[700px] mt-5">
      {/*---------Slider--------1-----------*/}
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className="w-full rounded-lg " />
        <div className="absolute rounded-lg flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#1a1919] to-[rgba(21, 21, 21)]">
          <div className="pl-12">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl  text-white font-bold">
                Affordable
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl  text-white font-bold py-3">
                Price For Car
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl  text-white font-bold">
                Servicing
              </h1>
            </div>

            <div className="py-8">
              <p className="text-xl md:text-2xl lg:text-3xl text-white ">
                Ther are many variable of passages of avilable, But
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white ">
                the majority have suffered alteration in some form
              </p>
            </div>
            <div className="flex items-start justify-start gap-5 flex-col md:flex-row lg:flex-row">
              <button className="btn text-lg bg-[#ff2200] text-white">
                Discover More
              </button>
              <button className="btn text-lg btn-outline btn-accent text-white">
                Letest Projects
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-r bg-[#ff2200]">
            ❯
          </a>
        </div>
      </div>
      {/*---------Slider--------2-----------*/}

      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-lg " />
        <div className="absolute rounded-lg flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#1a1919] to-[rgba(21, 21, 21)]">
          <div className="pl-12">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl  text-white font-bold">
                Affordable
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl  text-white font-bold py-3">
                Price For Car
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl  text-white font-bold">
                Servicing
              </h1>
            </div>

            <div className="py-8">
              <p className="text-xl md:text-2xl lg:text-3xl text-white ">
                Ther are many variable of passages of avilable, But
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white ">
                the majority have suffered alteration in some form
              </p>
            </div>
            <div className="flex gap-5 flex-col md:flex-row lg:flex-row">
              <button className="btn text-lg bg-[#ff2200] text-white">
                Discover More
              </button>
              <button className="btn text-lg btn-outline btn-accent text-white">
                Letest Projects
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-[#ff2200]">
            ❯
          </a>
        </div>
      </div>

      {/*---------Slider--------3-----------*/}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-lg" />
        <div className="absolute rounded-lg flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#1a1919] to-[rgba(21, 21, 21)]">
          <div className="pl-12">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl  text-white font-bold">
                Affordable
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl  text-white font-bold py-3">
                Price For Car
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl  text-white font-bold">
                Servicing
              </h1>
            </div>

            <div className="py-8">
              <p className="text-xl md:text-2xl lg:text-3xl text-white ">
                Ther are many variable of passages of avilable, But
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white ">
                the majority have suffered alteration in some form
              </p>
            </div>
            <div className="flex gap-5 flex-col md:flex-row lg:flex-row">
              <button className="btn text-lg bg-[#ff2200] text-white">
                Discover More
              </button>
              <button className="btn text-lg btn-outline btn-accent text-white">
                Letest Projects
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-[#ff2200]">
            ❯
          </a>
        </div>
      </div>

      {/*---------Slider--------4-----------*/}
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-lg " />
        <div className="absolute rounded-lg flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#1a1919] to-[rgba(21, 21, 21)]">
          <div className="pl-12">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl  text-white font-bold">
                Affordable
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl  text-white font-bold py-3">
                Price For Car
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl  text-white font-bold">
                Servicing
              </h1>
            </div>

            <div className="py-8">
              <p className="text-xl md:text-2xl lg:text-3xl text-white ">
                Ther are many variable of passages of avilable, But
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white ">
                the majority have suffered alteration in some form
              </p>
            </div>
            <div className="flex gap-5 flex-col md:flex-row lg:flex-row">
              <button className="btn text-lg bg-[#ff2200] text-white">
                Discover More
              </button>
              <button className="btn text-lg btn-outline btn-accent text-white">
                Letest Projects
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-[#ff2200]">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
