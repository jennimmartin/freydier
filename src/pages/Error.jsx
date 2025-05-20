import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";

const Error = () => {
  return (
    <div className="min-h-dvh grid text-center justify-center bg-gray-100 py-20">
      <div className="items-center">
        <Link to="/">
          <GoHome className="h-20 w-20 place-self-center hover:text-gray-500 duration-300 " />
        </Link>

        <h1 className="text-2xl tracking-wide pt-8 text-gray-900">
          Oh non, il y a un problème, cliquez pour revenir en arrière !
        </h1>
      </div>
    </div>
  );
};
export default Error;
