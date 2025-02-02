import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  /** 
   * -------Location------ Login Korer age Privatr Routes oala j page a
   *                       click korbo Login korer por sey page jabe
  */
  const location = useLocation();
  console.log(location.pathname)

//-------Loading--------
  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <img
          src="https://i.ibb.co/rZKjhPz/loding-3.gif"
          className="w-[150px]"
        />
      </div>
    );
  }

//---------user---------
  if (user?.email) {
    return children;
  }
   //-------Location------&-------Navigate--------
  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoute;
