'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

interface NavbarProps {
  onNavigate: (id: string) => void
}

export function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-purple-500/20 ${isOpen ? 'bg-black' : 'bg-black-50'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
            <Button
              variant="none"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <Image src="/circle-x.svg" alt="Close menu" width={24} height={24} className="h-8 w-8 text-white ml-auto" /> : <Image src="/align-justify.svg" alt="Close menu" width={24} height={24} className="h-8 w-8 text-white ml-auto" />}
            </Button>
          </div>
            <div className={`flex-col md:flex-row md:flex items-center justify-center h-16 gap-4 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
            {[
              { label: 'Home', id: 'home' },
              { label: 'Sobre', id: 'about' },
              { label: 'Tecnologias', id: 'technologies' },
              { label: 'Projetos', id: 'projects' },
              { label: 'Contato', id: 'contact' }
            ].map((item) => (
              <Button
              key={item.id}
              variant="ghost"
              className="font-sans hover:text-white hover:bg-purple-500/20 text-base"
              onClick={() => {
                onNavigate(item.id)
                setIsOpen(false)
              }}
              >
              {item.label}
              </Button>
            ))}
            </div>
            <style jsx>{`
            @media (max-width: 768px) {
              .flex-col {
              position: fixed;
              top: 4rem;
              left: 0;
              right: 0;
              background-color: rgb(0, 0, 0);
              backdrop-blur: sm;
              border-bottom: 1px solid rgba(128, 0, 128, 0.2);
              padding: 1rem;
              width: 100%;
              height: 40vh;
              }
            }
            `}</style>
        </div>
      </div>
    </motion.nav>
  )
}
