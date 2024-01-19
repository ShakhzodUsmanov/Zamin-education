import { Outlet } from "react-router-dom";
import Topbar from "@/components/shared/Topbar";
import Footer from "@/components/shared/Fotter";

const RootLayout = () => {
  return (
    <div className="mx-auto bg-[url('/public/assets/bg/root-bg.svg')] bg-no-repeat">
      <div className="container">
        <Topbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
