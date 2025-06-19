'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SimplePage() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'introduction':
        return (
          <>
            <h1 className="text-4xl font-bold mb-6">Bhargav Joshi</h1>

            

            <div className="flex items-center space-x-2 mb-4">
              <img src="https://api.iconify.design/mdi:map-marker.svg" alt="Location" className="w-5 h-5 [filter:brightness(0)_invert(1)]" />
              <p className="text-md fon">Vadodara, Gujarat</p>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="https://api.iconify.design/mdi:email.svg" alt="Email" className="w-5 h-5 [filter:brightness(0)_invert(1)]" />
              <p className="text-md fon">bhargavjoshi1237@gmail.com</p>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <img src="https://api.iconify.design/mdi:phone.svg" alt="Phone" className="w-5 h-5 [filter:brightness(0)_invert(1)]" />
              <p className="text-md fon">9327395534</p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="https://figma.com/@bhargavjoshi1" target="_blank" rel="noopener noreferrer" className="flex items-center bg-zinc-800 px-4 py-2 rounded-md hover:bg-zinc-700">
                <img src="https://api.iconify.design/logos:figma.svg" alt="Figma" className="w-5 h-5 mr-2" />
                <span>Figma</span>
              </a>
              <a href="https://github.com/bhargavjoshi1237" target="_blank" rel="noopener noreferrer" className="flex items-center bg-zinc-800 px-4 py-2 rounded-md hover:bg-zinc-700">
                <img src="https://api.iconify.design/logos:github-icon.svg" alt="GitHub" className="w-5 h-5 mr-2" style={{ filter: 'invert(1)' }} />
                <span>GitHub</span>
              </a>
              <a href="https://dribbble.com/bhargavj0shi" target="_blank" rel="noopener noreferrer" className="flex items-center bg-zinc-800 px-4 py-2 rounded-md hover:bg-zinc-700">
                <img src="https://api.iconify.design/logos:dribbble-icon.svg" alt="Dribbble" className="w-5 h-5 mr-2" />
                <span>Dribbble</span>
              </a>
              <a href="https://www.linkedin.com/in/bhargav-joshi-95a1b9194/" target="_blank" rel="noopener noreferrer" className="flex items-center bg-zinc-800 px-4 py-2 rounded-md hover:bg-zinc-700">
                <img src="https://api.iconify.design/logos:linkedin-icon.svg" alt="LinkedIn" className="w-5 h-5 mr-2" />
                <span>LinkedIn</span>
              </a>
              <a href="https://alldesigns.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center bg-zinc-800 px-4 py-2 rounded-md hover:bg-zinc-700">
                <img src="https://api.iconify.design/logos:vercel-icon.svg" alt="Vercel" className="w-5 h-5 mr-2"   />
                <span>Portfolio</span>
              </a>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 fon ">Objective</h2>
            <p className="mb-6 text-md fon">Seeking a position in the full stack development and UI / UX  field.</p>
            
             
          </>
        );
      case 'skills':
        return (
          <>
            <h1 className="text-4xl font-bold mb-8 fon ">Technical Skills</h1>
            <br />
            <div className="space-y-12 mt-4">
              {/* Frontend Technologies */}
              <div>
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl font-bold fon ">Frontend Technologies</h2>
                </div>
                <hr className="border-[#474747] mb-6" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {[{
                    name: 'HTML5',
                    icon: 'logos:html-5'
                  },
                  {
                    name: 'CSS',
                    icon: 'logos:css-3-official'
                  },
                  {
                    name: 'JavaScript',
                    icon: 'logos:javascript'
                  },
                  {
                    name: 'TypeScript',
                    icon: 'logos:typescript-icon',
                    darkBg: true
                  },
                  {
                    name: 'React.js',
                    icon: 'logos:react'
                  },
                  {
                    name: 'Next.js',
                    icon: 'logos:nextjs-icon'
                  },
                  {
                    name: 'Tailwind CSS',
                    icon: 'logos:tailwindcss-icon'
                  },
                  {
                    name: 'Flutter',
                    icon: 'logos:flutter'
                  }].map((skill) => (
                    <div key={skill.name} 
                      className={`relative w-full max-w-[200px] mx-auto h-[50px] border border-[#474747] rounded-lg group overflow-hidden hover:border-[#474747] transition-all duration-300 ${
                        skill.darkBg ? 'bg-[#161616]' : ''
                      }`}
                    >
                      {/* Shine effect borders */}
                      <div className="absolute inset-0 w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#474747] to-transparent -translate-x-[200%] group-hover:translate-x-[200%] group-hover:transition-transform group-hover:duration-[750ms] group-hover:ease-in-out"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative w-[90%] h-full flex items-center justify-evenly mx-auto">
                        <img 
                          src={`https://api.iconify.design/${skill.icon}.svg`} 
                          alt={skill.name}
                          className={`h-[45%] sm:h-[50%] lg:h-[55%] ${
                            skill.white || ['TypeScript', 'GraphQL', 'Apollo QL', 'Cassandra', 'DynamoDB', 'Cosmos DB', 'Docker', 'Kubernetes'].includes(skill.name) 
                            ? '[filter:brightness(0)_invert(1)]' 
                            : ''
                          }`}
                        />
                        <p className="text-[0.7rem] sm:text-[0.75rem] lg:text-base fon">{skill.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend Technologies */}
              <div>
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl font-bold fon ">Backend Technologies</h2>
                </div>
                <hr className="border-[#474747] mb-6" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {[{
                    name: 'Node.js',
                    icon: 'logos:nodejs-icon'
                  },
                  {
                    name: ' ',
                    icon: 'logos:express',
                    white: true
                  },
                  {
                    name: 'GraphQL',
                    icon: 'logos:graphql',
                    darkBg: true
                  },
                  {
                    name: 'Apollo QL',
                    icon: 'logos:apollostack',
                    darkBg: true
                  },
                   
                  {
                    name: 'Auth ',
                    icon: 'logos:auth0-icon',
                    white: true
                  }].map((skill) => (
                    <div key={skill.name} 
                      className="relative w-full max-w-[200px] mx-auto h-[50px] border border-[#474747] rounded-lg group overflow-hidden hover:border-[#474747] transition-all duration-300"
                    >
                      {/* Shine effect borders */}
                      <div className="absolute inset-0 w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#474747] to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-[750ms] ease-in-out"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative w-[90%] h-full flex items-center justify-evenly mx-auto">
                        <img 
                          src={`https://api.iconify.design/${skill.icon}.svg`} 
                          alt={skill.name}
                          className={`h-[55%] ${skill.white ? '[filter:brightness(0)_invert(1)]' : ''}`}
                        />
                        <p className="text-[0.7rem] sm:text-sm lg:text-base fon">{skill.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div>
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl font-bold fon ">Databases</h2>
                </div>
                <hr className="border-[#474747] mb-6" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {[{
                    name: 'PostgreSQL',
                    icon: 'logos:postgresql'
                  },
                  {
                    name: 'Redis',
                    icon: 'logos:redis'
                  },
                  {
                    name: 'Firebase',
                    icon: 'logos:firebase'
                  },
                  {
                    name: 'Cloud Firestore',
                    icon: 'logos:firebase'
                  },
                  {
                    name: 'DynamoDB',
                    icon: 'logos:aws-dynamodb'
                  },
                  {
                    name: 'Cosmos DB',
                    icon: 'logos:azure-icon'
                  },
                  {
                    name: 'Cassandra',
                    icon: 'logos:cassandra'
                  }].map((skill) => (
                    <div key={skill.name} 
                      className="relative w-full max-w-[200px] mx-auto h-[50px] border border-[#474747] rounded-lg group overflow-hidden hover:border-[#474747] transition-all duration-300"
                    >
                      {/* Shine effect borders */}
                      <div className="absolute inset-0 w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#474747] to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-[750ms] ease-in-out"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative w-[90%] h-full flex items-center justify-evenly mx-auto">
                        <img 
                          src={`https://api.iconify.design/${skill.icon}.svg`} 
                          alt={skill.name}
                          className={`h-[55%] ${skill.white ? '[filter:brightness(0)_invert(1)]' : ''}`}
                        />
                        <p className="text-[0.7rem] sm:text-sm lg:text-lg fon">{skill.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AWS Services */}
              <div>
                <div className="flex items-center mb-6">
                  <img src="https://api.iconify.design/logos:aws.svg" alt="AWS" className="w-8 h-8 mr-3" />
                  <h2 className="text-2xl font-bold fon ">AWS Services</h2>
                </div>
                <hr className="border-[#474747] mb-6" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {[{
                    name: 'AWS Lambda',
                    icon: 'logos:aws-lambda'
                  },
                  {
                    name: 'Amazon EC2',
                    icon: 'logos:aws-ec2'
                  },
                  {
                    name: 'Amazon S3',
                    icon: 'logos:aws-s3'
                  },
                  {
                    name: 'Amazon DynamoDB',
                    icon: 'logos:aws-dynamodb'
                  }].map((skill) => (
                    <div key={skill.name} 
                      className="relative w-full max-w-[200px] mx-auto h-[50px] border border-[#474747] rounded-lg group overflow-hidden hover:border-[#474747] transition-all duration-300"
                    >
                      <div className="absolute inset-0 w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#474747] to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-[750ms] ease-in-out"></div>
                      </div>
                      <div className="relative w-[90%] h-full flex items-center justify-evenly mx-auto">
                        <img 
                          src={`https://api.iconify.design/${skill.icon}.svg`} 
                          alt={skill.name}
                          className={`h-[55%] ${skill.white ? '[filter:brightness(0)_invert(1)]' : ''}`}
                        />
                        <p className="text-[0.7rem] sm:text-sm lg:text-lg fon">{skill.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Azure Services */}
              <div>
                <div className="flex items-center mb-6">
                  <img src="https://api.iconify.design/logos:azure-icon.svg" alt="Azure" className="w-8 h-8 mr-3" />
                  <h2 className="text-2xl font-bold fon ">Azure Services</h2>
                </div>
                <hr className="border-[#474747] mb-6" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {[{
                    name: 'Azure Functions',
                    icon: 'logos:azure-icon'
                  },
                  {
                    name: 'Azure Cosmos DB',
                    icon: 'logos:azure-icon'
                  }].map((skill) => (
                    <div key={skill.name} 
                      className="relative w-full max-w-[200px] mx-auto h-[50px] border border-[#474747] rounded-lg group overflow-hidden hover:border-[#474747] transition-all duration-300"
                    >
                      <div className="absolute inset-0 w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#474747] to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-[750ms] ease-in-out"></div>
                      </div>
                      <div className="relative w-[90%] h-full flex items-center justify-evenly mx-auto">
                        <img 
                          src={`https://api.iconify.design/${skill.icon}.svg`} 
                          alt={skill.name}
                          className={`h-[55%] ${skill.white ? '[filter:brightness(0)_invert(1)]' : ''}`}
                        />
                        <p className="text-[0.7rem] sm:text-sm lg:text-lg fon">{skill.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Cloud */}
              <div>
                <div className="flex items-center mb-6">
                  <img src="https://api.iconify.design/logos:google-cloud.svg" alt="Google Cloud" className="w-8 h-8 mr-3" />
                  <h2 className="text-2xl font-bold fon ">Google Cloud</h2>
                </div>
                <hr className="border-[#474747] mb-6" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {[{
                    name: 'Google Cloud Run',
                    icon: 'logos:google-cloud'
                  }].map((skill) => (
                    <div key={skill.name} 
                      className="relative w-full max-w-[200px] mx-auto h-[50px] border border-[#474747] rounded-lg group overflow-hidden hover:border-[#474747] transition-all duration-300"
                    >
                      <div className="absolute inset-0 w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#474747] to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-[750ms] ease-in-out"></div>
                      </div>
                      <div className="relative w-[90%] h-full flex items-center justify-evenly mx-auto">
                        <img 
                          src={`https://api.iconify.design/${skill.icon}.svg`} 
                          alt={skill.name}
                          className={`h-[55%] ${skill.white ? '[filter:brightness(0)_invert(1)]' : ''}`}
                        />
                        <p className="text-[0.7rem] sm:text-sm lg:text-lg fon">{skill.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DevOps & Tools */}
              <div>
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl font-bold fon ">DevOps & Tools</h2>
                </div>
                <hr className="border-[#474747] mb-6" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {[{
                    name: 'Docker',
                    icon: 'logos:docker-icon'
                  },
                  {
                    name: 'Kubernetes',
                    icon: 'logos:kubernetes'
                  }].map((skill) => (
                    <div key={skill.name} 
                      className="relative w-full max-w-[200px] mx-auto h-[50px] border border-[#474747] rounded-lg group overflow-hidden hover:border-[#474747] transition-all duration-300"
                    >
                      <div className="absolute inset-0 w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#474747] to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-[750ms] ease-in-out"></div>
                      </div>
                      <div className="relative w-[90%] h-full flex items-center justify-evenly mx-auto">
                        <img 
                          src={`https://api.iconify.design/${skill.icon}.svg`} 
                          alt={skill.name}
                          className={`h-[55%] ${skill.white ? '[filter:brightness(0)_invert(1)]' : ''}`}
                        />
                        <p className="text-[0.7rem] sm:text-sm lg:text-lg fon">{skill.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design & Others */}
              <div>
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl font-bold fon ">Design & Others</h2>
                </div>
                <hr className="border-[#474747] mb-6" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {[{
                    name: 'Figma',
                    icon: 'logos:figma'
                  },
                  {
                    name: 'Adobe XD',
                    icon: 'logos:adobe-xd'
                  }].map((skill) => (
                    <div key={skill.name} 
                      className="relative w-full max-w-[200px] mx-auto h-[50px] border border-[#474747] rounded-lg group overflow-hidden hover:border-[#474747] transition-all duration-300"
                    >
                      <div className="absolute inset-0 w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#474747] to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-[750ms] ease-in-out"></div>
                      </div>
                      <div className="relative w-[90%] h-full flex items-center justify-evenly mx-auto">
                        <img 
                          src={`https://api.iconify.design/${skill.icon}.svg`} 
                          alt={skill.name}
                          className={`h-[55%] ${skill.white ? '[filter:brightness(0)_invert(1)]' : ''}`}
                        />
                        <p className="text-[0.7rem] sm:text-sm lg:text-lg fon">{skill.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <br />
                <br />
              </div>
            </div>
          </>
        );
      case 'projects':
        return (
          <>
            <h1 className="text-4xl font-bold mb-8">Projects</h1>
            
            <div className="space-y-8">
              {/* Anime Alley */}
              <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 p-6 transition-all duration-300 hover:border-zinc-600 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-4">
                    <div className="flex items-center">
                      <div className="relative">
                        <img src="/aa.png" alt="Anime Alley" className="w-7 h-8 mr-3" />
                      </div>
                      <div className="ml-4">
                        <h2 className="text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors">Anime Alley</h2>
                        <p className="text-sm text-zinc-400">Community Platform</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 sm:ml-auto">
                      <img src="https://api.iconify.design/logos:nextjs-icon.svg" alt="Next.js" className="w-6 h-6 transition-transform group-hover:scale-110" />
                      <img src="https://api.iconify.design/logos:postgresql.svg" alt="PostgreSQL" className="w-6 h-6 transition-transform group-hover:scale-110" />
                      <img src="https://api.iconify.design/logos:firebase.svg" alt="Firebase" className="w-6 h-6 transition-transform group-hover:scale-110" />
                      <img src="https://api.iconify.design/logos:supabase-icon.svg" alt="Supabase" className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                  </div>
                  
                  <p className="text-zinc-300 leading-relaxed mb-6">
                    A comprehensive anime community platform featuring social authentication, real-time chat, user profiles, anime lists, forums, and personalized recommendations. Built with SSR for optimal SEO performance and Google search ranking.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Real-time Chat', 'Social Login', 'SSR/SEO', 'Forums', 'Recommendations'].map((feature) => (
                      <span key={feature} className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700 group-hover:border-zinc-600 transition-colors">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href="https://animealley.vercel.app/z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <span>Explore Platform</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Manga Fusion */}
              <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 p-6 transition-all duration-300 hover:border-zinc-600 hover:shadow-2xl hover:shadow-orange-500/10">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-pink-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-4">
                    <div className="flex items-center">
                      <div className="relative">
                        <img src="/mf.png" alt="Manga Fusion" className="w-8 h-8 mr-3" />
                      </div>
                      <div className="ml-4">
                        <h2 className="text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors">Manga Fusion</h2>
                        <p className="text-sm text-zinc-400">Price Comparison Engine</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 sm:ml-auto flex-wrap">
                      <img src="https://api.iconify.design/logos:nextjs-icon.svg" alt="Next.js" className="w-6 h-6 transition-transform group-hover:scale-110" />
                      <img src="https://api.iconify.design/logos:puppeteer.svg" alt="Puppeteer" className="w-6 h-6 transition-transform group-hover:scale-110" />
                      <img src="https://api.iconify.design/logos:aws.svg" alt="AWS" className="w-6 h-6 transition-transform group-hover:scale-110" />
                      <img src="https://api.iconify.design/logos:redis.svg" alt="Redis" className="w-6 h-6 transition-transform group-hover:scale-110" />
                      <img src="https://api.iconify.design/logos:express.svg" alt="Express" className="w-6 h-6 transition-transform group-hover:scale-110" style={{ filter: 'invert(1)' }} />
                      <img src="https://api.iconify.design/simple-icons:resend.svg" alt="Resend" className="w-6 h-6 transition-transform group-hover:scale-110" style={{ filter: 'invert(1)' }} />
                    </div>
                  </div>
                  
                  <p className="text-zinc-300 leading-relaxed mb-6">
                    Advanced price comparison platform for manga collections, aggregating data from major Indian retailers. Features web scraping, price tracking, email alerts, and social authentication across multiple platforms.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Price Tracking', 'Web Scraping', 'Email Alerts', 'Multi-Auth', 'SSR'].map((feature) => (
                      <span key={feature} className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700 group-hover:border-zinc-600 transition-colors">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href="https://mangafusion.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
                  >
                    <span>Compare Prices</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* 0ms */}
              <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 p-6 transition-all duration-300 hover:border-zinc-600 hover:shadow-2xl hover:shadow-green-500/10">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-teal-500/5 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-4">
                    <div className="flex items-center">
                      <div className="relative">
                        <img src="/ms.png" alt="0ms" className="w-18 h-4.5 mr-3" />
                      </div>
                      <div className="ml-4">
                        <h2 className="text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors">0ms Intelligence</h2>
                        <p className="text-sm text-zinc-400">SaaS Monitoring Platform</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 sm:ml-auto flex-wrap">
                      <img src="https://api.iconify.design/logos:aws.svg" alt="AWS" className="w-6 h-6 transition-transform group-hover:scale-110" />
                      <img src="https://api.iconify.design/logos:nextjs-icon.svg" alt="Next.js" className="w-6 h-6 transition-transform group-hover:scale-110" />
                      <img src="https://api.iconify.design/logos:google-cloud.svg" alt="Google Cloud" className="w-6 h-6 transition-transform group-hover:scale-110" />
                      <img src="https://api.iconify.design/logos:express.svg" alt="Express" className="w-6 h-6 transition-transform group-hover:scale-110" style={{ filter: 'invert(1)' }} />
                      <img src="https://api.iconify.design/logos:postgresql.svg" alt="PostgreSQL" className="w-6 h-6 transition-transform group-hover:scale-110" />
                      <img src="https://api.iconify.design/logos:mongodb-icon.svg" alt="MongoDB" className="w-6 h-6 transition-transform group-hover:scale-110" />
                      <img src="https://api.iconify.design/logos:redis.svg" alt="Redis" className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                  </div>
                  
                  <p className="text-zinc-300 leading-relaxed mb-6">
                    Enterprise-grade latency monitoring SaaS with real-time analytics, multi-project management, stress testing, and global edge caching. Features automated warm-up services and comprehensive database management tools.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Real-time Analytics', 'Stress Testing', 'Edge Caching', 'Auto Warm-up', 'Multi-Project'].map((feature) => (
                      <span key={feature} className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700 group-hover:border-zinc-600 transition-colors">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href="https://0ms.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
                  >
                    <span>Monitor Performance</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      case 'education':
        return (
          <>
            <h1 className="text-4xl font-bold mb-8">Education</h1>
            
            <div className="space-y-6">
              <div className="bg-transparent p-5 rounded-lg border border-zinc-800">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-xl">SVIT, VASAD (GTU)</h3>
                  <span className="bg-zinc-800 px-3 py-1 rounded text-sm">2024</span>
                </div>
                <p className="text-zinc-400">B.E. IT Engineering</p>
                <div className="flex items-center mt-2">
                  <img src="https://api.iconify.design/mdi:school.svg" alt="Education" style={{ filter: 'invert(1)' }} className="w-5 h-5 mr-2 text-zinc-400" />
                  <span className="text-zinc-300">7.4 CGPA</span>
                </div>
              </div>
              
              <div className="bg-transparent p-5 rounded-lg border border-zinc-800">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-xl">PARUL POLYTECHNIC INSTITUTE (GTU)</h3>
                  <span className="bg-zinc-800 px-3 py-1 rounded text-sm">2021</span>
                </div>
                <p className="text-zinc-400">Diploma In Computer Engineering</p>
                <div className="flex items-center mt-2">
                                    <img src="https://api.iconify.design/mdi:school.svg" alt="Education" style={{ filter: 'invert(1)' }} className="w-5 h-5 mr-2 text-zinc-400" />

                  <span className="text-zinc-300">8 CGPA</span>
                </div>
              </div>
              
              <div className="bg-transparent p-5 rounded-lg border border-zinc-800">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-xl">SARDAR VALLABHBHAI VIDHYALAYA</h3>
                  <span className="bg-zinc-800 px-3 py-1 rounded text-sm">2018</span>
                </div>
                <p className="text-zinc-400">SSC</p>
                <div className="flex items-center mt-2">
                                    <img src="https://api.iconify.design/mdi:school.svg" alt="Education" style={{ filter: 'invert(1)' }} className="w-5 h-5 mr-2 text-zinc-400" />

                  <span className="text-zinc-300">60%</span>
                </div>
              </div>
              
              <div className="bg-transparent p-5 rounded-lg border border-zinc-800">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-xl">PARUL UNIVERSITY (PIET)</h3>
                  <span className="bg-zinc-800 px-3 py-1 rounded text-sm">Pursuing (2026)</span>
                </div>
                <p className="text-zinc-400">M.Tech</p>
                <div className="flex items-center mt-2">
                                    <img src="https://api.iconify.design/mdi:school.svg" alt="Education" style={{ filter: 'invert(1)' }} className="w-5 h-5 mr-2 text-zinc-400" />

                  <span className="text-zinc-300">In Progress</span>
                </div>
              </div>
            </div>
          </>
        );
      case 'showcase':
        return (
          <>
            <h1 className="text-4xl font-bold mb-8">Showcase</h1>
            <div className="w-full ml-auto mr-auto py-2   items-center   px-2">
              <div className="w-full h-fit flex items-start md:flex-row flex-col gap-2">
                <div className="w-full mr-2 md:w-full flex flex-col">
                  <div className="w-full">
                    <img src="/svf/1.svg" className="m-3 w-[96%] max-w-full rounded-md" alt="" />
                  </div>
                  <div className="w-full">
                    <img src="/svf/.svg" className="m-2 w-[96%] max-w-full" alt="" />
                  </div>
                  <div className="w-full">
                    <img src="/svf/10.svg" className="m-4 w-[96%] max-w-full rounded-md" alt="" />
                  </div>
                  <div className="w-full">
                    <img src="/svf/5.svg" className="m-2 w-[96%] max-w-full" alt="" />
                  </div>
                </div>
                <div className="w-full mr-1 h-full md:w-full flex flex-col">
                  <img src="/svf/2.svg" className="mt-2 mr-2 w-full h-[65%] max-w-full" alt="" />
                  <div className="w-full flex items-center justify-end h-full">
                    <img src="/svf/11.svg" className="m-4 w-[96%] max-w-full" alt="" />
                  </div>
                </div>
                <div className="w-[70%] mr-2 md:w-[70%] w-full flex flex-col">
                  <div className="w-full">
                    <img src="/svf/4.svg" className="m-2 w-[96%] max-w-full" alt="" />
                  </div>
                  <div className="w-full">
                    <img src="/svf/7.svg" className="m-2 w-[96%] max-w-full" alt="" />
                  </div>
                  <div className="w-full">
                    <img src="/svf/8.svg" className="m-2 w-[96%] max-w-full" alt="" />
                  </div>
                  <div className="w-full">
                    <img src="/svf/6.svg" className="m-2 w-[96%] max-w-full" alt="" />
                  </div>
                </div>
              </div>
              <br />
              <div className="w-full flex flex-col md:flex-row ml-auto mr-auto ">
                <img src="/svf/13.svg" className="m-2 w-full md:w-[50%] max-w-full" alt="" />
                <img src="/svf/17.svg" className="m-2 w-full md:w-[50%] max-w-full" alt="" />
              </div>
              <br />
              <img src="/svf/12.svg" className="m-2 -mt-2 ml-auto mr-auto  w-full" alt="" />
              <img src="/svf/14.svg" className="m-2 ml-auto  " alt="" />
            </div>
          </>
        );
      default:
        return <div>Select a section to view content</div>;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
        <div className="flex h-14 items-center px-4 sm:px-6">
          {/* Hamburger for mobile */}
          <button
            className="lg:hidden mr-3 flex items-center justify-center"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-label="Open navigation"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-zinc-100">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Desktop nav */}
          <nav className="hidden lg:flex flex-wrap gap-2 sm:gap-6 items-center w-full">
            <Link
              href="#"
              className="text-zinc-400 hover:text-zinc-100"
              onClick={() => setActiveSection('introduction')}
            >
              Home
            </Link>
            <Link href="/" className="text-zinc-400 hover:text-zinc-100">Full Portfolio</Link>
            <Link href="#" className="text-zinc-400 hover:text-zinc-100">CDN</Link>
            <Link href="#" className="text-zinc-400 hover:text-zinc-100">Cube</Link>
            <Link
              href="#"
              className="text-zinc-400 hover:text-zinc-100"
              onClick={() => setActiveSection('showcase')}
            >
              Components
            </Link>
          </nav>
          <img src="https://s3-alpha.figma.com/profile/9e1a06f4-7992-4a29-9254-ae5e397248cc" className="w-9 h-9 rounded-full ml-auto" alt="" />
        </div>
        {/* Mobile nav drawer */}
        {mobileNavOpen && (
          <>
            <div 
              className="lg:hidden fixed inset-0 z-[99999] bg-black/95 backdrop-blur-sm" 
              onClick={() => setMobileNavOpen(false)} 
              style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
            />
            <div
              className="lg:hidden fixed top-0 left-0 z-[999999] w-[95vw] max-w-xs h-[100dvh] overflow-y-auto bg-zinc-950 border-r border-zinc-800 shadow-xl p-6"
              onClick={e => e.stopPropagation()}
              style={{ overscrollBehavior: 'contain' }}
            >
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-xl text-zinc-100">Menu</span>
                <button
                  onClick={() => setMobileNavOpen(false)}
                  aria-label="Close navigation"
                  className="p-2 hover:bg-zinc-800 rounded-md transition-colors"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-zinc-400">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Main nav links */}
              <nav className="space-y-2">
                <Link
                  href="#"
                  className="block px-4 py-2 rounded-md hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-zinc-100"
                  onClick={() => { setActiveSection('introduction'); setMobileNavOpen(false); }}
                >
                  Home
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 rounded-md hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-zinc-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Full Portfolio
                </Link>
                <Link href="#" className="block px-4 py-2 rounded-md hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-zinc-100">CDN</Link>
                <Link href="#" className="block px-4 py-2 rounded-md hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-zinc-100">Cube</Link>
                <Link
                  href="#"
                  className="block px-4 py-2 rounded-md hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-zinc-100"
                  onClick={() => { setActiveSection('showcase'); setMobileNavOpen(false); }}
                >
                  Components
                </Link>
              </nav>

              <hr className="my-6 border-zinc-800" />

              {/* Sidebar links */}
              <div className="space-y-2">
                <div className="font-bold text-zinc-100 px-4 mb-2">Get Started</div>
                <nav className="space-y-1">
                  <Link
                    href="#"
                    onClick={() => { setActiveSection('introduction'); setMobileNavOpen(false); }}
                    className={`block px-4 py-2 rounded-md transition-colors ${
                      activeSection === 'introduction' 
                        ? 'bg-zinc-800 text-zinc-100' 
                        : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100'
                    }`}
                  >
                    Introduction
                  </Link>
                  <Link
                    href="#"
                    onClick={() => { setActiveSection('skills'); setMobileNavOpen(false); }}
                    className={`block px-4 py-2 rounded-md transition-colors ${
                      activeSection === 'skills' 
                        ? 'bg-zinc-800 text-zinc-100' 
                        : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100'
                    }`}
                  >
                    Skills
                  </Link>
                  <Link
                    href="#"
                    onClick={() => { setActiveSection('projects'); setMobileNavOpen(false); }}
                    className={`block px-4 py-2 rounded-md transition-colors ${
                      activeSection === 'projects' 
                        ? 'bg-zinc-800 text-zinc-100' 
                        : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100'
                    }`}
                  >
                    Projects
                  </Link>
                  <Link
                    href="#"
                    onClick={() => { setActiveSection('education'); setMobileNavOpen(false); }}
                    className={`block px-4 py-2 rounded-md transition-colors ${
                      activeSection === 'education' 
                        ? 'bg-zinc-800 text-zinc-100' 
                        : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100'
                    }`}
                  >
                    Education
                  </Link>
                  <Link
                    href="#"
                    onClick={() => { setActiveSection('showcase'); setMobileNavOpen(false); }}
                    className={`block px-4 py-2 rounded-md transition-colors ${
                      activeSection === 'showcase' 
                        ? 'bg-zinc-800 text-zinc-100' 
                        : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100'
                    }`}
                  >
                    Showcase
                  </Link>
                </nav>
              </div>
            </div>
          </>
        )}
      </header>

      <div className="container mx-auto flex flex-col lg:flex-row min-h-screen gap-6 lg:gap-12 px-2 sm:px-6">
        {/* Sidebar */}
        <aside className="hidden lg:block w-full lg:w-64 pt-8 lg:pt-12 mb-6 lg:mb-0">
          <nav className="space-y-2 flex flex-row lg:flex-col gap-2 lg:gap-0 overflow-x-auto">
            <div className="font-bold text-zinc-100 min-w-max">Get Started</div>
            <Link 
              href="#" 
              onClick={() => setActiveSection('introduction')} 
              className={`block min-w-max ${activeSection === 'introduction' ? 'text-zinc-100' : 'text-zinc-400'} hover:text-zinc-100`}
            >
              Introduction
            </Link>
            <Link 
              href="#" 
              onClick={() => setActiveSection('skills')} 
              className={`block min-w-max ${activeSection === 'skills' ? 'text-zinc-100' : 'text-zinc-400'} hover:text-zinc-100`}
            >
              Skills
            </Link>
            <Link 
              href="#" 
              onClick={() => setActiveSection('projects')} 
              className={`block min-w-max ${activeSection === 'projects' ? 'text-zinc-100' : 'text-zinc-400'} hover:text-zinc-100`}
            >
              Projects
            </Link>
            <Link 
              href="#" 
              onClick={() => setActiveSection('education')} 
              className={`block min-w-max ${activeSection === 'education' ? 'text-zinc-100' : 'text-zinc-400'} hover:text-zinc-100`}
            >
              Education
            </Link>
            <Link 
              href="#" 
              onClick={() => setActiveSection('showcase')} 
              className={`block min-w-max ${activeSection === 'showcase' ? 'text-zinc-100' : 'text-zinc-400'} hover:text-zinc-100`}
            >
              Showcase
            </Link>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 pt-4 lg:pt-12 w-full">
          {renderContent()}
        </main>

        {/* Right sidebar */}
        <aside className="w-full lg:w-64 pt-8 lg:pt-12 mt-6 lg:mt-0">
          <div className="rounded-lg border border-zinc-800 bg-transparent p-4 mb-6">
            <div className="flex items-center mb-3">
              <img src="https://api.iconify.design/logos:vercel-icon.svg" alt="Vercel" className="w-5 h-5 mr-2" style={{ filter: 'invert(1)' }} />
              <h3 className="font-semibold">Connect with Bhargav</h3>
            </div>
            <p className="text-sm text-zinc-400 mb-4">
              Full Stack Developer specializing in Next.js, React, and database technologies.
            </p>
            <a href="mailto:bhargavjoshi1237@gmail.com" className="bg-zinc-100 text-zinc-900 px-4 py-2 rounded-md w-full hover:bg-zinc-200 flex items-center justify-center">
              <img src="https://api.iconify.design/mdi:email.svg" alt="Email" className="w-4 h-4 mr-2" />
              Contact Me
            </a>
          </div>
          
          <div className="rounded-lg border border-zinc-800 bg-transparent p-4 mb-6">
            <h3 className="font-semibold mb-2">Languages</h3>
            <div className="space-y-2">
              {['English', 'Hindi', 'Marathi', 'Gujarati'].map((lang) => (
                <div key={lang} className="flex items-center">
                  <img src="https://api.iconify.design/mdi:check-circle.svg" alt="Check" className="w-4 h-4 mr-2 [filter:brightness(0)_invert(1)]" />
                  <span>{lang}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-lg border border-zinc-800 bg-transparent p-4">
            <h3 className="font-semibold mb-2">Date of Birth</h3>
            <div className="flex items-center">
              <img src="https://api.iconify.design/mdi:calendar.svg" alt="Calendar" className="w-5 h-5 mr-2 [filter:brightness(0)_invert(1)]" />
              <span>29-01-2003</span>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-950/95 mt-20">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* About */}
            <div className="space-y-4">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold">About Me</h3>
              <p className="text-zinc-400 text-sm">Full Stack Developer specializing in Next.js, React, and modern web technologies.</p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg fon font-semibold">Quick Links</h3>
              <div className="flex flex-col space-y-2 text-sm text-zinc-400">
                <Link href="#" onClick={() => setActiveSection('introduction')} className="hover:text-zinc-100">Introduction</Link>
                <Link href="#" onClick={() => setActiveSection('skills')} className="hover:text-zinc-100">Skills</Link>
                <Link href="#" onClick={() => setActiveSection('projects')} className="hover:text-zinc-100">Projects</Link>
                <Link href="#" onClick={() => setActiveSection('education')} className="hover:text-zinc-100">Education</Link>
                <Link href="#" onClick={() => setActiveSection('showcase')} className="hover:text-zinc-100">Showcase</Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold">Connect</h3>
              <div className="flex flex-col space-y-2 text-sm text-zinc-400">
                <a href="https://github.com/bhargavjoshi1237" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-100 flex items-center">
                  <img src="https://api.iconify.design/logos:github-icon.svg" className="w-4 h-4 mr-2" alt="GitHub" style={{ filter: 'invert(1)' }} />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/bhargav-joshi-95a1b9194/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-100 flex items-center">
                  <img src="https://api.iconify.design/logos:linkedin-icon.svg" className="w-4 h-4 mr-2" alt="LinkedIn" />
                  LinkedIn
                </a>
                <a href="https://dribbble.com/bhargavj0shi" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-100 flex items-center">
                  <img src="https://api.iconify.design/logos:dribbble-icon.svg" className="w-4 h-4 mr-2" alt="Dribbble" />
                  Dribbble
                </a>
                <a href="https://figma.com/@bhargavjoshi1" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-100 flex items-center">
                  <img src="https://api.iconify.design/logos:figma.svg" className="w-4 h-4 mr-2" alt="Figma" />
                  Figma
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold">Contact</h3>
              <div className="space-y-2 text-sm text-zinc-400">
                <p className="flex items-center">
                  <img src="https://api.iconify.design/mdi:email.svg" className="w-4 h-4 mr-2 [filter:brightness(0)_invert(1)]" alt="Email" />
                  bhargavjoshi1237@gmail.com
                </p>
                <p className="flex items-center">
                  <img src="https://api.iconify.design/mdi:map-marker.svg" className="w-4 h-4 mr-2 [filter:brightness(0)_invert(1)]" alt="Location" />
                  Vadodara, Gujarat
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-zinc-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-sm text-zinc-400">
            <p>© {new Date().getFullYear()} Bhargav Joshi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
    