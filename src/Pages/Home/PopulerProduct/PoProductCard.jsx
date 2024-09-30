const PoProductCard = ({populerProduct}) => {
    const {image, part_name, price} = populerProduct
  return (
    <div>
      {/*--------Card------1---------*/}
      <div className="relative flex flex-col  border-2 border-[#ff2200] text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
        <div className="relative flex justify-center items-center mx-4 mt-4 overflow-hidden text-gray-700 bg-slate-200 p-2 rounded-xl bg-clip-border">
          <img src={image} className="object-cover h-56" />
        </div>
        <div className="p-6">
          <div className="text-center py-2">
            <i className="fa-solid fa-star text-xl text-orange-500"></i>
            <i className="fa-solid fa-star text-xl text-orange-500 ml-1"></i>
            <i className="fa-solid fa-star text-2xl text-orange-500 ml-1"></i>
            <i className="fa-regular fa-star-half-stroke text-xl text-orange-500 ml-1"></i>
            <i className="fa-regular fa-star-half-stroke text-xl text-orange-500 ml-1"></i>
          </div>
          <div className="mb-2">
            <p className=" font-bold text-2xl  text-blue-gray-900 text-center">
              {part_name}
            </p>
            <p className="font-bold text-xl antialiased  text-[#ff2200] text-center mt-1">
             $: {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoProductCard;
