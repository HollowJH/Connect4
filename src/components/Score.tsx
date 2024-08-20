import { useSelector } from "react-redux"
import { RootStat } from "../app/store"

export function Score({ player }: { player: number, width: number }) {
    const score = useSelector((state: RootStat) => state.connect.score)
    const playerScore = player == 1 ? score.player1 : score.player2


    return (<aside className={`relative w-[142px] md:w-[272px] md:h-[100px] flex md:flex-row md:gap-[37px] flex-col justify-center items-center h-[81px] text-black 
    bg-white rounded-[20px] shadow-[0_2px_0_5px,0_10px_0_5px] 
    lg:h-[160px] lg:w-[141px] lg:flex-col lg:gap-0 lg:pt-4 lg:top-[245px]
    ${window.innerWidth > 1200 ? player === 1 ? " col-start-1 row-start-2" : "col-start-3 row-start-2" : "col-start-1 row-start-2"}
    ` + (player === 1 ? "" : " justify-self-end")}>
        <p className="md:text-[20px]/[26px] " >{player !== 0 ? "PLAYER " + player : "CPU"}</p>
        <span className="text-[32px]/[41px] md:text-[56px]/[71px] ">{playerScore}</span>
        <img src={`/images/${player === 0 ? "cpu" : player === 1 ? "player-one" : "player-two"}.svg`}
            className={`absolute ` + (window.innerWidth < 1440 ? player === 1 ? "-left-6" : "-right-6" : "-top-7")}
            alt="Player face" />
    </aside>)
}