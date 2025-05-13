const Footer = () => {
  return (
    <section>
      <div className="mx-auto py-8 px-8 bg-sky-900 grid md:grid-cols-2">
        <article className="">
          <p className="text-2xl font-bold text-sky-500">
            FREYDIER <span className="text-sky-50">Carrelage</span>
          </p>
          <p className="text-sky-50 font-bold">Votre artisan carreleur</p>
          <p className="text-sky-100 grid">Disponible 10h00 - 20h00</p>
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
      <div className="bg-sky-950">
        <div className="flex justify-center gap-2 text-sky-50">
          <h5>Created by </h5>
          <a href="https://jenni-le-cure.netlify.app"> jennimmartin</a>
          <h5>
            | &copy;{""}
            {new Date().getFullYear()}
          </h5>
        </div>
      </div>
    </section>
  );
};
export default Footer;
