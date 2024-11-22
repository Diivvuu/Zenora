"use client";
export default function Scene2() {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Check if scrolled past 100vh
  //     if (window.scrollY > window.innerHeight) {
  //       console.log("yes");
  //       setIsActive(true);
  //     } else {
  //       console.log("not");
  //       setIsActive(false);
  //     }
  //   };

  //   // Add scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="h-[200vh] flex flex-col justify-center">
      <div className="h-[100vh]"></div>
      <div className="h-[90vh]  grid grid-cols-[0.5fr_1.5fr_1fr]  grid-rows-[1fr_1.5fr_1.5fr] gap-x-[4rem] gap-y-[4rem]">
        <div class="col-span-3 flex items-center">
          <h2
            onMouseOver={() => {
              setIsActive(true);
            }}
            onMouseLeave={() => {
              setIsActive(false);
            }}
            className="about-us"
          >
            ABOUT
          </h2>
        </div>
        <div class="">
          {" "}
          <h2
            onMouseOver={() => {
              setIsActive(true);
            }}
            onMouseLeave={() => {
              setIsActive(false);
            }}
            className="about-us"
          >
            US
          </h2>
        </div>
        <div class="bg-black rounded-custom-20 col-start-2 col-end-3 row-start-2 row-end-4 about-us-bg1 "></div>
        <div class="bg-black rounded-custom-20 about-us-bg2 "></div>
        <div class="box-5 text-block">
          {" "}
          <h3 className="lg:text-6xl">
            Luxurious Interior and Industrial Design
          </h3>
          <p>
            Modern Elegance: Designs featuring clean lines, neutral palettes,
            and high-quality materials.
          </p>
        </div>
        <div class="box-6 text-block">
          {" "}
          <h3>Our Philosophy</h3>
          <p>
            At Britto Charette, we believe in creating luxurious, personalized
            environments that reflect our clients' tastes and lifestyles.
          </p>
        </div>
      </div>
      {/* <GradientCursor isActive={isActive} /> */}
    </div>
  );
}
