import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Contact } from "../components/Contact";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Sobre o BourSorama"
        title="Abrimos nosso primeiro escritório em 1993."
      >
        Somos uma instituição financeira direta e não partilhamos as suas informações pessoais com ninguém. O nosso objetivo é conceder empréstimos de emergência a qualquer pessoa que precise de dinheiro aqui e agora. 

      <br /> A BourSorama é uma empresa norte-americana autorizada, especializada em empréstimos do tipo «payday», que opera no Utah, em Nova Iorque e no Colorado. 
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        // preTitle="Watch a video"
        title="Faça uma consulta gratuita agora mesmo"
      >
        Aperte o botão e preencha o formulário de contato para solicitar a ligação!
      </SectionTitle>

      {/* <Video videoId="fZ0D0cnR88E" /> */}

      <SectionTitle
        preTitle="Testemunhos"
        title="Eis o que os nossos clientes disseram"
      >
        {/* Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers. */}
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Perguntas frequentes">
      </SectionTitle>

      <Faq />
      <Cta />
      <Contact />
    </Container>
  );
}
