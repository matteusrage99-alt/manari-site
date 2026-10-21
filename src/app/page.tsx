import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Caminhos } from "@/components/sections/Caminhos";
import { Essencia } from "@/components/sections/Essencia";
import { FaixaAmazonia } from "@/components/sections/FaixaAmazonia";
import { Portfolio } from "@/components/sections/Portfolio";
import { Personalizacao } from "@/components/sections/Personalizacao";
import { Galeria } from "@/components/sections/Galeria";
import { Idealizadores } from "@/components/sections/Idealizadores";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Caminhos />
        <Essencia />
        <FaixaAmazonia />
        <Portfolio />
        <Personalizacao />
        <Galeria />
        <Idealizadores />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
