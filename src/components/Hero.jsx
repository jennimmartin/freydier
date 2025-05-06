import img from "../images/hero.png";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center gap-x-96 py-8">
        <div className="border-2 border-solid border-red-500">
          <h1 className="text-5xl text-sky-700 font-bold tracking-wider capitalize py-4">
            Freydier Carrelage
          </h1>
          <h2 className="text-2xl tracking-wider">
            Votre artisan carreleur en tarentaise
          </h2>
        </div>
        <div className="border-2 border-solid border-red-500 hidden md:block">
          <img src={img} alt="hero" />
        </div>
      </div>
    </>
  );
};
export default Hero;
