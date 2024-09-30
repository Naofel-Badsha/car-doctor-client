import person from "../../../assets/images/about_us/person.jpg";
import perts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="">
      <div className="hero  py-[100px]">
        <div className="flex flex-col gap-16 lg:flex-row">
          <div className="flex-1">
            <div className="relative">
              <img src={person} className="w-full rounded-lg  " />
              <div className="flex items-center justify-center">
                <img
                  src={perts}
                  className="w-1/2 hidden sm:block absolute  rounded-lg -mt-96 ml-48  border-4 border-sky-600"
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-[#ff2200] mt-5">About Us</h1>
            <div className="mt-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                We are qualified
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                & of experence
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                in this field
              </h1>
            </div>
            <div className="py-3">
              <p className="md:text-xl lg:text-xl">
                There are many variations of passages of Lorem Ipsum
              </p>
              <p className="md:text-xl lg:text-xl">
                available, but the majority have suffered alteration in some
              </p>
              <p className="md:text-xl lg:text-xl">
                form, by injected humour, or randomised words which don't
              </p>
              <p className="md:text-xl lg:text-xl">look even slightly believable.</p>
            </div>
            <div className="py-3">
              <p className="md:text-xl lg:text-xl">
                The majority have suffered alteration in some form, by injected
              </p>
              <p className="md:text-xl lg:text-xl">
                humour, or randomised words which don't look even slightly
              </p>
              <p className="md:text-xl lg:text-xl">believable.</p>
            </div>
            <button className=" py-2 px-6 font-bold rounded-lg text-white  bg-[#ff2200]">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
