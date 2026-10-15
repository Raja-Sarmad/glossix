import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import {
  Benefits,
  Facts,
  Formula,
  Process,
  Ritual,
  Science,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Science />
        <Formula />
        <Process />
        <Ritual />
        <Facts />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
