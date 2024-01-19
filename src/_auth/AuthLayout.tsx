import Topbar from "@/components/shared/Topbar";
import { Outlet } from "react-router-dom";


const AuthLayout = () => {
  return (
    <div className="mx-auto">
      <div className="container">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
