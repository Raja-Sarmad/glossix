import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import {
  Benefits,
  HowItWorks,
  Offer,
  Reviews,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Reviews />
        <Offer />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
