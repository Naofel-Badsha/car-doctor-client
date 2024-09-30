import feature1 from "../../../assets/icons/clock.png";
import feature2 from "../../../assets/icons/deliveryt.svg";
import feature3 from "../../../assets/icons/person.svg";
import feature4 from "../../../assets/icons/check.svg";
import feature5 from "../../../assets/icons/group.svg";
import feature6 from "../../../assets/icons/Wrench.svg";
const CoreFeature = () => {
  return (
    <div className="py-10">
      <div className="text-center mt-10 py-4">
        <h2 className="text-xl font-bold text-[#ff2200]">Core Features</h2>
        <h1 className="text-4xl font-bold py-2 text-black">Why Choose Us</h1>
        <p className="text-xl">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br></br>
          words which dont look even slightly believable.
        </p>
      </div>

      <div className="flex gap-6 items-center justify-around flex-wrap text-center mt-10">
        <div className="border-2  p-3 rounded-lg hover:bg-[#ff2200] hover:text-white cursor-pointer">
          <img className="w-24 m-auto " src={feature5} />
          <p className="font-bold">Expart Team</p>
        </div>
        <div className="border-2  p-3 rounded-lg  hover:bg-[#ff2200] hover:text-white cursor-pointer">
          <img className="h-[70px] w-16 m-auto" src={feature1} />
          <p className="font-bold">Timely Delivery</p>
        </div>

        <div className="border-2  p-3 rounded-lg  hover:bg-[#ff2200] hover:text-white cursor-pointer">
          <img className=" w-16 m-auto" src={feature3} />
          <p className="font-bold">24/7 Support</p>
        </div>

        <div className="border-2  p-3 rounded-lg  hover:bg-[#ff2200] hover:text-white cursor-pointer">
          <img className=" w-20 m-auto" src={feature6} />
          <p className="font-bold">Best Equipment</p>
        </div>

        <div className="border-2  p-3 rounded-lg  hover:bg-[#ff2200] hover:text-white cursor-pointer">
          <img className=" w-16 m-auto" src={feature4} />
          <p className="font-bold">100% Guranty</p>
        </div>

        <div className="border-2  p-3 rounded-lg  hover:bg-[#ff2200] hover:text-white cursor-pointer">
          <img className=" w-20 m-auto" src={feature2} />
          <p className="font-bold">100% Sapurt</p>
        </div>
      </div>
    </div>
  );
};

export default CoreFeature;
