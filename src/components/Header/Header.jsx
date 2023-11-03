import { useState } from "react";
import styles from "./Header.module.css";

export const Header = () => {
  const [activeLink, setActiveLink] = useState("#home");

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="bg-white text-white h-[60px] sm:flex items-center justify-between hidden p-0">
      <div>logo</div>
      <div className={styles.navigation}>
        <ul className="flex gap-4">
          <li>
            <a
              href="#home"
              className={activeLink === "#home" ? styles.active : null}
              onClick={() => handleActiveLink("#home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={activeLink === "#product" ? styles.active : null}
              href="#product"
              onClick={() => handleActiveLink("#product")}
            >
              Product
            </a>
          </li>
          <li>
            <a
              className={activeLink === "#blog" ? styles.active : null}
              href="#blog"
              onClick={() => handleActiveLink("#blog")}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className={activeLink === "#about-us" ? styles.active : null}
              href="#about-us"
              onClick={() => handleActiveLink("#about-us")}
            >
              About Us
            </a>
          </li>
        </ul>
      </div>
      <div>menu</div>
    </div>
  );
};
