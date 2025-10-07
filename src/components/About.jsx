import img from "../images/img.jpeg";
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";

// Add up to 3 photos here
const images = [img, img1, img2];

const About = () => {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-2xl font-bold tracking-wider text-sky-700 pb-8 md:text-3xl">
          Qui sommes-nous ?
        </h2>
        <p className="text-center pb-4 tracking-wide px-8 md:text-lg">
          Freydier Carrelage est basé à Hautecour depuis 2001. Nous sommes
          passionnés par la qualité du carrelage et du dallage pour les
          particuliers et les entreprises de toute la Tarentaise et au-delà.
        </p>
        <p className="text-center pb-4 tracking-wide px-8 md:text-lg">
          Nous avons l'habitude de travailler pour les collectivités locales,
          les professionnels, les architectes, les bureaux d'études, les
          particuliers et les copropriétés, en posant des carrelages, des
          faïences et des mosaïques et en traitant l'étanchéité des sols
          (hydrofuge et oléofuge).
        </p>
        <p className="text-center pb-4 tracking-wide  px-8 md:text-lg">
          Si les carreaux et les dallages font sensation, nous sommes conscients
          de l'importance d'un bon travail préparatoire.
        </p>
        <p className="text-center pb-4 tracking-wide px-8 md:text-lg">
          La perfection est au cœur de notre travail et nous avons développé un
          sens aigu du détail au cours des 24 dernières années.
        </p>
        <p className="text-center pb-8 tracking-wide px-8 md:text-lg">
          Nous prenons soin de votre projet à chaque étape.
        </p>
      </div>
      <div className="w-full px-4 py-4">
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
      <div className="mx-auto py-4 max-w-7xl">
        <p className="text-center py-8 tracking-wide px-8 md:text-lg">
          Votre projet sera-t-il le prochain à être présenté ?
        </p>
      </div>
    </div>
  );
};
export default About;
