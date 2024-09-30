import { Link, useNavigate } from "react-router-dom";
import register from "../../assets/images/register/register1.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext);
  //-------Navigate---------
  const navigate = useNavigate()
  
  const hendelRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    //---------Creates---A---New---User--------
    createUser(email, password)
    .then(result => {
      console.log(result.user)
      //---------Navigate---by----Home---page----
      navigate("/")
    })
    .then(error => {
      console.log(error)
    })
  };
  return (
    <div>
      <div className="container m-auto">
        <div className="flex items-center gap-10 flex-col lg:flex-row py-16">
          {/*------------Stape--------1--------*/}
          <div className="w-full">
            <img
              src={ register}
              className="w-full rounded-lg"
            />
          </div>
          {/*------------Stape--------2--------*/}
          <div className="w-full border-2 rounded-[14px] border-[#ff2200]">
            <div className="card bg-slate-200 w-full ">
              <form onSubmit={hendelRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl text-black">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="input input-bordered text-black bg-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl text-black">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="input input-bordered text-black bg-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl text-black">Password</span>
                  </label>
                  <input
                    type="Text"
                    name="password"
                    placeholder="Enter Your Password"
                    className="input input-bordered text-black bg-white"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#ff2200] border-0 text-xl text-white">
                    Register
                  </button>
                </div>

                {/* <div className="flex items-center justify-center gap-6 py-4">
                  <div className="w-full h-[1px] bg-white"></div>
                  <div className="border-2 rounded-full  ">
                    <h2
                      
                      className="text-5xl cursor-pointer text-center w-[60px] h-[60px] mt-1"
                    >
                      G
                    </h2>
                  </div>
                  <div className="w-full h-[1px] bg-white"></div>
                </div> */}
              </form>
              <p className="text-lg text-center text-black py-3">
                Dont have an account ?
                <Link to="/login" className="text-xl underline font-bold">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
