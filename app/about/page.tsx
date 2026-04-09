import { Navbar } from "../components/Navbar";
import Point from "../../public/assets/circle-fill.svg";
import Image from "next/image";
import { Footer } from "../components/Footer";
import HTMLicon from "../../public/assets/html5-fill.svg"
import CSSicon from "../../public/assets/css3-fill.svg"
import JSicon from "../../public/assets/javascript-fill.svg"
import TailwindCSSicon from "../../public/assets/tailwind-css-fill.svg"
import ReactJSicon from "../../public/assets/reactjs-line.svg"
import NextJSicon from "../../public/assets/nextjs-line.svg"
import GitIcon from "../../public/assets/github-fill.svg"
import FlutterIcon from "../../public/assets/flutter-fill.svg"






export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      

      <div className="container mx-auto justify-items-end text-end px-4 pt-[120px] lg:pt-[130px] lg:pb-[12px]">
        <h3 className="flex justify-items-end text-[10px] lg:text-[14px] font-light">
        Heaven | 108.20’137” Between | 589.24’149”
        </h3>
      </div>

      {/* Main Grid Container */}
      <div className="container mx-auto px-4 pt-2 lg:pb-12 lg:pt-0">

        {/* Education & Experience Row */}

        <div className="grid grid-cols-[1.5fr_1fr] gap-0 border border-[#333232]">
          {/* Education Section (schmaler) */}
          <div className="border-r border-[#333232] p-6">
            <h1 className="text-[20px] lg:text-2xl font-bold mb-4 text-gray-800">Education</h1>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] lg:text-[12px] text-gray-500">2024 - Today</p>
                <h2 className="text-[16px] text-xl font-semibold mt-1">Höhere Fachschule Bern GiBB HF</h2>
                <p className="text-[12px] lg:text-[16px] text-gray-600">Dipl. Applikationsentwickler (Application-Development)</p>
              </div>
              <div>
                <p className="text-[10px] lg:text-[12px] text-gray-500">2020 - 2023</p>
                <h2 className="text-[16px] text-xl font-semibold mt-1">Berufsfachschule Bern GiBB</h2>
                <p className="text-[12px] lg:text-[16px] text-gray-600">Computer Scientist EFZ</p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="p-6">
            <h1 className="text-[20px] lg:text-2xl font-bold mb-4 text-gray-800">Experience</h1>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] lg:text-[12px] text-gray-500">2024 - Today</p>
                <h2 className="text-[16px] text-xl font-semibold mt-1">Koras AG</h2>
                <p className="text-[12px] lg:text-[16px] text-gray-600">IT System Specialist</p>
              </div>
              <div>
                <p className="text-[10px] lg:text-[12px] text-gray-500">2022 - 2024</p>
                <h2 className="text-[16px] text-xl font-semibold mt-1">Blaser Swisslube AG</h2>
                <p className="text-[12px] lg:text-[16px] text-gray-600">IT Specialist</p>
              </div>
              <div>
                <p className="text-[10px] lg:text-[12px] text-gray-500">2010 - 2023</p>
                <h2 className="text-[16px] text-xl font-semibold mt-1">Blaser Swisslube AG</h2>
                <p className="text-[12px] lg:text-[16px] text-gray-600">Apprenticeship as Computer Scientist</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skillset & Stacks Row */}
        <div className="grid grid-cols-[1fr_1.5fr] border border-[#333232] border-t-0 mb-[50px]">

          {/* Skillset Section */}
          <div className="border-r border-[#333232] p-6">
            <h1 className="text-[20px] lg:text-2xl font-bold mb-4 text-gray-800">Skillset</h1>
            <ul className="space-y-2">
              <li className="text-[11px] lg:text-[16px] flex items-center gap-2"><Image src={Point} alt="Punkt" className="w-[7px] h-[7px]"></Image>Azure & Intune</li>
              <li className="text-[11px] lg:text-[16px] flex items-center gap-2"><Image src={Point} alt="Punkt" className="w-[7px] h-[7px]"></Image>Endpoint Manager</li>
              <li className="text-[11px] lg:text-[16px] flex items-center gap-2"><Image src={Point} alt="Punkt" className="w-[7px] h-[7px]"></Image>Microsoft Exchange</li>
              <li className="text-[11px] lg:text-[16px] flex items-center gap-2"><Image src={Point} alt="Punkt" className="w-[7px] h-[7px]"></Image>Active Directory</li>
              <li className="text-[11px] lg:text-[16px] flex items-center gap-2"><Image src={Point} alt="Punkt" className="w-[7px] h-[7px]"></Image>All Adobe Tools</li>
              <li className="text-[11px] lg:text-[16px] flex items-center gap-2"><Image src={Point} alt="Punkt" className="w-[7px] h-[7px]"></Image>Visual Studio</li>
              <li className="text-[11px] lg:text-[16px] flex items-center gap-2"><Image src={Point} alt="Punkt" className="w-[7px] h-[7px]"></Image>Figma</li>
            </ul>
          </div>

          {/* Stacks Section */}
          <div className="p-6 pb-10 lg:pb-14">
            <h1 className="text-[20px] lg:text-2xl font-bold mb-4 text-gray-800">Stacks</h1>
            <div className="lg:pl-[300px] lg:pr-[300px] grid grid-cols-4 gap-6">

            <div className="h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] border border-[#333232] rounded flex items-center justify-center hover:scale-90 transition-all group relative">
              <Image src={HTMLicon} alt="HTML_Icon" className="w-6 h-6 lg:w-10 lg:h-10"/>
              <div className="absolute bottom-full mb-2 px-2 py-1 text-[10px] lg:text-[12px] bg-[#333232] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                HTML
              </div>
            </div>


              <div className="h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] border border-[#333232] rounded flex items-center justify-center hover:scale-90 transition-all group relative">
                <Image src={CSSicon} alt="CSS_Icon" className="w-6 h-6 lg:w-10 lg:h-10"/>
                <div className="absolute bottom-full mb-2 px-2 py-1 text-[10px] lg:text-[12px] bg-[#333232] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  CSS3
                </div>
              </div>

              
              <div className="h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] border border-[#333232] rounded flex items-center justify-center hover:scale-90 transition-all group relative">
                    <Image src={JSicon} alt="JS_Icon" className="w-6 h-6 lg:w-10 lg:h-10"/>
                    <div className="absolute bottom-full mb-2 px-2 py-1 text-[10px] lg:text-[12px] bg-[#333232] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      JavaScript
                    </div>
                  </div>

    
                  <div className="h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] border border-[#333232] rounded flex items-center justify-center hover:scale-90 transition-all group relative">
                    <Image src={TailwindCSSicon} alt="TailwindCSS_Icon" className="w-6 h-6 lg:w-10 lg:h-10"/>
                    <div className="absolute bottom-full mb-2 px-2 py-1 text-[10px] lg:text-[12px] bg-[#333232] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      Tailwind CSS
                    </div>
                  </div>

                 
                  <div className="h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] border border-[#333232] rounded flex items-center justify-center hover:scale-90 transition-all group relative">
                    <Image src={ReactJSicon} alt="ReactJS_Icon" className="w-6 h-6 lg:w-10 lg:h-10"/>
                    <div className="absolute bottom-full mb-2 px-2 py-1 text-[10px] lg:text-[12px] bg-[#333232] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      React
                    </div>
                  </div>

                
                  <div className="h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] border border-[#333232] rounded flex items-center justify-center hover:scale-90 transition-all group relative">
                    <Image src={NextJSicon} alt="NextJS_Icon" className="w-6 h-6 lg:w-10 lg:h-10"/>
                    <div className="absolute bottom-full mb-2 px-2 py-1 text-[10px] lg:text-[12px] bg-[#333232] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      Next.js
                    </div>
                  </div>

                
                  <div className="h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] border border-[#333232] rounded flex items-center justify-center hover:scale-90 transition-all group relative">
                    <Image src={FlutterIcon} alt="Flutter_Icon" className="w-6 h-6 lg:w-10 lg:h-10"/>
                    <div className="absolute bottom-full mb-2 px-2 py-1 text-[10px] lg:text-[12px] bg-[#333232] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      Flutter
                    </div>
                  </div>

               
                  <div className="h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] border border-[#333232] rounded flex items-center justify-center hover:scale-90 transition-all group relative">
                    <Image src={GitIcon} alt="Git_Icon" className="w-6 h-6 lg:w-10 lg:h-10"/>
                    <div className="absolute bottom-full mb-2 px-2 py-1 text-[10px] lg:text-[12px] bg-[#333232] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      GitHub
                    </div>
                  </div>

              <div className="h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] border border-[#333232] rounded flex items-center justify-center hover:scale-90 transition-all">
              </div>

              <div className="h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] border border-[#333232] rounded flex items-center justify-center hover:scale-90 transition-all">
              </div>

              <div className="h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] border border-[#333232] rounded flex items-center justify-center hover:scale-90 transition-all">
              </div>

              <div className="h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] border border-[#333232] rounded flex items-center justify-center hover:scale-90 transition-all">
              </div>

              <div className="h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] border border-[#333232] rounded flex items-center justify-center hover:scale-90 transition-all">
              </div>

              <div className="h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] border border-[#333232] rounded flex items-center justify-center hover:scale-90 transition-all">
              </div>

              <div className="h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] border border-[#333232] rounded flex items-center justify-center hover:scale-90 transition-all">
              </div>

              <div className="h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] border border-[#333232] rounded flex items-center justify-center hover:scale-90 transition-all">
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}