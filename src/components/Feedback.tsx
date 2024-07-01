'use client';
import Image from 'next/image';

import { BiSolidQuoteAltRight } from 'react-icons/bi';

export default function Feedback() {
  return (
    <div id="feedback" className="lg:mb-28 lg:flex lg:gap-7 lg:px-10">
      <div className="bg-fuchsia-400 text-base text-white">
        <div className="flex justify-between px-4 py-6">
          <BiSolidQuoteAltRight className="text-3xl" />
          <Image
            className="rounded-full border-2 border-white bg-[#121212]"
            src="/images/erick.jpeg"
            width={60}
            height={60}
            alt="amanda"
          />
        </div>

        <p className="justify-center px-8 text-start">
          Eu tive o privilégio de trabalhar com a Amanda e posso dizer que ela é
          uma profissional excepcional e uma colega de trabalho fantástica.
          Durante nosso tempo juntos, eu a ajudei com suas tarefas de
          programação e fiquei impressionado com sua capacidade de aprendizado
          rápido e sua habilidade em lidar com tarefas complexas. A Amanda é
          altamente motivada e dedicada a produzir o melhor trabalho possível.
          Ela é proativa em identificar problemas e encontrar soluções, e sua
          comunicação clara e objetiva é fundamental para garantir que os
          projetos avancem sem problemas.
        </p>
        <p className="pl-8 pt-3 text-start text-base font-bold">
          Erick Batista Prado
        </p>
        <p className="pb-3 pl-8 text-start text-base">Senior Fullstack</p>
      </div>
      <div className="bg-sky-300 text-base text-white">
        <div className="flex justify-between px-4 py-6">
          <BiSolidQuoteAltRight className="text-3xl" />
          <Image
            className="rounded-full border-2 border-white bg-[#121212]"
            src="/images/erick.jpeg"
            width={60}
            height={60}
            alt="amanda"
          />
        </div>

        <p className="justify-center px-8 text-start">
          Eu tive o privilégio de trabalhar com a Amanda e posso dizer que ela é
          uma profissional excepcional e uma colega de trabalho fantástica.
          Durante nosso tempo juntos, eu a ajudei com suas tarefas de
          programação e fiquei impressionado com sua capacidade de aprendizado
          rápido e sua habilidade em lidar com tarefas complexas. A Amanda é
          altamente motivada e dedicada a produzir o melhor trabalho possível.
          Ela é proativa em identificar problemas e encontrar soluções, e sua
          comunicação clara e objetiva é fundamental para garantir que os
          projetos avancem sem problemas.
        </p>
        <p className="pl-8 pt-3 text-start text-base font-bold">
          Erick Batista Prado
        </p>
        <p className="pb-3 pl-8 text-start text-base">Senior Fullstack</p>
      </div>
      <div className="bg-violet-700 text-base text-white">
        <div className="flex justify-between px-4 py-6">
          <BiSolidQuoteAltRight className="text-3xl" />
          <Image
            className="rounded-full border-2 border-white bg-[#121212]"
            src="/images/erick.jpeg"
            width={60}
            height={60}
            alt="amanda"
          />
        </div>

        <p className="justify-center px-8 text-start">
          Eu tive o privilégio de trabalhar com a Amanda e posso dizer que ela é
          uma profissional excepcional e uma colega de trabalho fantástica.
          Durante nosso tempo juntos, eu a ajudei com suas tarefas de
          programação e fiquei impressionado com sua capacidade de aprendizado
          rápido e sua habilidade em lidar com tarefas complexas. A Amanda é
          altamente motivada e dedicada a produzir o melhor trabalho possível.
          Ela é proativa em identificar problemas e encontrar soluções, e sua
          comunicação clara e objetiva é fundamental para garantir que os
          projetos avancem sem problemas.
        </p>
        <p className="pl-8 pt-3 text-start text-base font-bold">
          Erick Batista Prado
        </p>
        <p className="pb-3 pl-8 text-start text-base">Senior Fullstack</p>
      </div>
    </div>
  );
}
