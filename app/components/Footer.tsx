import Link from "next/link"; 
import FooterIcon from "../../public/assets/Footer_icon.svg"
import Image from "next/image";
import GitHubIcon from "../../public/assets/GitHub_icon_white.svg"
import LinkedInIcon from "../../public/assets/2linkedIn_icon_white.svg"
import BehanceIcon from "../../public/assets/Behance_icon_white.svg"

export function Footer() {
  return (
    <div className="bg-[#181818] py-0 px-0">
        
      <div className="container mx-auto px-14 sm:px-14 pt-[100px] pb-[40px] max-w-7xl">

        <div className="flex gap-4 justify-start items-center">
          <Link href="/projects">
            <p className="text-white text-[12px] lg:text-[16px]">
              Projects
            </p>
          </Link>
          
          <Link href="/ui-ux">
            <p className="text-white text-[12px] lg:text-[16px]">
              UI/ UX
            </p>
          </Link>
          
          <Link href="/about">
            <p className="text-white text-[12px] lg:text-[16px]">
              About
            </p>
          </Link>
        </div>

        <div className="flex w-full justify-between items-end pb-4 pt-[18px]">
            <div>
                <Link href="/">
                    <Image src={FooterIcon} alt="FooterIcon" className="lg:w-9 lg:h-9 transition-transform duration-500 ease-ou hover:-rotate-180"></Image>
                </Link>
            </div>

            <div>
                <p className="text-white text-[12px] lg:text-[13px]">Bern, Switzerland</p>
            </div>
        </div>

        <div className="bg-white py-[0.5px]">
        </div>
        
        <div className="flex w-full justify-between items-start pt-4">
            <div>
            <p className="text-white text-[12px] lg:text-[13px]">@venu 2025</p>
            </div>

            <div className="flex gap-2 justify-end items-center">
                <Link href="https://github.com/venu21-dev">
                    <Image src={GitHubIcon} alt="GitHubIcon" className="lg:w-8 lg:h-10"></Image>
                </Link>

                <Link href="https://www.linkedin.com/in/venurshan-manivannan-034592231/">
                    <Image src={LinkedInIcon} alt="LinkedInIcon" className="lg:w-8 lg:h-10"></Image>
                </Link>

                <Link href="https://www.behance.net/venurshmanivan">
                    <Image src={BehanceIcon} alt="BehanceIcon" className="lg:w-8 lg:h-10"></Image>
                </Link>   
            </div>
        </div>

      </div>
    </div>
  );
}