
import { useLoaderData } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";


const BookService = () => {
  const bookingLoader = useLoaderData();
  const { _id,  price, img, title } = bookingLoader;
  const {user} = useContext(AuthContext)


  const hendleBookingServices = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const ammount = form.ammount.value;
    const email = form.email.value;
    const detailes = form.detailes.value;
    const booking = {
      customerName: name,
      img,
      title,
      date,
      email,
      services_id: _id,
      price: price,
      ammount,
      detailes,
    };
    console.log(booking);

    //-------Booking------Post--------Client------
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(booking)

    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        alert('Booking SuccessFull')
      }
    })

  };
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
          Booking
        </h2>
      </div>
      {/*---------------Banner--------------*/}

      <div className="py-5">
        <h1 className="text-center text-3xl text-black">{bookingLoader.title}</h1>
      </div>

      <form onSubmit={hendleBookingServices}>
        <div className="py-10 mt-16 bg-rose-50">
          <div className="p-10">
            {/*-------------Inpot-------1----------*/}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  defaultValue={user?.name}
                  className="input input-bordered outline-0 bg-white text-black"
                />
              </div>
              <div className="form-control">
                <input
                  type="date"
                  name="date"
                  placeholder=""
                  className="input input-bordered bg-slate-300 text-black"
                />
              </div>
              <div className="form-control">
                <input
                  type="number"
                  name="ammount"
                  defaultValue={price}
                  placeholder="Due Ammaount"
                  className="input input-bordered bg-white text-black"
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="Enter Your Email"
                  className="input input-bordered bg-white text-black"
                />
              </div>
            </div>
            <div className="mt-4">
              <textarea
                className="w-full h-52 border-2 outline-0 rounded-lg mt-3 p-4 bg-white text-black"
                name="detailes"
                placeholder="Enter Your Message...?"
              ></textarea>
            </div>
            <div className="py-4">
              <button className="btn bg-[#ff2200] border-0 w-full text-xl ">
                Booking
              </button>
            </div>
          </div>
        </div>
      </form>
 
    </div>
  );
};

export default BookService;
