import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";

import LegalNotice from "../components/LegalNotice";

const Legal = () => {
  return (
    <div className="min-h-dvh grid text-center justify-center bg-gray-100 py-64">
      <div className="items-center">
        <Link to="/">
          <GoHome className="h-20 w-20 place-self-center hover:text-gray-500 duration-300 " />
        </Link>
        <LegalNotice />
      </div>
    </div>
  );
};
export default Legal;
