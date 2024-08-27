import { Outlet } from "react-router";
import NavBar from "./NavBar";

const LayOut = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default LayOut;
