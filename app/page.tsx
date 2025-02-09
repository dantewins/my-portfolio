import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Works from "@/components/works";
import Journal from "@/components/journal";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Works />
      <Journal />
      <Footer />
    </div>
  );
}
