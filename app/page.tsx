import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Statement from "@/components/Statement";
import ServicesStack from "@/components/ServicesStack";
import ProductsHorizontal from "@/components/ProductsHorizontal";
import Industries from "@/components/Industries";
import Numbers from "@/components/Numbers";
import ProcessPinned from "@/components/ProcessPinned";

export default function Page() {
  return (
    <>
      <Hero />
      <Marquee />
      <Statement />
      <ServicesStack />
      <ProductsHorizontal />
      <Industries />
      <Numbers />
      <ProcessPinned />
    </>
  );
}
