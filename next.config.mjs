'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Header } from './components/header'
import { SkillProgress } from './components/skill-progress'
import { ProjectCard } from './components/project-card'
import { ContactForm } from './components/contact-form'
import { EducationCard } from './components/education-card'

const skills = [
  { name: 'UI Design', percentage: 95 },
  { name: 'UX Research', percentage: 90 },
  { name: 'Wireframing', percentage: 85 },
  { name: 'Prototyping', percentage: 90 },
  { name: 'User Testing', percentage: 85 },
  { name: 'HTML/CSS', percentage: 90 },
  { name: 'JavaScript', percentage: 85 },
  { name: 'React', percentage: 80 },
]

const projects = [
  {
    id: 1,
    title: 'Smoothie Bliss',
    description: 'A vibrant smoothie ordering website with a 3D carousel feature for an interactive and colorful user experience.',
    imageUrl: 'https://i.imgur.com/dQvlF1L.jpeg',
    link: 'https://www.figma.com/proto/6fek2y4bAmJ60KohB0uuwW/smoothie?node-id=0-1&t=93pwJeiY0OsPOuHb-1'
  },
  {
    id: 2,
    title: 'Wanderlust Planner',
    description: ' travel planning calendar app with a hovering animation to simplify organizing trips efficiently',
    imageUrl: 'https://i.imgur.com/yRCtgPc.jpeg',
    link: 'https://www.figma.com/proto/6H7s07uDcT49Np6B3W9iVA/calender?t=93pwJeiY0OsPOuHb-1'
  },
  {
    id: 3,
    title: 'Pizza Slice Express',
    description: 'An engaging pizza ordering website with a dynamic spinner animation for order status updates.',
    imageUrl: 'https://i.imgur.com/wQbC952.jpeg',
    link: 'https://www.figma.com/proto/sb1AyMypQwLyrLXZqpFjkz/Untitled?node-id=0-1&t=6cxzPemOM1xUNHHc-1'
  },
  {
    id: 4,
    title: 'Shoe Showcase 360',
    description: 'A sleek website for exploring shoe models with image slider animations for a seamless browsing experience',
    imageUrl: 'https://i.imgur.com/6dX5Ypz.jpeg',
    link: 'https://www.figma.com/proto/JoennKkQHWVYR7DeBVCt8h/carddrag?t=6cxzPemOM1xUNHHc-1'
  },
  {
    id: 5,
    title: 'Anime Dimensions',
    description:'An anime character website featuring stunning parallax animations to bring characters to life.',
    imageUrl: 'https://i.imgur.com/7YoY5Bc.jpeg',
    link: 'https://www.figma.com/proto/AvOK28SituZvc91zvhUY1o/Untitled?t=93pwJeiY0OsPOuHb-1'
  },
  {
    id: 6,
    title: 'Spotify 2.0',
    description: 'A modern and visually appealing redesign of the Spotify app with enhanced navigation and interactive elements',
    imageUrl: 'https://i.imgur.com/Nr71f5d.png',
    link: 'https://www.figma.com/proto/vxxVmhmHRkCqfbfJAebWD2/spotify?t=6cxzPemOM1xUNHHc-1'
  },
  {
    id: 7,
    title: 'Daily Muse : Magazine Spotlight',
    description: 'A magazine-style website featuring the portrait of the day with elegant layouts and curated highlights.',
    imageUrl: 'https://i.imgur.com/So7RXaq.png',
    link: 'https://www.figma.com/proto/3PUpWit3pdcG3gMChMYR81/cardhover?t=6cxzPemOM1xUNHHc-1'
  },
  {
    id: 8,
    title: 'Lunar Odyssey',
    description: 'An interactive lunar exploration website offering a captivating journey through moon phases and facts.',
    imageUrl: 'https://i.imgur.com/F2k2xyp.png',
    link: 'https://www.figma.com/proto/dOXauATVQekCDN1RuZjLcu/Lunar-Effect?t=93pwJeiY0OsPOuHb-1'
  },
  {
    id: 9,
    title: 'WakeEase: Alarm Setting App',
    description: 'An intuitive alarm setting app with sleek time picker animations and customizable alarm tones.',
    imageUrl: 'https://i.imgur.com/MeelsSZ.png',
    link: 'https://www.figma.com/proto/nLowJ6ZecgtPtQ13DJjLwH/timepicker?t=93pwJeiY0OsPOuHb-1'
  },
]

const stats = [
  { label: 'Experience', value: '1 Y.' },
  { label: 'Project Completed', value: '10+' },
  { label: 'Happy Client', value: '20+' },
]

const education = [
  {
    degree: 'Bachelor of Engineering in Electronics and Communication ',
    institution: 'Kongu Engineering College ,Erode',
    year: '2022 - 2026',
    description: 'Focused on software engineering, Website Designing, data structures, and algorithms. Participated in various hackathons and coding competitions.'
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Malar Matriculation Higher Secondary School , Namakkal',
    year: '2020 - 2022',
    description: 'Completed higher secondary education with a focus on Mathematics, Physics, Chemistry and Biology.'
  }
]

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef(null)

  return (
    <div className="min-h-screen bg-gray-100" ref={containerRef}>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8 md:px-8">
        {/* About Section */}
        <section id="about" className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
              Hello, I'm<br />
              <span className="text-purple-600">Tharanya Subramani</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              I'm a Freelance <span className="text-purple-600">UI/UX Designer</span> and{' '}
              <span className="text-purple-600">Developer</span> based in Tamil Nadu, India.
              I strive to build immersive and beautiful web applications through
              carefully crafted code and user-centric design.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Say Hello!
            </motion.button>
          </motion.div>
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="https://i.imgur.com/5cPb8xA.jpg"
                alt="Tharanya Subramani"
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -20 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-purple-600 font-bold">Hello!</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white bg-opacity-20 rounded-xl p-6 text-center shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-3xl font-bold mb-2 text-purple-600">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillProgress name={skill.name} percentage={skill.percentage} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <EducationCard key={index} {...edu} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Get in Touch</h2>
          
          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            <motion.a
              href="mailto:tharanyasubramani5@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-800">Email</span>
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/tharanya-subramani-478258259/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-gray-800">LinkedIn</span>
            </motion.a>
            
            <motion.a
              href="https://github.com/TharanyaSubramani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-gray-800">GitHub</span>
            </motion.a>
            
            <motion.a
              href="https://dribbble.com/TharanyaSubramani?onboarding=true&designer=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
              </svg>
              <span className="text-gray-800">Dribbble</span>
            </motion.a>

            <motion.a
              href="https://www.behance.net/tharanytharany"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
              </svg>
              <span className="text-gray-800">Behance</span>
            </motion.a>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Send Me a Message</h3>
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  )
}
