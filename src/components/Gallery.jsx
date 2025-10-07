import photo from "../images/photo.jpeg";
import photo1 from "../images/photo1.jpeg";
import photo2 from "../images/photo2.jpeg";
import photo3 from "../images/photo3.jpeg";
import photo4 from "../images/photo4.jpeg";
import photo5 from "../images/photo5.jpeg";
import photo6 from "../images/photo6.jpeg";
import photo7 from "../images/photo7.jpeg";
import photo8 from "../images/photo8.jpeg";
import photo9 from "../images/photo9.jpeg";
import photo10 from "../images/photo10.jpeg";
import photo11 from "../images/photo11.jpeg";

// Add up to 12 photos here
const images = [
  photo,
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
];

const Gallery = () => {
  return (
    <div className="bg-gray-100">
      {/* Headings in standard max-w-7xl */}
      <div className="mx-auto max-w-7xl py-20" id="galerie">
        <h2 className="text-center text-2xl font-bold tracking-wider text-sky-700 pb-8 md:text-3xl">
          Galerie
        </h2>
        <p className="text-center pb-4 tracking-wide px-8 md:text-lg">
          Nous pensons que nos projets passés parlent d'eux-mêmes.
        </p>
      </div>

      {/* Gallery grid full-width with padding */}
      <div className="w-full px-4 pb-4">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full  overflow-hidden rounded-md shadow-md transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={img}
                alt={`projet ${index + 1}`}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom text back in max-w-7xl */}
      <div className="mx-auto pb-4 max-w-7xl">
        <p className="text-center py-8 tracking-wide px-8 md:text-lg"></p>
      </div>
    </div>
  );
};

export default Gallery;
