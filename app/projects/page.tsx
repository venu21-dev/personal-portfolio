"use client";

import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import CodeIcon from "../../public/assets/code_icon.svg";
import Image from "next/image";
import ProjectSony from "../../public/assets/Project_Sony.svg";
import ProjectApple from "../../public/assets/Project_Apple.svg";
import ProjectSpotify from "../../public/assets/Project_Spotify.svg";
import ProjectLunar from "../../public/assets/Project_Lunar.svg";
import ProjectTodo from "../../public/assets/Project_todo.svg";
import ProjectTesla from "../../public/assets/Project_Tesla.svg";

import ArrowRight from "../../public/assets/arrow-right-icon.svg";
import Point from "../../public/assets/circle-fill.svg";
import GitHubIcon from "../../public/assets/GitHub_icon.svg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Footer } from "../components/Footer";

// Project data as a separate constant outside the component
const projectsData = [
  { 
    id: 1,
    name: "SONY", 
    type: "Website",
    image: ProjectSony,
    description: "This project is a minimalist and aesthetic website concept for Sony cameras, designed with a black, white, and light gray color scheme.",
    technologies: "HTML/ CSS/ JS",
    link: "https://www.behance.net/gallery/206178893/Sony-Camera-Web-Concept-HTML-CSS-JS"
  },
  { 
    id: 2,
    name: "TESLA", 
    type: "Website",
    image: ProjectTesla,
    description: "An interactive Tesla website replica featuring their electric vehicles and clean energy products with modern animations.",
    technologies: "React/ Tailwind/ Three.js",
    link: "https://github.com/venu21-dev/Tesla_Website"
  },
  { 
    id: 3,
    name: "APPLE", 
    type: "Mobile App",
    image: ProjectApple,
    description: "A mobile app concept for Apple products showcasing minimalist design and intuitive navigation.",
    technologies: "React Native/ TypeScript",
    link: "https://www.behance.net/gallery/206860165/Apple-Shop-App-Concept-Dart-Flutter"
  },
  { 
    id: 4,
    name: "SPOTIFY", 
    type: "Mobile App",
    image: ProjectSpotify,
    description: "A Spotify clone with personalized music recommendations and social music sharing features.",
    technologies: "Flutter/ Dart/ Firebase",
    link: "https://github.com/venu21-dev"
  },
  { 
    id: 5,
    name: "LUNAR", 
    type: "Website",
    image: ProjectLunar,
    description: "A space-themed interactive website with 3D models of the moon and planets using WebGL.",
    technologies: "JavaScript/ WebGL/ GSAP",
    link: "https://github.com/venu21-dev/ArchitectureOffice_Website"
  },
  { 
    id: 6,
    name: "TODO", 
    type: "Mobile App",
    image: ProjectTodo,
    description: "A clean and minimalist to-do list app with cross-platform functionality.",
    technologies: "React Native/ Redux/ Node.js",
    link: "https://github.com/venu21-dev/ToDo_App"
  },
];

