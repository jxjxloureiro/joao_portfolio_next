/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillMessage,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import front from "../public/front.png";
import python from "../public/python.png";
import avatar from "../public/avatar.png";

import soon from "../public/soon.jpg";
import data from "../public/data.png";


import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">joaol_dev</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-red-500 text- to-orange-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://fuchsia-mandy-68.tiiny.site/"
                  download="cv"
                >
                  Currículo
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-red-600 font-medium dark:text-red-400 md:text-6xl">
              João Gabriel Loureiro
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Desenvolvedor Front-End
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Desenvolvedor de Front-End (Web e Mobile), independente da tecnologia,
              consigo aprender rapidamente e começar a desenvolver em um curto período de tempo.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-machado-loureiro-do-nascimento-b59790205/">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/jxjxloureiro">
                <AiFillGithub />
              </a>
              <a href="https://api.whatsapp.com/send?phone=5511976299111&text=Olá,%20joão!">
                <AiFillMessage />
              </a>

            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={avatar} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Tecnologias</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Essas são as stacks que costumo trabalhar com, porém não há impedimentos para utilizar outras tecnologias,
              na verdade, gosto muito de expandir ainda mais meu conhecimento.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={front} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Front-End (Web e Mobile)
              </h3>
              <p className="py-2">
                Desenvolvimento de telas e integrações.
              </p>
              <h4 className="py-4 text-teal-600">Stack</h4>
              <p className="text-gray-800 py-1">JavaScript/TypeScript</p>
              <p className="text-gray-800 py-1">Dart (Flutter)</p>
              <p className="text-gray-800 py-1">React Native, Reactjs, Nextjs</p>
              <p className="text-gray-800 py-1">Vue</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={python} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Back-End
              </h3>
              <p className="py-2">
                Desenvolvimento de APIs, documentação e testes de integração.
              </p>
              <h4 className="py-4 text-teal-600">Stack</h4>
              <p className="text-gray-800 py-1">Python (Django)</p>
              <p className="text-gray-800 py-1">C# (.NET Core)</p>
              <p className="text-gray-800 py-1">Swagger</p>
              <p className="text-gray-800 py-1">Postman</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={data} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Banco de dados e Deploy</h3>
              <p className="py-2">
                Modelagem de banco de dados, querys e cloud.
              </p>
              <h4 className="py-4 text-teal-600">Stack</h4>
              <p className="text-gray-800 py-1">SQL (SQL Server)</p>
              <p className="text-gray-800 py-1">Mongodb</p>
              <p className="text-gray-800 py-1">Vercel</p>
              <p className="text-gray-800 py-1">Docker</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Infelizmente, acabei não tendo o cuidado de separar alguns projetos para utilizar
              como portfolio, pois os desenvolvi para empresas, conforme for desenvolvendo meus projetos
              pessoais, os inserirei aqui.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={soon}
              />
            </div>
           
          </div>
        </section>
      </main>
    </div>
  );
}
