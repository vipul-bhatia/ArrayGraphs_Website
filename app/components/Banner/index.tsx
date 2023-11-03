'use client'
import Image from "next/image";

const Banner = () => {
  const scrolltojoinus = () => {
    const newsletterSection = document.getElementById("joinus");

    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mx-auto max-w-7xl pt-5 pb-10  px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-1 my-16">
        {/* COLUMN-1 */}
        <div className="mx-auto sm:mx-0 text-center lg:text-center">
          <div className="py-3">
            <button className="text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black">
              Arraygraphs Productions
            </button>
          </div>
          <div className="py-3">
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-darkpurple" style={{ lineHeight: '1.3' }}>
  Specialize in creating high-quality <br /> and stunning content <br /> for all platforms.
</h1>


          </div>
          <div className="my-7">
            <button onClick={scrolltojoinus} className="text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-2 md:py-5 md:px-14 rounded-full hover:bg-hoblue">
              Get Started
            </button>
          </div>
        </div>

        {/* COLUMN-2 */}
      </div>
    </div>
  );
};

export default Banner;
