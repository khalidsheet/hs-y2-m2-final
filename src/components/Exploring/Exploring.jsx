import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

export const Exploring = () => {
  const images = Array.from({ length: 24 }, (_, i) => i + 1);
  const imagesSections = gsap.utils.toArray(".max-image");

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(imagesSections, {
      xPercent: 300 * (imagesSections - 1),
      scrollTrigger: {
        trigger: ".animation",
        start: "top center",
        end: () => "+=" + document.querySelector(".animation").offsetHeight,
        scrub: true,
        pin: true,
        markers: true,
      },
      scale: 2,
      duration: 1,
      display: "block",
    });
  }, [imagesSections]);

  return (
    <>
      <div className="stuff w-full h-[1500px] bg-red-100 flex items-center justify-center">
        <div className="animation overflow-hidden">
          {images.map((id) => {
            return (
              <img
                key={id}
                src={`/max-images/max-${id}.png`}
                data-image={id}
                className="w-full bg-red-200 max-image"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
