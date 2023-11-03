import styles from "./BuyNow.module.css";

export const BuyNow = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 h-[500px] flex items-center justify-center flex-col text-center gap-5">
      <h1 className="text-4xl max-w-3xl font-[600]">
        Unleash the Future of Sound, Elevate your Audio Experience with AirPods
      </h1>
      <p>Upgrade your audio: Discover the Magic of the Music</p>
      <div className="mt-10 flex items-center justify-center gap-x-8">
        <div className="text-3xl">$499.99</div>
        <button className={styles.mainCTA}>Buy Now</button>
      </div>
    </div>
  );
};
