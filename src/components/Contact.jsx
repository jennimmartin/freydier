import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="bg-sky-50 py-30">
      <div className="mx-auto max-w-7xl" id="contact">
        <h3 className="text-center text-2xl text-bold tracking-wider text-sky-950 pb-8 md:text-3xl">
          Contact
        </h3>
        <p className="text-center pb-4 tracking-wide px-8 md:text-lg">
          Une question à nous poser ?
        </p>
        <div>
          <p>Envoyez-nous un email</p>
          <a href="mailtoentfreydiercarrelage@orange.fr">
            <MdOutlineMail />
          </a>
        </div>
        <div>
          <p> Applez-nous</p>
          <a href="tel:+33-6-82-68-73-88">
            <FaPhone />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
