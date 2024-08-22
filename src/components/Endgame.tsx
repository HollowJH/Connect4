import { useConnect } from "../hooks/useConnect"

export function Endgame() {
    const {winner, erase} = useConnect()

    return (<div className="absolute row-start-3 lg:row-start-2 col-start-1 z-[99] 
     bottom-[80px] md:bottom-[50px] lg:bottom-[55px] justify-self-center flex flex-col
    bg-white text-black w-[285px] h-[160px] rounded-[20px] items-center justify-center p-[17px] 
    shadow-[0_2px_0_5px,0_10px_0_5px]">
        <span>PLAYER {winner}</span>
        <span className="text-[56px]/[71px] " >WINS</span>
        <button className="bg-[#5C2DD5] w-[130px] h-[39px] rounded-3xl " onClick={() => erase()}>PLAY AGAIN</button>
    </div>)
}