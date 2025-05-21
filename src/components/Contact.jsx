import { MdOutlineMail } from "react-icons/md";

import { LuPhone } from "react-icons/lu";

const Contact = () => {
  return (
    <div className="-50 py-30">
      <div className="mx-auto max-w-7xl" id="contact">
        <h3 className="text-center text-2xl text-bold tracking-wider text-sky-700 pb-8 md:text-3xl">
          Contact
        </h3>
        <p className="text-center py-8 tracking-wide px-8 md:text-lg">
          Une question à nous poser ? Nous serions ravis de vous entendre.
        </p>
        <div className="grid grid-cols-2 text-center">
          <p className="text-center pb-4 tracking-wide px-8 md:text-lg">
            <a href="mailto:entfreydiercarrelage@orange.fr">
              <MdOutlineMail className="text-sky-700 h-10 w-10 inline-grid cursor-pointer hover:text-sky-500 duration-300" />
              <h5 className="pt-3">Envoyez-nous un email</h5>
            </a>
          </p>

          <p className="text-center pb-4 tracking-wide px-8 md:text-lg">
            <a href="tel:+33-6-82-68-73-88">
              <LuPhone className="text-sky-700 h-10 w-10 inline-grid cursor-pointer hover:text-sky-500 duration-300" />
              <h5 className="pt-3">Applez-nous</h5>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
