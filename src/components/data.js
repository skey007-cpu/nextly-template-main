import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Por onde começar?",
  desc: "Obter um empréstimo é simples e rápido. Comece por preencher o formulário de pedido, fornecendo as informações solicitadas e os documentos necessários. ",
  image: benefitOneImg,
  bullets: [
    {
      title: "Preencha o formulário",
      desc: "Preencha o formulário abaixo, forneça todas as informações e concorde com nossa Política de Privacidade.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Processando a solicitação",
      desc: "Vamos verificar seus dados pessoais e a solicitação. Escolha como deseja receber o empréstimo: em dinheiro ou no cartão.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Obter um empréstimo",
      desc: "Entraremos em contato com você em breve para discutir a melhor opção de empréstimo e as condições. Em seguida, você receberá o dinheiro.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Opções disponíveis",
  desc: "Escolha a solução que melhor se adapta às suas necessidades. Oferecemos várias opções de empréstimo adequadas à sua situação, com condições claras e um processo de candidatura simples e rápido.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Empréstimo ideal (de US$ 500 a US$ 1.500)",
      desc: "A taxa de juro é de 1,6 % para uma transação online com cartão de débito, com um prazo de 61 a 90 dias",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Valor máximo do empréstimo (de US$ 1.500 a US$ 5.000)",
      desc: "A taxa de juro é de 1,8 % para uma transação fora de linha (offline), efetuada em dinheiro ou com cartão de débito, com um prazo de 30 a 90 dias.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Empréstimo para estudantes (de US$ 500 a US$ 1.500)",
      desc: "A taxa de juro é de 1,2 % para transações efetuadas em balcão ou online, pagas em dinheiro ou com cartão de débito, com um prazo de 20 a 90 dias.",
      icon: <SunIcon />,
    },
    {
      title: "Empréstimo BIG (de US$ 5.000 a US$ 10.000)",
      desc: "A taxa de juro é de 12 %. O requerente deve ter uma pontuação de crédito mínima de 600 e comprovar um rendimento anual de, pelo menos, 400 000 USD. Os fundos ficam geralmente disponíveis no prazo de 48 horas após a aprovação do pedido.",
      icon: <FaceSmileIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
