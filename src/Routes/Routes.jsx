import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServicesDetails from "../Pages/Home/Services/ServicesDetails";
import CheckOut from "../Pages/CheckOut/CheckOut";
import BookService from "../Pages/BookService/BookService";
import BookingCard from "../Pages/BookingCard/BookingCard";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registation",
        element: <Register></Register>,
      },
      {
        path: "/booking/:id",
        element: (
          <PrivateRoute>
            <BookService></BookService>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/bookingCard",
        element: (
          <PrivateRoute>
            <BookingCard></BookingCard>
          </PrivateRoute>
        ),
      },

      {
        path: "/servicesDetails/:id",
        element: <ServicesDetails></ServicesDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/checkOut/:id",
        element: <CheckOut></CheckOut>,
      },
    ],
  },
]);
export default router;
