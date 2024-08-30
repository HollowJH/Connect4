import { Link } from "react-router-dom";
import { useConnect } from "../hooks/useConnect";

export function Home() {
    const { newGame } = useConnect()
    
    return (<div className="w-[100dvw] h-[100dvh] grid place-content-center md:bg-[#5C2DD5] ">
        <div className="h-[305px] md:h-[480px] w-[335px] md:w-[537px] flex flex-col gap-[30px] justify-center items-center 
        md:p-10 md:rounded-[40px] md:bg-[#7945FF] md:shadow-[0_2px_0_5px,0_10px_0_5px] md:shadow-black">
        <img src="/images/logo.svg" alt="logo" className="mb-[49px] h-[52px] w-[52px] "/>
        <Link to="/game" className="w-full">
            <button onClick={() => newGame(true)}
            className="h-[72px] w-full bg-[#FD6687] rounded-[20px] flex px-5 py-3 justify-between items-center
            text-white text-[24px]/[31px] shadow-[0_2px_0_5px,0_10px_0_5px] hover:shadow-[#5C2DD5] shadow-black ">
                <span>PLAY VS CPU</span>
                <img src="/images/player-vs-cpu.svg" alt="" />
            </button>
        </Link>
        <Link to="/game" className="w-full">
            <button onClick={() => newGame(false)}
            className="h-[72px] w-full bg-[#FFCE67] rounded-[20px] flex px-5 py-3 justify-between items-center 
            text-black text-[24px]/[31px] shadow-[0_2px_0_5px,0_10px_0_5px] hover:shadow-[#5C2DD5] ">
                <span>PLAY VS PLAYERS</span>
                <img src="/images/player-vs-player.svg" alt="" />
            </button>
        </Link>
        <Link to="/darules" className="w-full">
        <button className="h-[72px] w-full bg-white rounded-[20px] flex px-5 py-3 items-center
            text-black text-[24px]/[31px] shadow-[0_2px_0_5px,0_10px_0_5px] hover:shadow-[#5C2DD5]">GAME RULES</button>
        </Link>
    </div>
    </div>)
}