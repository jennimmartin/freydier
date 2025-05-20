import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";

const Legal = () => {
  return (
    <div className="min-h-dvh grid text-center justify-center bg-gray-100 py-20">
      <div className="items-center">
        <Link to="/">
          <GoHome className="h-20 w-20 place-self-center hover:text-gray-500 duration-300 " />
        </Link>
        <h3 className="text-center text-2xl text-bold tracking-wider text-sky-700 pb-8 md:text-3xl">
          Mentions legal
        </h3>
      </div>
    </div>
  );
};
export default Legal;
