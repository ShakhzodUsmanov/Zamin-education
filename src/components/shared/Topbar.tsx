import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="flex-between pt-10 pb-20 gap-5">
        <Link to="/" className="flex gap-3 items-center">
          <img src="/assets/img/logo.svg" alt="logo" width={170} height={50} />
        </Link>

        <ul className="gap-4 hidden lg:flex">
          <Link className="topbar-link" to="/">
            Bosh saxifa
          </Link>
          <Link className="topbar-link" to="/about">
            Biz haqimizda
          </Link>
          <Link className="topbar-link" to="/courses">
            Kurslar
          </Link>
        </ul>
        <ul className="flex gap-4 items-center">
          <Link
            to="/sign-in"
            className=" topbar-link flex align-middle h-full items-center"
          >
            Kirish
          </Link>
          <div className="flex align-middle border-l border-gray-300 h-9"></div>
          <Link to="/sign-up">
            <Button className="shad-button_primary w-[200px]">Ro’yxatdan o’tish</Button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
