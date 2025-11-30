import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Calculator from "@/components/Calculator";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CoolFeedback — Отзывы на Яндекс.Картах и 2ГИС</title>
        <meta
          name="description"
          content="Увеличьте доверие к вашему бизнесу. Настоящие отзывы на Яндекс.Картах и 2ГИС, которые работают на вас. Быстро. Надежно. Результативно."
        />
        <meta name="keywords" content="отзывы, яндекс карты, 2гис, продвижение бизнеса, репутация" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main className="pt-16 md:pt-20">
          <Hero />
          <Calculator />
          <WhyUs />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
