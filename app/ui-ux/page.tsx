import { Loading } from "../components/Loading";
import { Navbar } from "../components/Navbar";

export default function UIUX(){
    return(
        <div>
            <Navbar/>
            <div className="pt-[125px] flex items-center justify-center">
                <button className="relative z-10 bg-[#333232] border-[1.5px] border-[#CFCFCF] rounded-[50px] px-8 py-3 text-white text-[12px] font-medium">
                    showreel
                </button>
            </div>

            <div className="pt-[25px] container flex items-center justify-center">
                <div className="p-1 h-[500px] w-[350px] border border-[#333232] rounded-[5px] hover:rounded-[20px] transition-all">

                </div>
            </div>



        </div>
    );
}