import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingUser from "./BookingUser";
import axios from "axios";

const BookingCard = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`
  useEffect(() => {
    axios.get(url, {withCredentials: true})
    .then(res => {
      setBookings(res.data)
    })
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
  }, [url]);
 
  //-----------Booking------Delete-------- 
  const hendleBookingDelete = (_id) => {
    console.log("deleted Booking.....", _id);
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
             const remaining = bookings.filter(booking => booking._id !== _id) 
             setBookings(remaining)
            }
          });
      }
    });
  };


  //-----------Booking------Update-----&-----Confirm------ 
  const handleUpdateBookingConfirm = (_id) =>{
    console.log("Update Confirm......?", _id)
    
    fetch(`http://localhost:5000/bookings/${_id}`, {
      method: "PATCH",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({status: 'confirm'})
    })
     .then(res => res.json())
     .then(data => {
      console.log(data)
      if(data.modifiedCount > 0){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Updated Confirm",
          showConfirmButton: false,
          timer: 1500
        });
        //----update---Status----
        const remaining = bookings.filter(booking => booking._id !== _id);
        const updated = bookings.find(booking => booking._id === _id);
        updated.status = 'confirm';
        const newBookings = [updated, ...remaining];
        setBookings(newBookings)
      }
     })
  }




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
          Our Booking: {bookings.length}
        </h2>
      </div>
      {/*---------------Banner--------------*/}

      {/*----------Table-----------*/}
      <div className="py-10">
        <table className="table">
          {/*-------Table--------Head-------*/}
          <thead>
            <tr>
              <th className="text-xl text-black">Delete</th>
              <th className="text-xl text-black">Services Name</th>
              <th className="text-xl text-black">Name</th>
              <th className="text-xl text-black">Date</th>
              <th className="text-xl text-black">Email</th>
              <th className="text-xl text-black">Price</th>
              <th className="text-xl text-black">Status</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>

      {/*------------------*/}
      <div>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. totam?</p> */}
        {bookings.map((booking) => (
          <BookingUser key={booking._id} 
          booking={booking}
          hendleBookingDelete={hendleBookingDelete}
          handleUpdateBookingConfirm={handleUpdateBookingConfirm}
          ></BookingUser>
        ))}
      </div>
    </div>
  );
};

export default BookingCard;
