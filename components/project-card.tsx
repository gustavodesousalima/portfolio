'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData | string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  demoLink,
  githubLink
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
        <CardContent className="p-0">
          <div className="relative overflow-hidden">
            {typeof image === 'string' ? (
              <motion.img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
                animate={{
                  scale: isHovered ? 1.1 : 1
                }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <motion.div
                className="w-full h-48"
                animate={{
                  scale: isHovered ? 1.1 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image}
                  alt={title}
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            )}
            <motion.div
              className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0"
              animate={{
                opacity: isHovered ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex gap-4">
                <Button variant="secondary" size="sm" asChild>
                  <a href={demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                </Button>
                <Button variant="secondary" size="sm" asChild>
                  <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}