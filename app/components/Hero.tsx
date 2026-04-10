'use client';

import Image from "next/image";
import dynamic from "next/dynamic";
import LinkedInIcon from "../../public/assets/2linkedIn_icon.svg";
import BehanceIcon from "../../public/assets/Behance_icon.svg";
import GitHubIcon from "../../public/assets/GitHub_icon.svg";
import ArrowDownIcon from "../../public/assets/arrow-down-s-line_icon.svg";
import Link from "next/link";

const ParallaxHero = dynamic(
  () => import("./ParallaxHero").then((m) => m.ParallaxHero),
  { ssr: false }
);

export function Hero() {
    return (

        <div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:mx-12 lg:mt-[140px]">

                <div className="mt-[300px] lg:mt-[0px] lg:flex-1 lg:pl-[100px]">
                    <div className="lg:w-[700px] lg:h-[700px] w-full h-[400px]">
                        <ParallaxHero />
                    </div>
                </div>


                <div className="lg:flex-1 lg:pl-12">


                    <div className="mx-12 pt-[120px] lg:mx-0 lg:pt-0 lg:flex lg:items-start lg:justify-between">

                    <div className="lg:pl-[200px]">

                        <div className="block lg:hidden">
                            <h1 className="text-[25px] text-[#333333]">Venu</h1>
                            <p className="mt-5 text-[#767676]">Software Engineer +</p>
                            <p className="text-[#767676]">Developer</p>
                        </div>


                        <div className="hidden lg:block">
                            <h1 className="font-medium text-[15px] text-[#333333]">Hi, I&apos;m Venu</h1>
                            <p className="mt-5 text-[#767676]">Born and raised in Bern, Switzerland,</p>
                            <p className="text-[#767676]">I am a Software Engineer/ Developer</p>
                            <p className="text-[#767676]">and UI/ UX Designer.</p>
                        </div>

                    </div>

                        <div className="pt-14 mx-0 flex justify-between items-center lg:mx-0 lg:pt-2 lg:flex-col lg:space-y-6">

                            <div>
                            <Link href="https://www.linkedin.com/in/venurshan-manivannan-034592231/" target="_blank" rel="noopener noreferrer">
                                <Image src={LinkedInIcon} alt="LinkedIn" />
                            </Link>
                            </div>

                            <div>
                            <Link href="https://www.behance.net/venurshmanivan" target="_blank" rel="noopener noreferrer">
                                <Image src={BehanceIcon} alt="Behance" />
                            </Link>
                            </div>

                            <div>
                            <Link href="https://github.com/venu21-dev" target="_blank" rel="noopener noreferrer">
                                <Image src={GitHubIcon} alt="GitHub" />
                            </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center pt-12 lg:pt-[75px]">
                <Image src={ArrowDownIcon} alt="Arrow" />
            </div>

        </div>
    );
}
