import { Link } from "react-router-dom"
import { useConnect } from "../hooks/useConnect"

export function Pause({ erase, resetTimer }: { erase: () => void, resetTimer: () => void }) {
    const { pauseGame, board } = useConnect()

    return (<div className="absolute top-0 z-[99] bg-[#0009] w-[100dvw] h-[100dvh] grid place-content-center ">
        <div className="w-[335px] h-[437px] bg-[#7945FF] rounded-[40px] flex flex-col items-center 
        justify-center p-5 shadow-[0_2px_0_5px,0_10px_0_5px] shadow-black gap-[30px] ">
            <h2 className="text-[56px]/[71px] ">PAUSE</h2>
            <button className="h-[72px] w-full bg-white rounded-[20px] grid place-content-center 
            text-black text-[24px]/[31px] shadow-[0_2px_0_5px,0_10px_0_5px] " onClick={() => pauseGame()}>CONTINUE GAME</button>
            {!board.every((row: string[]) => row.every(cell => cell === "")) &&
                <button className="h-[72px] w-full bg-white rounded-[20px] grid place-content-center 
            text-black text-[24px]/[31px] shadow-[0_2px_0_5px,0_10px_0_5px] "
                    onClick={() => {
                        pauseGame()
                        erase()
                        resetTimer()
                    }}>RESTART</button>}
            <Link to="/" className="w-full">
                <button onClick={() => {
                    pauseGame()
                    erase()
                }}
                className="h-[72px] w-full bg-[#FD6687] rounded-[20px] grid place-content-center 
            text-black text-[24px]/[31px] shadow-[0_2px_0_5px,0_10px_0_5px] ">QUIT GAME</button>
            </Link>
        </div>
    </div>)
}