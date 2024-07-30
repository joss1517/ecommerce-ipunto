import { BsInstagram } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { TbBrandWhatsapp } from "react-icons/tb";

import "./Footer.css";



const Footer = () => {
  return (
    <div className="fContainer">
      <div className="icons">
        <img src="https://i.postimg.cc/WbsC2WCH/ipunto.png" alt="" />
        <p>ipunto09@gmail.com</p>

        <div className="redes">
          <a
            href="https:api.Whatsapp.com/send?phone=+5215633966371&text=Hola!"
            target="_blank"
          >
            <TbBrandWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100093386530753"
            target="_blank"
          >
            <FaSquareFacebook />
          </a>
          <a
            href="https://instagram.com/ipunto09?igshid=MzNlNGNkZWQ4Mg=="
            target="_blank"
          >
            <BsInstagram />
          </a>
        </div>
      </div>

      <div className="copy">
        <h3>© 2024 ipunto</h3>
      </div>

      <div className="png">
        <img src="https://i.postimg.cc/sDBSZykQ/footer.png" alt=""/>
      </div>
    </div>
  );
};

export default Footer;


