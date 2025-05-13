import img from "../images/hero-left.png";
import img2 from "../images/hero-right.png";

const Hero = () => {
  return (
    <>
      <div>
        <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-3 items-center gap-8 py-12">
          <article className="hidden md:block">
            <img src={img} alt="hero" className="mx-auto h-80 lg:-96" />
          </article>
          <div className="">
            <h1 className="text-5xl text-sky-950 text-center font-bold tracking-wider capitalize py-4 md:text-7xl">
              FREYDIER Carrelage
            </h1>
            <h2 className="text-2xl text-sky-900 text-center tracking-wider">
              Votre artisan carreleur en Tarentaise
            </h2>
          </div>
          <article className="hidden md:block">
            <img src={img2} alt="" className="mx-auto h-80 lg:-96" />
          </article>
        </div>
      </div>
    </>
  );
};
export default Hero;
