import { FaBookmark, FaUser } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { Button } from "../ui/button";
import { PiPencilSimpleLineBold } from "react-icons/pi";

const Card = () => {
  return (
    <div className="curse-card bg-white border-light-3 border-[1px] rounded-lg hover:shadow-xl hover:border-white">
      <div className="curse-card_img-wrapper relative">
        <img
          src="/assets/card-img/1.png"
          className="w-full h-full"
          alt="card-thumbnail"
        />
        <div className="curse-card_name-yellow text-[12px] px-[6px] py-[4px] rounded-[6px] bg-yellow text-white absolute top-4 left-3">Veb dizayn</div>
        <button className="w-[35px] h-[35px] flex items-center justify-center bg-primary-green text-light-3 rounded-md curse-card-save absolute top-3 right-3">
          <FaBookmark />
        </button>
      </div>
      <div className="curse-card-text flex flex-col p-4 pb-6">
        <h3 className="h3-title-joss w-full text-[24px]">
          Figma PRO darslari. UI/UX Dizayn
        </h3>
        <p className="p-ghost-joss w-full items-center flex leading-[155%] mt-3">
          Veb/Mobile dasturlar uchun UI/UX chizishni o’rganamiz
        </p>

        <div className="flex items-center justify-center mt-3 gap-2">
          <HiUserGroup className="text-2xl text-primary-green" />
          <p className="p-ghost-joss w-full items-center flex leading-[175%]">
            458 foydalanuvchilar
          </p>
        </div>

        <div className="flex items-center justify-center mt-3 gap-2">
          <FaUser className="text-2xl text-primary-green" />
          <p className="p-ghost-joss w-full items-center flex leading-[175%]">
            Mentor: Muhammadkarim T.
          </p>
        </div>

        <Button className="shad-button_card mt-4">
          <PiPencilSimpleLineBold /> Ro’yxatdan o’tish
        </Button>
      </div>
    </div>
  );
};

export default Card;
