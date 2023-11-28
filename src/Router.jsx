import { createBrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Projects from "./Components/Projects";
import SideBar from "./Components/SideBar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><SideBar /><Home /></>,
  },
  {
    path: "about",
    element: <><SideBar /><About /></>,
  },
  {
    path: "project",
    element: <><SideBar /><Projects /></>,

  },
  {
    path: "contact",
    element: <><SideBar /><Contact /></>,

  },
  {
    path: "skills",
    element: <><SideBar /><Skills /></>,

  },
]);

export default router;
