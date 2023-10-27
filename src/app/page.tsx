'use client';

import { EnvelopeSimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen overflow-y-scroll snap-mandatory snap-y">
      <div className="flex flex-col flex-wrap p-24 gap-6 min-h-full snap-start border-b">
        <div className="flex flex-col items-center justify-center">
          <h1 id="start" className="text-xl font-semibold">
            João Omar
          </h1>
          <h3 className="text-lg font-medium">Engenheiro de Software</h3>
        </div>
        <div className="flex flex-col gap-20 text-center">
          <p>
            Inspirado por transformar ideias em realidade através da programação. Estou
            constantemente motivado a aprimorar minhas habilidades e enfrentar novos desafios que
            permitam-me crescer profissionalmente.
          </p>
          <div className="text-sm italic">
            O aprendizado é contínuo, e sempre haverá um próximo nível !
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-wrap gap-6 p-24 min-h-full snap-start border-b">
        <h1 id="about" className="text-xl text-center font-semibold">
          Sobre mim
        </h1>
        <div>
          Meu nome é João Omar, sou engenheiro de software com cerca de um ano de experiência na
          área. Tenho trabalhado em projetos desafiadores e emocionantes, onde pude aplicar meus
          conhecimentos em desenvolvimento de software, resolução de problemas.
        </div>
        <div>
          Minha motivação vem de ver o impacto positivo que a tecnologia pode ter no nosso
          cotidiano. Tenho orgulho em colaborar trazendo minhas ideias e soluções criativas para
          resolver problemas complexos para melhorar e otimizar o dia-dia das pessoas.
        </div>
        <div>
          Além das habilidades técnicas, valorizo a colaboração e o trabalho em equipe. Acredito que
          o desenvolvimento de software é um esforço coletivo, e estou sempre disposto a
          compartilhar conhecimento, aprender com os outros e contribuir para um ambiente de
          trabalho harmonioso e produtivo. Sempre fui uma pessoa curiosa e em constante aprendizado,
          busco me atualizar constantemente sobre as tendências e novidades do mercado para poder
          aplicar em meus projetos pessoais e profissionais.
        </div>

        <div className="flex flex-col gap-2 pt-4">
          <h3 className="font-semibold text-lg">Techs</h3>
          <span>
            TypeScript | NodeJS | NextJS | NestJS | ExpressJS | React | Postgres | MongoDB | Docker
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-6 p-24 min-h-full snap-start border-b">
        <h1 id="projects" className="text-xl text-center font-semibold">
          Projetos
        </h1>
        <ul>
          <li className="flex flex-col gap-3">
            <h3 className="font-bold">2M Manager</h3>
            <p>
              Meu primeiro e maior projeto, um gerenciador de funcionários sob medida para uma
              empresa de engenharia tercerizada. Para obter maior controle de seus funcionários foi
              socilitado um software estilo ERP/CRM para um melhor controle do fluxo de admissão e
              demissão da empresa, e serviços prestados.
            </p>
            <div>
              <a
                href="https://2meng.vercel.app"
                title="2M MANAGER"
                target="_blank"
                rel="web site"
                className="underline transition hover:text-blue-700"
              >
                Visite
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center gap-6 p-24 min-h-full snap-start border-b">
        <h1 id="contact" className="text-xl text-center font-semibold">
          Contato
        </h1>
        <div className="flex flex-col justify-around items-center h-full p-12">
          <div className="flex gap-10 justify-center items-center">
            <a href="https://linkedin.com/in/devjomar" target="_blank">
              <LinkedinLogo height={86} width={86} />
            </a>
            <a href="http://github.com/zdeicidaz" target="_blank">
              <GithubLogo height={86} width={86} />
            </a>
            <a href="mailto:joao.omarandrade2017@gmail.com">
              <EnvelopeSimple height={86} width={86} />
            </a>
          </div>
          <span className="font-semibold">Não perca tempo, entre em contato !</span>
        </div>
      </div>
    </main>
  );
}
