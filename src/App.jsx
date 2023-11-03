import "./App.css";
import { BuyNow } from "./components/BuyNow/BuyNow";
import { Exploring } from "./components/Exploring/Exploring";
import { FAQs } from "./components/FAQs/FAQs";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Testimonials } from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Exploring />
      <BuyNow />
      <Testimonials />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
