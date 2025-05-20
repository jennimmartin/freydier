import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section>
      <div className="mx-auto py-8 px-8 bg-sky-900 grid md:grid-cols-2">
        <article className="">
          <p className="text-3xl font-bold text-sky-500">
            FREYDIER <span className="text-sky-50">Carrelage</span>
          </p>
          <p className="text-sky-50 text-2xl">Votre artisan carreleur</p>
          <p className="text-sky-100 text-lg">Disponible 10h00 - 20h00</p>
          <div>
            <a href="https://www.facebook.com/tool.elec"></a>
          </div>
        </article>
        <div className="text-sky-50 grid md:place-items-end">
          <p>CHEF Lieu RES la Basse RES la Basse 73600 HAUTECOUR</p>
          <p>06.82.68.73.88.</p>
          <p>entfreydiercarrelage@orange.fr</p>
        </div>
      </div>
      <div className="bg-sky-950 py-1.5">
        <div className="flex justify-center gap-2 text-sky-50">
          <span className="font-bold  hover:text-sky-400 duration-300">
            <Link to="/legal">Mentions légales </Link>
          </span>

          <h5>
            | &copy;
            {new Date().getFullYear()}
          </h5>
          <h5>| créé par </h5>
          <a
            className=" hover:text-sky-400 duration-300"
            href="https://jenni-le-cure.netlify.app"
          >
            jennimmartin
          </a>
        </div>
      </div>
    </section>
  );
};
export default Footer;
