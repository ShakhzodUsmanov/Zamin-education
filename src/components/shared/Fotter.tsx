import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

function Fotter() {
  return (
    <div className="footer">
      <div className="container flex flex-col justify-center items-center pt-14 pb-8 gap-10">
        <img
          src="/src/assets/logo-footer.svg"
          alt="logo"
          width={182}
          height={184}
        />
        <ul className="flex flex-col items-center justify-center gap-2 text-sm">
          <li>
            <a href="tel:+998-90-319-51-60">Telefon: +998 90 3195160</a>
          </li>
          <li>
            <a href="mailto:info@digitalgeneration.uz">
              Email: info@digitalgeneration.uz
            </a>
          </li>
        </ul>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full h-[0.5px] my-8 bg-light-2 opacity-20 border-0 rounded" />
          <div className="absolute px-4 -translate-x-1/2 bg-dark-blue left-1/2">
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
          </div>
        </div>

        <p className="text-sm">
          © 2021. Zamineducation Barcha huquqlar himoyalangan.
        </p>
      </div>
    </div>
  );
}

export default Fotter;
