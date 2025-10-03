const Hero = () => {
  return (
    <>
      <div
        class="w-full
            h-screen
            max-h-[48rem]
            p-24
            relative
            overflow-hidden
            block
            z-10
						
            bg-[url('https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?auto=compress&cs=tinysrgb&w=600')]
            bg-cover
            bg-no-repeat
            bg-center

            before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-r
            before:from-sky-50
            before:via-gray-950
            before:to-sky-50
            before:opacity-80
            before:z-[-5]
			"
      >
        <div className="grid pt-48 justify-items-center align-center">
          <h1 className="text-5xl text-gray-50 font-bold tracking-wider capitalize py-4 md:text-7xl">
            FREYDIER Carrelage
          </h1>
          <h2 className="text-2xl  md:text-lg lg:text-2xl text-gray-200 tracking-wider">
            Votre artisan carreleur en Tarentaise
          </h2>
        </div>
      </div>
    </>
  );
};
export default Hero;
