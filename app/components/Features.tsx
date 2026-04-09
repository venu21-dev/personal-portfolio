import Image from "next/image";
import FeaturePic from "../../public/assets/Features_Project_1.svg";
import FeatureColor from "../../public/assets/Features_colorgrading.svg";
import Link from "next/link";


export function Features() {
    return (
      <div className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center bg-[#E6E6E6] overflow-hidden mb-[250px] mt-[150px] lg:mt-[250px]">
        
        {/* Bild*/}
        <div className="absolute w-[120%] h-[100%] max-w-[1500px] max-h-[1500px]">
          <Image src={FeaturePic} alt="Feature Background" fill className="object-contain blur-[10px]" quality={90} priority/>
        </div>
  
        {/* Button */}
        <Link href=".\projects">
        <button className="relative z-10 bg-[#E0E0E0] border-[1.5px] border-[#CFCFCF] rounded-[50px] bg-opacity-50 backdrop-blur-md px-12 py-3 text-[#333333] text-[12px] font-medium hover:bg-opacity-70 transition-all">
          Projects
        </button>
        </Link>

        <div className="absolute w-[100%] h-[100%] lg:w-[100%] lg:h-[100%] max-w-[1500px] max-h-[1500px] mt-[270px] lg:mt-[430px]">
          <Image src={FeatureColor} alt="Feature Background" fill className="object-contain"/>
        </div>
  
      </div>
    );
  }