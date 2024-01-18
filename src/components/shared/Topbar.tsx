import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="flex-between pt-10 pb-20 ">
        <Link to="/" className="flex gap-3 items-center">
          <img src="/src/assets/logo.svg" alt="logo" width={170} height={50} />
        </Link>

        <ul className="flex gap-4">
          <Link className="topbar-link" to="about">
            Bosh saxifa
          </Link>
          <Link className="topbar-link" to="/">
            Biz haqimizda
          </Link>
          <Link className="topbar-link" to="lessons">
            Kurslar
          </Link>
        </ul>
        <ul className="flex gap-4 items-center">
          <Link
            to="sign-in"
            className=" topbar-link flex align-middle h-full items-center"
          >
            Kirish
          </Link>
          <div className="flex align-middle border-l border-gray-300 h-9"></div>
          <Button className="shad-button_primary">Ro’yxatdan o’tish</Button>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
