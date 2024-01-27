import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { About } from "./components/pages/about/About";
import { Contact } from "./components/pages/contact/Contact";
import { LandingPage } from "./components/pages/landing/LandingPage";
import { Login } from "./components/pages/login/Login";
import { Register } from "./components/pages/registration/Register";
import { Layout } from "./components/layout/Layout";
import { Members } from "./components/pages/members/Members";
import { Gallery } from "./components/pages/gallery/Gallery";
import { Events } from "./components/pages/events/Events";
import { BeWithUs } from "./components/pages/be with us/BeWithUs";
import { Upcoming } from "./components/pages/events/upcoming/Upcoming";
import { Donate } from "./components/pages/be with us/donate/Donate";
import { Plans } from "./components/pages/be with us/membership plans/Plans";
import { Admin } from "./components/admin/Admin";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <LandingPage />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "events",
          element: <Events />,
        },
        {
          path: "upcomingEvents",
          element: <Upcoming />,
        },
        {
          path: "gallery",
          element: <Gallery />,
        },
        {
          path: "members",
          element: <Members />,
        },
        {
          path: "bewithus",
          element: <BeWithUs />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "plans",
          element: <Plans />,
        },
        {
          path: "donate",
          element: <Donate />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "sadmin",
          element: <Admin />,
        },
      ],
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