export default function Projects() {
  // State management
  const [activeProjectId, setActiveProjectId] = useState(1);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevProjectId, setPrevProjectId] = useState(1);
  
  // Find the active project
  const activeProject = projectsData.find(p => p.id === activeProjectId) || projectsData[0];
  const prevProject = projectsData.find(p => p.id === prevProjectId) || projectsData[0];

  // Handle project selection with transition
  const handleProjectClick = (id: number) => {
    if (id !== activeProjectId) {
      setIsTransitioning(true);
      setPrevProjectId(activeProjectId);
      
      // Small delay to allow the fade-out before changing the active project
      setTimeout(() => {
        setActiveProjectId(id);
        
        // Small delay to allow the new content to load before fading back in
        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }, 300);
    }
  };

  const handleMouseEnter = (id: number) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 pt-[115px] lg:pt-[200px] lg:pb-12">
        {/* Two-column layout for desktop */}
        <div className="lg:flex lg:flex-row lg:gap-8 lg:items-start">
          {/* Left column: Header and project list */}
          <div className="lg:w-1/2 lg:order-1">
            {/* Header with icon and titles */}
            <div className="pb-3 lg:pb-8 lg:pl-[65px]">
              <Image src={CodeIcon} alt="CodeIcon" className="lg:w-10 lg:h-10"/>
              <h1 className="text-[30px] lg:text-[60px] font-light text-[#333232] hover:italic transition-all duration-200">
                SOME FEATURED
              </h1>
              <h3 className="text-[30px] lg:text-[60px] font-semibold text-[#333232] pt-0">
                WORKS
              </h3>
            </div>
            
            {/* Project list - desktop */}
            <div className="hidden lg:block px-[50px]">
              <div className="flex justify-start pt-2">
                <div className="flex justify-start">
                  <Carousel
                    opts={{
                      align: "start",
                      slidesToScroll: 3
                    }}
                    orientation="vertical"
                    className="w-full max-w-xs relative"
                  >
                    <CarouselContent className="h-[280px] pt-[25px]">
                      {projectsData.map((project) => (
                        <CarouselItem key={project.id} className="basis-1">
                          <Card>
                            <CardContent 
                              className="flex items-left justify-start p-4 cursor-pointer"
                              onClick={() => handleProjectClick(project.id)}
                              onMouseEnter={() => handleMouseEnter(project.id)}
                              onMouseLeave={handleMouseLeave}
                            >
                              <div 
                                className={`flex items-baseline gap-[8px] transition-all text-left duration-300 
                                  ${hoveredId !== null && hoveredId !== project.id ? "filter blur-sm" : ""} 
                                  ${hoveredId === project.id ? "scale-105" : ""}`}
                              >
                                <span className={`text-[16px] lg:text-[30px] font-semibold ${hoveredId === project.id ? "text-[#625a5a]" : "text-[#333232]"}`}>
                                  {project.name} :
                                </span>
                                <span className={`text-[16px] lg:text-[30px] font-light ${hoveredId === project.id ? "text-[#625a5a] " : "text-[#333232]"}`}>
                                  {project.type}
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    
                    {/* Navigation arrows - desktop */}
                    <div className="pr-[12px] absolute right-[-80px] top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
                      <CarouselPrevious />
                      <CarouselNext />
                    </div>
                  </Carousel>
                </div>
              </div>

              {/* "Other Projects" Link - Desktop */}
                <Link href="https://github.com/venu21-dev" target="_blank">
                  <div className="flex items-center gap-2 pt-12 lg:pl-[18px]">
                    <p className="text-[12px] lg:text-[20px] font-light text-[#333232]">
                      Other Projects
                    </p>
                    <Image
                      src={GitHubIcon}
                      alt="GitHubIcon"
                      className="text-[#333232] w-3 h-3 lg:w-4 lg:h-4"
                    />
                  </div>
              </Link>
            </div>
          </div>

          {/* Right column: Project image and description */}
          <div className="lg:w-1/2 lg:order-2">
            {/* Project image with transition effect */}
            <div className="relative mt-4 lg:mt-0">
              {/* Previous project image (for transition) */}
              {isTransitioning && (
                <div className="absolute inset-0 z-10">
                  <Image
                    src={prevProject.image}
                    alt={prevProject.name}
                    className={`border-2 border-[#CFCFCF] rounded-[20px] w-full transition-all duration-300 ease-in-out ${isTransitioning ? "opacity-0 filter blur-md" : "opacity-100"}`}
                  />
                </div>
              )}
              
              {/* Current project image */}
              <Image
                src={activeProject.image}
                alt={activeProject.name}
                className={`border-2 border-[#CFCFCF] rounded-[20px] w-full transition-all duration-500 ease-in-out ${isTransitioning ? "filter blur-sm opacity-80" : "filter blur-0 opacity-100"}`}
              />
              
              <a 
                href={activeProject.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-[#E6E6E6] rounded-full w-9 h-9 lg:w-[70px] lg:h-[70px] flex items-center justify-center hover:bg-opacity-70 transition-all z-20"
              >
                <Image src={ArrowRight} alt="ArrowRight" width={7} height={7} className="lg:w-[15px] lg:h-[15px]"/>
              </a>
            </div>
            
            {/* Project description */}
            <div className="pt-[15px] lg:pt-[20px]">
              <div className={`border-2 border-[#CFCFCF] rounded-[20px] bg-[#E0E0E0] py-4 lg:py-[30px] px-10 lg:px-[80px] transition-all duration-500 ease-in-out ${isTransitioning ? "opacity-60 transform translate-y-2" : "opacity-100 transform translate-y-0"}`}>
                <div>
                  <p className="text-[12px] lg:text-[20px] text-[#333232]">
                    {activeProject.description}
                  </p>
                  <li className="text-[12px] lg:text-[20px] font-bold flex items-center gap-2 pt-2 lg:pt-4 text-[#333232]">
                    <Image src={Point} alt="Punkt" className="w-[6px] h-[6px]" />
                    {activeProject.technologies}
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-only project carousel */}
        <div className="px-[50px] lg:hidden">
          <div className="items-center text-center pt-2">
            <div className="flex justify-center">
              <Carousel
                opts={{
                  align: "start",
                  slidesToScroll: 3
                }}
                orientation="vertical"
                className="w-full max-w-xs relative"
              >
                <CarouselContent className="h-[280px] pt-[25px]">
                  {projectsData.map((project) => (
                    <CarouselItem key={project.id} className="basis-1">
                      <Card>
                        <CardContent 
                          className="flex items-center justify-center p-4 cursor-pointer"
                          onClick={() => handleProjectClick(project.id)}
                          onMouseEnter={() => handleMouseEnter(project.id)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div 
                            className={`flex items-baseline gap-1 transition-all duration-300 
                              ${hoveredId !== null && hoveredId !== project.id ? "filter blur-sm" : ""} 
                              ${hoveredId === project.id ? "scale-105" : ""}`}
                          >
                            <span className={`text-[16px] font-semibold ${hoveredId === project.id ? "text-[#625a5a]" : "text-[#333232]"}`}>
                              {project.name} :
                            </span>
                            <span className={`text-[16px] font-light ${hoveredId === project.id ? "text-[#625a5a]" : "text-[#333232]"}`}>
                              {project.type}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Navigation arrows - mobile */}
                <div className="pr-[12px] absolute right-[-40px] top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </Carousel>
            </div>
          </div>

          {/* "Other Projects" Link - Mobile */}
          <Link href="https://github.com/venu21-dev" target="_blank">
            <div className="flex items-center gap-1 pt-6 lg:hidden cursor-pointer">
              <p className="text-[12px] font-light text-[#333232]">
                Other Projects
              </p>
              <Image
                src={GitHubIcon}
                alt="GitHubIcon"
                className="text-[#333232] w-3 h-3"
              />
            </div>
         </Link>
      </div>
    </div>
    <div className="pt-16">
    <Footer/>
    </div>
  </div>
  );
}