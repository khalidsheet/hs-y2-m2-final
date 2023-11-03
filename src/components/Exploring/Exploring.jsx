import { gsap, CSSPlugin, ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useState } from "react";
gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(ScrollTrigger);

const images = Array.from({ length: 24 }, (_, i) => {
  return `/max-images/max-${i}.png`;
});

export const Exploring = () => {
  const [activeImage, setActiveImage] = useState(1);
  const [currentFrame] = useState({ i: 1 });

  // const imagesSections = gsap.utils.toArray(".max-image");

  useLayoutEffect(() => {
    gsap.to(currentFrame, {
      i: images.length - 1,
      roundProps: "i",
      ease: "none",
      onUpdate: () => {
        if (currentFrame.i !== activeImage) {
          if (Math.ceil(currentFrame.i) === 0) {
            setActiveImage(1);
            return;
          }
          setActiveImage(Math.ceil(currentFrame.i) + 1);
        }
      },
      scrollTrigger: {
        start: "26% center",
        target: ".stuff",
        end: "+=800",
        pin: false,
        scrub: 1,
      },
    });

    gsap.from(".animation", {
      rotate: -10,
      y: -400,
      opacity: 0,
      scale: 0.9,
      scrollTrigger: {
        trigger: ".stuff",
        start: "top center",
        end: "bottom center",
        scrub: 2,
      },
    });

    gsap.to(".animation", {
      rotate: 10,
      y: 20,
      opacity: 1,
      scale: 1.2,
      scrollTrigger: {
        trigger: ".stuff",
        start: "top center",
        end: "bottom center",
        scrub: 2,
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="stuff px-12 sm:p-0 w-full h-[1200px] bg-black  flex items-center justify-center flex-col gap-y-40 overflow-hidden">
        <h2 className="text-white text-5xl max-w-[800px] text-center">
          Exploring the world best AirPods, Unleash true wireless freedom.
        </h2>
        <div className="animation overflow-hidden">
          <img
            loading="eager"
            src={`/max-images/max-${currentFrame.i}.png`}
            className=" w-[2200px] sm:w-[1200px]  max-image"
          />
        </div>
      </div>
    </>
  );
};
