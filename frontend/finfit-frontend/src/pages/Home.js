import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import Footer from "../components/Footer";
import Purpose from "../components/Home/Purpose";
import Features from "../components/Home/Features";
import Testimonial from "../components/Home/Testimonials";
import LoginForm from "../components/LoginForm";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Purpose />
      <Features />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Home;
