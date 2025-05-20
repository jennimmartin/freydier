import photo from "../images/photo-c.jpeg";
import photo1 from "../images/photo-bath.jpeg";
import photo2 from "../images/photo-bath-1.jpeg";
import photo3 from "../images/photo-bath-2.jpeg";
import photo4 from "../images/photo-floor.jpg";
import photo5 from "../images/photo-kitchen.jpg";
import photo6 from "../images/photo-kitchen-1.jpg";

const Gallery = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-30" id="galerie">
        <h2 className="text-center text-2xl text-bold tracking-wider text-sky-700 pb-8 md:text-3xl">
          Galerie
        </h2>
        <p className="text-center pb-8 tracking-wide px-8 md:text-lg">
          Nous pensons que nos projets passés parlent d'eux-mêmes.
        </p>
        <div className="mx-auto grid md:grid-cols-3 gap-4 p-4 max-w-[400px] md:max-w-[1000px] place-items-center">
          <img src={photo} alt="" className="rounded-md shadow-md" />
          <img src={photo1} alt="" className="rounded-md shadow-md" />
          <img src={photo2} alt="" className="rounded-md shadow-md" />
          <img src={photo3} alt="" className="rounded-md shadow-md" />
          <img src={photo4} alt="" className="rounded-md shadow-md" />
          <img src={photo5} alt="" className="rounded-md shadow-md" />
          <img src={photo6} alt="" className="rounded-md shadow-md" />
        </div>
        <p className="text-center py-8 tracking-wide px-8 md:text-lg">
          Votre projet sera-t-il le prochain à être présenté ?
        </p>
      </div>
    </div>
  );
};
export default Gallery;
