import Navbar from "@/components/navbar";
import Testimonials from "@/components/testimonials";
import Blog from "@/components/blog";
import Footer from "@/components/footer";
import About from "@/components/about";
import Portfolio from "@/components/portfolio";
import Areas from "@/components/areas";
import Hero from "@/components/hero";
import TrustedBy from "@/components/trust";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="">
        <Hero />
        <Areas />
        <Portfolio />
        <About />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
