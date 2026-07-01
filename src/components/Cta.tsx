import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Por que nos escolher ?
          </h2>
          <br />
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
          Rápido, confiável e seguro. Obtenha o empréstimo que você precisa sem complicações. Nossa equipe está pronta para ajudá-lo a alcançar seus objetivos financeiros.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          {/* <a
            href="https://github.com/web3templates"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Download for Free
          </a> */}
          {/* <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener"
               className="inline-flex py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-15 lg:py-5 ">
                <svg
                  role="img"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.768.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.787-1.48-1.76-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.075-.792.372s-1.04 1.016-1.04 2.479 1.065 2.875 1.214 3.074c.149.198 2.099 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.004 2.003a9.943 9.943 0 0 0-8.505 15.117L2 22l5.01-1.313a9.945 9.945 0 1 0 4.994-18.684"/>
                </svg>
                <span> Consulta gratuita</span>
              </a> */}

              {/* <a
  href="https://wa.me/1234567890"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-2 lg:px-5 lg:py-5 hover:shadow-md transition"
>
  <svg
    role="img"
    width="24"
    height="24"
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>WhatsApp</title>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.768.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.787-1.48-1.76-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.075-.792.372s-1.04 1.016-1.04 2.479 1.065 2.875 1.214 3.074c.149.198 2.099 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.004 2.003a9.943 9.943 0 0 0-8.505 15.117L2 22l5.01-1.313a9.945 9.945 0 1 0 4.994-18.684"/>
  </svg>

  <span>Consultation gratuite</span>
</a> */}
        </div>
      </div>
    </Container>
  );
};
