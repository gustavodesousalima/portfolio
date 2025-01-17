'use client'

import { motion } from 'framer-motion'
import { JavaOriginalWordmark, SpringOriginal, ReactOriginal, NextjsOriginal, NodejsOriginal,PythonOriginal, MongodbOriginal, MysqlOriginal, AmazonwebservicesOriginalWordmark, GooglecloudPlainWordmark, DockerOriginal, GoOriginal } from 'devicons-react';
import { Github, Linkedin, Mail, ChevronDown} from 'lucide-react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ProjectCard } from './components/project-card'
import ImageProfile from "./public/profile.png"
import { AnimatedBackground } from './components/animated-background'
import { TechIcon } from './components/tech-icon'
import { fadeIn, stagger, slideIn } from './lib/animations'
import { Navbar } from './components/navbar'
import KathonImage from './public/kathonproject.png'
import LookImage from './public/lookidproject.png'
import CodeCraftImage from './public/codecraftproejct.webp'
import React from 'react';

export default function Portfolio() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  // função para pegar o ano atual e guardar e m uma variável

  const Year = new Date().getFullYear();

  const projects = [
    {
      title: "Kathon",
      description: "Plataforma que conecta jovens com empresas por meio de hackathons, focando em desenvolver habilidades e ampliar networking.",
      image: KathonImage,
      technologies: ["React.js", "Java", "Spring Boot", "MySQL"],
      demoLink: "https://kathon.tech/",
      githubLink: "https://github.com/Demoday-Kathon"
    },
    {
      title: "Look-ID",
      description: "Sistema de verificação de acesso para instituições de ensino, utilizando um cartão de identificação para autenticação prática e segura.",
      image: LookImage,
      technologies: ["React.js", "Python", "Arduino", "RFID"],
      demoLink: "https://projetouc3.github.io/frontend/",
      githubLink: "https://github.com/ProjetoUC3"
    },
    {
      title: "CodeCraft",
      description: "Jogo de memorização desenvolvido com o objetivo de combinar pares de conceitos com definições.",
      image: CodeCraftImage,
      technologies: ["React Native", "Expo", "TypeScript"],
      demoLink: "https://github.com/gustavodesousalima/MemoryGame",
      githubLink: "https://github.com/gustavodesousalima/MemoryGame"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatedBackground />
      <Navbar onNavigate={scrollToSection} />

      {/* Hero Section */}
      <section id='home' className="relative min-h-screen flex flex-col items-center justify-center">
        <motion.div
          className="text-center space-y-8"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.div
            className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-purple-500"
            variants={fadeIn}
          >
            <Image
              src={ImageProfile}
              alt="Minha foto"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.h1
            className="text-6xl md:text-8xl font-bold"
            variants={fadeIn}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500">
              Gustavo
            </span>
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-gray-300"
            variants={fadeIn}
          >
            Software Developer
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center"
            variants={fadeIn}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-gradient-to-r from-violet-600 to-fuchsia-500 text-black border-none hover:opacity-90"
            >
              <a href="https://github.com/gustavodesousalima" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xl">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-gradient-to-r from-fuchsia-500 to-orange-500 text-black border-none hover:opacity-90"
            >
              <a href="https://linkedin.com/in/gustavo-developer" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xl">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute bottom-10"
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity }}
        >
            <Button
            variant="none"
            size="iconMedium"
            onClick={() => scrollToSection('about')}
            className="text-purple-500 hover:text-purple-400"
            >
            <ChevronDown className="text-4xl" />
            </Button>
        </motion.div>
      </section>

      <section id="about" className="py-32 container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500"
            variants={fadeIn}
          >
            Sobre Mim
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="flex flex-col gap-12"
          >
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
              Olá! Bem-vindo ao meu portfólio. Me chamo Gustavo e sou desenvolvedor de software. Atualmente, estou cursando Engenharia da Computação na Univesp. Tenho uma vasta experiência em manutenção de sistemas, implementação de novas funcionalidades e gestão de infraestrutura em ambientes cloud. Minha atuação inclui configuração, monitoramento e otimização de recursos, sempre buscando a melhor performance e eficiência.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
              No momento, estou me aprofundando em inteligência artificial e machine learning. Meu objetivo é entender e aplicar as melhores técnicas para melhorar processos e produtos no dia a dia, trazendo inovação e soluções inteligentes. Sinta-se à vontade para explorar meus projetos, conhecer mais sobre meu trabalho e entrar em contato comigo para possíveis colaborações. Estou sempre aberto a novas oportunidades e desafios.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="technologies" className="py-32 container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500"
            variants={fadeIn}
          >
            Tecnologias
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="flex flex-col gap-12"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <TechIcon children={<ReactOriginal size={80}/>} name='React.JS'/>
                <TechIcon children={<NextjsOriginal size={80}/>} name='Next.js'/>
                <TechIcon children={<NodejsOriginal size={80}/>} name='Node.js'/>
                <TechIcon children={<PythonOriginal size={80}/>} name='Python'/>
                <TechIcon children={<GoOriginal size={80}/>} name='Golang'/>
                <TechIcon children={<JavaOriginalWordmark size={80}/>} name='Java'/>
                <TechIcon children={<SpringOriginal size={80}/>} name='Spring Boot'/>
                <TechIcon children={<MongodbOriginal size={80}/>} name='MongoDB'/>
                <TechIcon children={<MysqlOriginal size={80}/>} name='MySQL'/>
                <TechIcon children={<DockerOriginal size={80}/>} name='Docker'/>
                <TechIcon children={<AmazonwebservicesOriginalWordmark size={80}/>} name='AWS'/>
                <TechIcon children={<GooglecloudPlainWordmark size={80}/>} name='GCP'/>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>


      <section id="projects" className="py-32 container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500"
            variants={fadeIn}
          >
            Projetos
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeIn}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="contact" className="py-32 container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500"
            variants={fadeIn}
          >
            Contato
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={fadeIn}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20 space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Vamos Conversar!</h3>
              <p className="text-gray-300">
                Estou sempre aberto a novas oportunidades e colaborações.
                Entre em contato através dos canais abaixo:
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:gustavdesousalima@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-fuchsia-400 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                  gustavdesousalima@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/gustavo-developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-fuchsia-400 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/gustavodesousalima"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-fuchsia-400 transition-colors"
                >
                  <Github className="h-6 w-6" />
                  GitHub
                </a>
              </div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
              <motion.div
                className="h-full flex items-center justify-center text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👋
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
        <p>{Year} by Gustavo de Sousa Lima</p>
      </footer>
    </div>
  )
}
