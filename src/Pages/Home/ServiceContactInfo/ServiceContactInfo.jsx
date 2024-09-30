const ServiceContactInfo = () => {
  return (
    <div>
      <div className="flex gap-5 items-center justify-around bg-black flex-wrap py-12 rounded-lg mt-24">
        <div className="flex gap-3">
          <div>
            <i className="fa-solid fa-calendar-days text-xl text-rose-500 border-2 border-white w-10 h-10 text-center rounded-full pt-1 cursor-pointer"></i>
          </div>
          <div>
            <p className="font-bold  text-white">We are open monday-friday</p>
            <h2 className="font-bold  text-white">7:00 Am - 9:00 Pm</h2>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <i className="fa-solid fa-phone text-xl  text-rose-500 border-2 border-white w-10 h-10 text-center rounded-full pt-1 cursor-pointer"></i>
          </div>
          <div>
            <p className="font-bold  text-white">Have a ruestion?</p>
            <h2 className="font-bold  text-white">+ 01737268782</h2>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <i className="fa-solid fa-location-dot text-xl  text-rose-500 border-2 border-white w-10 h-10 text-center rounded-full pt-1 cursor-pointer"></i>
          </div>
          <div>
            <p className="font-bold text-white">Need a repair? our address</p>
            <h2 className="font-bold  text-white">Liza Street, New York</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContactInfo;
