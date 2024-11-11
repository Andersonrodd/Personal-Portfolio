"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Menu, X } from "lucide-react";
import "./App.css";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="fixed inset-0 code-pattern pointer-events-none" />

      <header className="relative border-b border-green-900/30">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-gradient">Anderson Melo</div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>

          <div className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              Home
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              About
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              Skills
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              Projects
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Contact
            </Button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-black border-b border-green-900/30">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white w-full justify-start"
              >
                Home
              </Button>
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white w-full justify-start"
              >
                About
              </Button>
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white w-full justify-start"
              >
                Skills
              </Button>
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white w-full justify-start"
              >
                Projects
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                Contact
              </Button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hello, I'm{" "}
                <span className="highlight">
                  {"{"}
                  <span className="text-green-400">Anderson</span>
                  {"}"}
                </span>
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                I'm a passionate full-stack developer with a focus on creating
                modern and user-friendly web applications using React and
                TypeScript.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-500 hover:bg-green-900/20"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Profile
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-16 animate-fade-in-delay-1">
            <Card className="bg-zinc-900/50 border-green-900/30 mx-auto max-w-4xl overflow-hidden">
              <CardContent className="p-0">
                <pre className="text-sm md:text-base p-6 overflow-x-auto">
                  <code className="text-gray-300">
                    <span className="text-green-500">const</span> developer ={" "}
                    {"{"}
                    <br />
                    {"  "}name:{" "}
                    <span className="text-yellow-500">"Anderson Melo"</span>,
                    <br />
                    {"  "}role:{" "}
                    <span className="text-yellow-500">
                      "Full Stack Developer"
                    </span>
                    ,
                    <br />
                    {"  "}skills: [
                    <span className="text-yellow-500">"React"</span>,{" "}
                    <span className="text-yellow-500">"TypeScript"</span>,{" "}
                    <span className="text-yellow-500">".Net Core"</span>],
                    <br />
                    {"  "}experience: <span className="text-purple-500">3</span>
                    ,
                    <br />
                    {"}"}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-zinc-900/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 animate-fade-in">
              With years of experience in both 
              <span className="highlight">
                {" {front-end and back-end development}"}
              </span>
              , I bring a holistic approach to every project.
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-delay-1">
              {[1, 2, 3].map((i) => (
                <Card
                  key={i}
                  className="bg-zinc-900/50 border-green-900/30 hover:border-green-600 transition-colors"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl text-gray-400 font-bold mb-2">Project {i}</h3>
                    <p className="text-gray-400">
                    Technologies: React, TypeScript, .Net Core
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12 animate-fade-in">
              Useful <span className="highlight">{"{software}"}</span> that
              <br />
              can assist.
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 animate-fade-in-delay-1">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="p-4 bg-zinc-900/50 rounded-lg">
                  <div className="w-full h-8 bg-gray-800 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      <footer className="border-t border-green-900/30 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {["Company", "Resources", "Legal", "Support", "Platform"].map(
              (section) => (
                <div key={section}>
                  <h3 className="font-bold mb-4">{section}</h3>
                  <ul className="space-y-2">
                    {[1, 2, 3, 4].map((item) => (
                      <li key={item}>
                        <Button
                          variant="link"
                          className="text-gray-400 hover:text-white p-0 h-auto"
                        >
                          Link {item}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-green-900/30 text-center text-gray-400">
            © 2024 DevPortfolio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// 'use client'

// import { useState, useEffect } from 'react'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
// import { Github, Linkedin, Mail, Menu } from 'lucide-react'
// import './App.css'

// export default function CyberpunkPortfolio() {
//   const [greeting, setGreeting] = useState('')
//   const [skillProgress, setSkillProgress] = useState({
//     react: 0,
//     typescript: 0,
//     netCore: 0,
//   })
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   useEffect(() => {
//     const fullGreeting = "Hello, I'm Anderson Melo"
//     let i = 0
//     const intervalId = setInterval(() => {
//       if (i <= fullGreeting.length) {
//         setGreeting(fullGreeting.slice(0, i))
//         i++
//       } else {
//         clearInterval(intervalId)
//       }
//     }, 100)

//     return () => clearInterval(intervalId)
//   }, [])

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setSkillProgress({
//         react: 80,
//         typescript: 70,
//         netCore: 85,
//       })
//     }, 1000)

//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <div className="min-h-screen bg-black text-cyan-400 font-mono">
//       <div className="fixed inset-0 bg-grid-cyan-900/[0.2] bg-[size:50px_50px] pointer-events-none"></div>
//       <div className="relative">
//         <header className="container mx-auto py-6">
//           <nav className="flex justify-between items-center">
//             <h1 className="text-2xl font-bold glitch" data-text="Anderson Melo">Anderson Melo</h1>
//             <div className="hidden md:flex space-x-4">
//               <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/50">About</Button>
//               <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/50">Skills</Button>
//               <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/50">Projects</Button>
//               <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/50">Contact</Button>
//             </div>
//             <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               <Menu className="h-6 w-6" />
//             </Button>
//           </nav>
//           {isMenuOpen && (
//             <div className="md:hidden mt-4 space-y-2">
//               <Button variant="ghost" className="w-full text-left text-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/50">About</Button>
//               <Button variant="ghost" className="w-full text-left text-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/50">Skills</Button>
//               <Button variant="ghost" className="w-full text-left text-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/50">Projects</Button>
//               <Button variant="ghost" className="w-full text-left text-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/50">Contact</Button>
//             </div>
//           )}
//         </header>

//         <main className="container mx-auto px-4">
//           <section className="py-20 text-center">
//             <h2 className="text-5xl font-bold mb-4 animate-pulse">{greeting}</h2>
//             <p className="text-xl mb-8 glitch" data-text="Full-Stack Developer">Full-Stack Developer</p>
//             <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black">Explore My Work</Button>
//           </section>

//           <section className="py-20">
//             <h3 className="text-3xl font-bold mb-8 glitch" data-text="About Me">About Me</h3>
//             <p className="text-lg mb-4 neon-text">
//               I'm a passionate full-stack developer with a focus on creating modern and user-friendly web applications using React and TypeScript. With years of experience in both front-end and back-end development, I bring a holistic approach to every project.
//             </p>
//             <p className="text-lg neon-text">
//               When I'm not coding, you can find me exploring tech stuff, playing video games, or diving into the latest chapters of my favorite mangas.
//             </p>
//           </section>

//           <section className="py-20">
//             <h3 className="text-3xl font-bold mb-8 glitch" data-text="Skills">Skills</h3>
//             <div className="space-y-6">
//               <div>
//                 <p className="text-lg mb-2">React</p>
//                 <Progress value={skillProgress.react} className="h-2 bg-cyan-900 animate-pulse [&>div]:bg-cyan-400" />
//               </div>
//               <div>
//                 <p className="text-lg mb-2">TypeScript</p>
//                 <Progress value={skillProgress.typescript} className="h-2 bg-cyan-900 animate-pulse [&>div]:bg-cyan-400" />
//               </div>
//               <div>
//                 <p className="text-lg mb-2">.Net Core</p>
//                 <Progress value={skillProgress.netCore} className="h-2 bg-cyan-900 animate-pulse [&>div]:bg-cyan-400"/>
//               </div>
//             </div>
//           </section>

//           <section className="py-20">
//             <h3 className="text-3xl font-bold mb-8 glitch" data-text="Projects">Projects</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {[1, 2, 3].map((project) => (
//                 <Card key={project} className="bg-cyan-900/30 border-cyan-500/50 hover:border-cyan-400 transition-colors duration-300">
//                   <CardHeader>
//                     <CardTitle className="text-cyan-300">Project {project}</CardTitle>
//                     <CardDescription className="text-cyan-400">Placeholder web application</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-cyan-300">Technologies: React, TypeScript, .Net Core</p>
//                   </CardContent>
//                   <CardFooter>
//                     <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-900/50">View Project</Button>
//                   </CardFooter>
//                 </Card>
//               ))}
//             </div>
//           </section>

//           <section className="py-20">
//             <h3 className="text-3xl font-bold mb-8 glitch" data-text="Contact">Contact</h3>
//             <p className="text-lg mb-4 neon-text">
//               Ready to bring your ideas to life? Let's connect and create something extraordinary together.
//             </p>
//             <div className="flex space-x-4">
//               <Button variant="outline" size="icon" className="border-cyan-500 text-cyan-400 hover:bg-cyan-900/50">
//                 <Mail className="h-4 w-4" />
//               </Button>
//               <Button variant="outline" size="icon" className="border-cyan-500 text-cyan-400 hover:bg-cyan-900/50">
//                 <Github className="h-4 w-4" />
//               </Button>
//               <Button variant="outline" size="icon" className="border-cyan-500 text-cyan-400 hover:bg-cyan-900/50">
//                 <Linkedin className="h-4 w-4" />
//               </Button>
//             </div>
//           </section>
//         </main>

//         <footer className="container mx-auto py-8 text-center">
//           <p className="neon-text">&copy; 2024 Anderson Melo. All rights reserved.</p>
//         </footer>
//       </div>
//     </div>
//   )
// }
