import { Header } from '../components/header'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">About Me</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="mb-4">
            Hello! I'm a passionate web developer with experience in React, Next.js, and various other modern web technologies. 
            I love creating responsive and user-friendly websites that solve real-world problems.
          </p>
          <p className="mb-4">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or enjoying outdoor activities.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside">
            <li>React</li>
            <li>Next.js</li>
            <li>JavaScript/TypeScript</li>
            <li>HTML/CSS</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
