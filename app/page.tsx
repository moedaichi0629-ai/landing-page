import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Works from "@/components/Works";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Profile from "@/components/Profile";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Works />
        <Stats />
        <Services />
        <Process />
        <Profile />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
