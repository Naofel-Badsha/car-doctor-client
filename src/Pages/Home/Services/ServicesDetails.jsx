import { Link, useLoaderData } from "react-router-dom";

const ServicesDetails = () => {
  const servicesLodedData = useLoaderData();
  const {img, title, description, facility } = servicesLodedData
  return (
    <div>
      {/*---------------Banner--------------*/}
      <div className="py-5">
        <div className="relative">
          <img
            className="w-full h-[400px] object-cover opacity-80 rounded-lg"
            src="https://i.ibb.co/dWgWB6p/ser-1.jpg"
          />
        </div>
        <h2 className="absolute -mt-[200px] ml-[100px] text-4xl text-white">
          Services Details
        </h2>
      </div>
      {/*---------------Banner--------------*/}

      {/*---------------Main--------------*/}
      <div>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-4 py-7">
          {/*--------Right--------Side-------Start---------*/}
          <div className="md:col-span-3  w-full ">
            {/*---------Section---------1--------*/}
            <div>
              <img
                className="w-full h-[350px] object-cover opacity-90 rounded-lg"
                src={img}
              />
              <h1 className="text-xl md:text-3xl lg:text-4xl py-8 text-black">
                Unique Car {title}
              </h1>
              <p className="text-lg">{description}</p>
            </div>

            {/*---------Section---------2--------*/}
            <div>
              <div className="grid gap-6 md:grid-cols-2 py-8">
                {/*----------1--------*/}
                <div className="border-t-[3px] border-[#ff2200] rounded-lg p-4 shadow-xl bg-rose-50">
                  <h4 className="text-2xl text-black py-2">
                  Instant Car Services
                  </h4>
                  <p className="text-lg ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius veniam nostrum dolores nemo quas. Minima ullam, veniam,
                    nesciunt quae dolore animi blanditiis deserunt, ea esse
                    dolorum
                  </p>
                </div>
                {/*----------2--------*/}
                <div className="border-t-[3px] border-[#ff2200] rounded-lg p-4 shadow-xl bg-rose-50">
                  <h4 className="text-2xl text-black py-2">
                    Instant Car Services
                  </h4>
                  <p className="text-lg ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius veniam nostrum dolores nemo quas. Minima ullam, veniam,
                    nesciunt quae dolore animi blanditiis deserunt, ea esse
                    dolorum
                  </p>
                </div>
                {/*----------3--------*/}
                <div className="border-t-[3px] border-[#ff2200] rounded-lg p-4 shadow-xl bg-rose-50">
                  <h4 className="text-2xl text-black py-2">
                    Instant Car Services
                  </h4>
                  <p className="text-lg ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius veniam nostrum dolores nemo quas. Minima ullam, veniam,
                    nesciunt quae dolore animi blanditiis deserunt, ea esse
                    dolorum
                  </p>
                </div>
                {/*----------4--------*/}
                <div className="border-t-[3px] border-[#ff2200] rounded-lg p-4 shadow-xl bg-rose-50">
                  <h4 className="text-2xl text-black py-2">
                    Instant Car Services
                  </h4>
                  <p className="text-lg ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius veniam nostrum dolores nemo quas. Minima ullam, veniam,
                    nesciunt quae dolore animi blanditiis deserunt, ea esse
                    dolorum
                  </p>
                </div>
              </div>

              <div>
                <p className="text-lg">{description}</p>
                <h1 className="text-xl md:text-3xl lg:text-4xl py-8 text-black">
                  3 Simple Steps to Process
                </h1>
                <p className="text-lg">{description}</p>
              </div>

              <div>
                <div className="flex gap-6 flex-wrap py-6 ">
                  {/*-------------1------------*/}
                  <div className="border-2 text-center rounded-lg p-7">
                    <div
                      className="bg-[#ff2200] border-[10px]
                      w-[75px] h-[75px] rounded-full m-auto "
                    >
                      <h3 className="flex items-center justify-center py-2 text-3xl font-bold  text-white ">
                        01
                      </h3>
                    </div>
                    <h1 className="text-2xl font-bold text-black py-3">
                      Step One
                    </h1>
                    <p className="text-lg ">
                      It uses a dictionary of over 200 .
                    </p>
                  </div>
                  {/*-------------2------------*/}
                  <div className="border-2  text-center rounded-lg p-7">
                    <div
                      className="bg-[#ff2200] border-[10px]
                      w-[75px] h-[75px] rounded-full m-auto"
                    >
                      <h3 className="flex items-center justify-center py-2 text-3xl font-bold  text-white ">
                        02
                      </h3>
                    </div>
                    <h1 className="text-2xl font-bold text-black py-3">
                      Step Two
                    </h1>
                    <p className="text-lg ">
                      It uses a dictionary of over 200 .
                    </p>
                  </div>
                  {/*-------------3------------*/}
                  <div className="border-2 text-center rounded-lg p-7">
                    <div
                      className="bg-[#ff2200] border-[10px]
                      w-[75px] h-[75px] rounded-full m-auto "
                    >
                      <h3 className="flex items-center justify-center py-2 text-3xl font-bold  text-white ">
                        03
                      </h3>
                    </div>
                    <h1 className="text-2xl font-bold text-black py-3">
                      Step Three
                    </h1>
                    <p className="text-lg ">
                      It uses a dictionary of over 200 .
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-5">
                <div className="relative">
                  <img
                    className=" w-full h-[400px] object-cover opacity-80 rounded-lg"
                    src="https://i.ibb.co/dWgWB6p/ser-1.jpg"
                  />
                </div>
                <i className="fa-regular fa-circle-play  absolute  -mt-[200px] text-4xl text-white  "></i>
              </div>
            </div>
          </div>
          {/*--------Right--------Side-------End---------*/}

          {/*--------Lefe--------Side-------Start---------*/}
          <div className="col-span-1 w-full">
            <Link to={`/checkOut/${servicesLodedData._id}`}>
              <button className="btn bg-[#ff2200] border-0 w-full text-xl text-white"> CheckOut </button>
            </Link>
            <br></br>
            <br></br>
            <Link  to={`/booking/${servicesLodedData._id}`}>
              <button className="btn bg-[#ff2200] border-0 w-full text-xl text-white">Booking</button>
            </Link>
          </div>
          {/*--------Lefe--------Side-------End---------*/}
        </div>
      </div>
      {/*---------------Main--------------*/}
    </div>
  );
};

export default ServicesDetails;
