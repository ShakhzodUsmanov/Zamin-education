import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";

type LineTextProps = {
  icons: boolean;
};

const LineText = ({ icons }: LineTextProps) => {
  return (
    <div className="relative inline-flex items-center justify-center w-full">
      <hr
        className={`w-full h-[0.5px] my-8 opacity-20 border-0 rounded ${
          icons ? "bg-light-1" : "bg-dark-blue-2"
        }`}
      />
      <div
        className={`absolute px-4 -translate-x-1/2 left-1/2 ${
          icons ? "bg-dark-blue" : "bg-white"
        }`}
      >
        {icons ? (
          <ul className="flex gap-4">
            <li className="footer-icon">
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li className="footer-icon">
              <a href="#">
                <FaTelegramPlane />
              </a>
            </li>
            <li className="footer-icon">
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li className="footer-icon">
              <a href="#">
                <FaYoutube />
              </a>
            </li>
          </ul>
        ) : (
          <p className="font-md text-light-5">yoki</p>
        )}
      </div>
    </div>
  );
};

export default LineText;
