import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const Login = () => {
  const { logInUser} = useContext(AuthContext);
    /** 
   * -------Location------ Login Korer age Privatr Routes oala j page a
   *                       click korbo Login korer por sey page jabe
  */
    const location = useLocation();
    console.log(location.pathname)

  //-------Navigate---------
  const navigate = useNavigate()

  const hendelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    //--------SingInUser----------
    logInUser(email, password)
    .then(result => {
      const loggedInuser = result.user;
      console.log(loggedInuser)
      //--------CreatedLogedUser--------
      const user = {email}
      //-----After----Navigate----&----by----Home---page----
      // navigate(location?.state ? location?.state : "/" )
      //--------Get-----access------token---------
      axios.post('http://localhost:5000/jwt', user, {
        withCredentials: true})
      .then(res =>{
        console.log(res.data)
        if(res.data.success){
          navigate(location?.state ? location?.state : "/" )
        }
      })
    })
    .then(error => {
      console.log(error)
    })

  };

  //----------LogOut----User------


  return (
    <div>
      <div className="container m-auto">
        <div className="flex items-center gap-10 flex-col lg:flex-row py-16">
          {/*------------Stape--------1--------*/}
          <div className="w-full">
            <img
              src={login}
              className="w-full rounded-lg"
            />
          </div>
          {/*------------Stape--------2--------*/}
          <div className="w-full border-2 rounded-[14px] border-[#ff2200]">
            <div className="card bg-slate-200 w-full ">
              <form onSubmit={hendelLogin} className="card-body">
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
                  <span className="absolute ml-96 mt-14 cursor-pointer"></span>
                  <label className="label">
                    <a
                      href="#"
                      className="label-text-alt link link-hover text-lg text-black"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#ff2200] border-0 text-xl text-white">
                    Login
                  </button>
                </div>

                <div className="flex items-center justify-center gap-6 py-4">
                  <div className="w-full h-[1px] bg-[#ff2200]"></div>
                  <div className="border-2 rounded-full  ">
                    <h2  
                      className="text-5xl text-[#ff2200] cursor-pointer text-center w-[60px] h-[60px] mt-1"
                    >
                      G
                    </h2>
                  </div>
                  <div className="w-full h-[1px] bg-[#ff2200]"></div>
                </div>
              </form>
              <p className="text-lg text-center py-3 text-black">
                Dont have an account ?
                <Link to="/registation" className="text-xl underline font-bold">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
