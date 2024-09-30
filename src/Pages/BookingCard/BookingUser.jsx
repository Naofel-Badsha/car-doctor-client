

const BookingUser = ({ booking, hendleBookingDelete, handleUpdateBookingConfirm }) => {
  const { _id, customerName, img, date, email, price, title, status } = booking;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {/*-------------row-------------*/}
            <tr>
              <th>
                <button onClick={() => hendleBookingDelete(_id)}>
                  <i className="fa-regular fa-circle-xmark text-3xl cursor-pointer text-black"></i>
                </button>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className=" h-[70px] w-[70px] rounded-md">
                      <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-black">{title}</div>
                  </div>
                </div>
              </td>
              <td className="text-lg text-black">{customerName}</td>
              <td className="text-lg text-black">{date}</td>
              <td className="text-lg text-black">{email}</td>
              <td className="text-lg text-black">{price}</td>
              <th>
                { status === 'confirm' ? 
                <span className="btn text-xl bg-sky-600 border-0 text-white">Approved</span> 
                : 
                <button onClick={() => handleUpdateBookingConfirm(_id)}
                 className="btn text-xl bg-[#ff2200] border-0 text-white">
                  Confirm
                </button>

                }
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingUser;
