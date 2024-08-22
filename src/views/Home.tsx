import { Link } from "react-router-dom";

export function Home() {
    return (<div className="w-[100dvw] h-[100dvh] grid place-content-center md:bg-[#5C2DD5] ">
        <div className="h-[305px] md:h-[435px] w-[335px] md:w-[480px] flex flex-col gap-[30px] justify-center items-center 
        md:p-10 md:rounded-[40px] md:bg-[#7945FF] md:shadow-[0_2px_0_5px,0_10px_0_5px] md:shadow-black">
        <img src="/images/logo.svg" alt="logo" className="mb-[49px] h-[52px] w-[52px] "/>
        <Link to="/game" className="w-full">
            <button className="h-[72px] w-full bg-[#FFCE67] rounded-[20px] grid place-content-center 
            text-black text-[24px]/[31px] shadow-[0_2px_0_5px,0_10px_0_5px] ">
                PLAY VS PLAYERS
            </button>
        </Link>
        <Link to="/darules" className="w-full">
        <button className="h-[72px] w-full bg-white rounded-[20px] grid place-content-center 
            text-black text-[24px]/[31px] shadow-[0_2px_0_5px,0_10px_0_5px] ">GAME RULES</button>
        </Link>
    </div>
    </div>)
}