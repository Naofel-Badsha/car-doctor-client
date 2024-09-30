import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
    const {_id, title, img, price} = service
  return (
    <div >
      <div className="border-2 border-[#ff2200] relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-60 rounded-xl bg-clip-border">
          <img
            src={img}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <div>
            <p className="block font-bold text-2xl">{title}</p>
            <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-[#ff2200] mt-2">Price: $:{price}</p>
            <Link to={`/servicesDetails/${_id}`}>
               <i className="fa-solid fa-arrow-right text-lg text-[#ff2200] border-2 border-[#ff2200] w-[30px] h-[30px] text-center rounded-full cursor-pointer"></i>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
