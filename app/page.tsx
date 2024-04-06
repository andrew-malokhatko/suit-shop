import Image from "next/image";
import { Hero, AboutUs, Services, PopularProducts, Lifestyle, Subscribe } from "@/components";

export default function Home() {
  return (
    <main className="relative flex text-lg text-white font-playfair min-h-screen flex-col items-center">
      <Hero />
      <AboutUs />
      <PopularProducts/>
      <Services/>
      <Lifestyle/>
      <Subscribe/>
    </main>
  );
}
