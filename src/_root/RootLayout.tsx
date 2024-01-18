import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Topbar from "@/components/shared/Topbar";
import Footer from "@/components/shared/Fotter";

const RootLayout = () => {
  return (
    <div className="mx-auto">
      <div className="container">
        <Topbar />
        RootLayout
        <Outlet />
        <Button className="shad-button_primary">Button</Button>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
