const CheckOut = () => {
  const handleCheckOutSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;
    console.log(firstName, lastName, email, phone, message);

    
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
          Check Out
        </h2>
      </div>
      {/*---------------Banner--------------*/}
      <form onSubmit={handleCheckOutSubmit}>
        <div className="py-10 mt-16 bg-rose-50">
          <div className="p-10">
            {/*------------Input--------1-------*/}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              <input
                type="text"
                name="firstName"
                placeholder="Enter Your First Name"
                className="input input-bordered w-full bg-white text-black"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Enter Your Last Name"
                className="input input-bordered w-full bg-white text-black"
              />
            </div>
            {/*------------Input--------2-------*/}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mt-6">
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered w-full bg-white text-black"
              />
              <input
                type="number"
                name="phone"
                placeholder="Enter Your Phone Number"
                className="input input-bordered w-full bg-white text-black"
              />
            </div>
            <div className="mt-6">
              <textarea
                name="message"
                id=""
                placeholder="Enter Your Message"
                className="w-full h-[200px] bg-white text-black rounded-lg p-4"
              ></textarea>
            </div>
            <div className="py-4">
              <button className="btn bg-[#ff2200] border-0 w-full text-xl ">
                CheckOut
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
