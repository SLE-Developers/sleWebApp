import { HeroBanner } from "@/components/herobanner/HeroBanner";
import { NavBar } from "@/components/navbar/NavBar";
import { ServicesLanding } from "@/components/services/serviceslanding/ServicesLanding";

export default function Home() {
  return (
    <main className="">
      <HeroBanner />
      <ServicesLanding />
    </main>
  );
}
