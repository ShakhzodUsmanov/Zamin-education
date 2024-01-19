import Topbar from "@/components/shared/Topbar";
import { Outlet } from "react-router-dom";


const AuthLayout = () => {
  return (
    <div className="mx-auto bg-[url('/public/assets/bg/auth-bg.svg')] bg-cover bg-center">
      <div className="container">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
