import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { About } from "./components/pages/about/About";
import { Contact } from "./components/pages/contact/Contact";
import { LandingPage } from "./components/pages/landing/LandingPage";
import { Login } from "./components/pages/login/Login";
import { Register } from "./components/pages/registration/Register";
import { Layout } from "./components/layout/Layout";

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
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
