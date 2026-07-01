"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "O que é um empréstimo contra o salário ?",
    answer: "Um empréstimo contra salário é um empréstimo a curto prazo para ajudá-lo a equilibrar as contas. Oferecemos empréstimos de emergência para qualquer necessidade.",
  },
  {
    question: "Como pagar o empréstimo?",
    answer: "Tudo ocorre automaticamente. Retiramos os valores a serem pagos da sua conta bancária na data de vencimento. Ou você pode efetuar o pagamento em dinheiro em uma de nossas agências.",
  },
  {
    question: "Como posso saber se fui aprovado?",
    answer:
      "Você receberá um e-mail de confirmação. Caso precisemos de mais informações, nosso especialista entrará em contato diretamente com você. ",
  },
  {
    question: "E se eu não quiser mais o empréstimo?",
    answer:
      "Você pode cancelar sua solicitação ligando para nós a qualquer momento, mas antes de receber o empréstimo. Se você receber o empréstimo pessoalmente, poderá recusá-lo diretamente em nosso escritório.",
  },
];
