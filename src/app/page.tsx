import Navbar from "@/components/navbar";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import About from "@/components/about";
import Areas from "@/components/areas";
import Hero from "@/components/hero";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="">
        <Hero />
        <Areas />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
