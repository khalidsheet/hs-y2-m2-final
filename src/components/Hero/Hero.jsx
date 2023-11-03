import { useLayoutEffect } from "react";
import styles from "./Hero.module.css";
import AirpodMax from "/max.png";
import { gsap } from "gsap";

export const Hero = () => {
  useLayoutEffect(() => {
    gsap.from("#tezak", {
      opacity: 0,
      duration: 2,
      zIndex: -1,
      scale: 0.8,
    });
    gsap.to("#tezak", {
      opacity: 0.8,
      bottom: -200,
      position: "absolute",
      scale: 1,
      duration: 2,
    });
  }, []);

  return (
    <div className={styles.heroContainer}>
      <p className="text-xl text-gray-600">One of the best headphones ever!</p>
      <div id="head-line" className="text-5xl max-w-2xl font-bold text-center">
        Listen in Luxury With Our Premium AirPods Max
      </div>
      <img className={styles.heroImage} id="tezak" src={AirpodMax} alt="" />
      <div className="mt-10 flex items-center justify-center gap-x-8">
        <div className="text-3xl">$499.99</div>
        <button className={styles.mainCTA}>Buy Now</button>
      </div>
    </div>
  );
};
