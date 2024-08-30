import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootStat } from "../app/store"
import { Board } from "../components/Board"
import { Endgame } from "../components/Endgame"
import { Pause } from "../components/Pause"
import { Score } from "../components/Score"
import { Timer } from "../components/Timer"
import { TopBar } from "../components/TopBar"
import { useConnect } from "../hooks/useConnect"

export function Game() {


    const { winner } = useConnect()
  const { erase } = useConnect()
  const [reset, setReset] = useState(false)
  const isPaused = useSelector((state: RootStat) => state.connect.pause)

  useEffect(() => {
    if (reset === true) setReset(false)
  }, [reset])

  const updateReset = () => setReset(prev => !prev)


  return (<>
    <div className="grid relative grid-rows-gameRows gap-[50px] pt-[50px] h-[812px] md:h-[1024px] lg:h-[900px]
    w-[375px] md:w-[632px] lg:w-[1034px]
    place-items-center px-5 md:px-0">
      <TopBar resetTimer={updateReset} />
      <Score player={1} />
      <Board width={window.innerWidth} />
      {winner === 0 ? <Timer reset={reset} /> : <Endgame />}
      <Score player={2} />
      {isPaused && <Pause erase={erase} resetTimer={updateReset} />}
    </div>
      <div className={`fixed bottom-0 w-[100%] h-[22vh] -z-50 rounded-tl-[60px] rounded-tr-[60px]
        ${winner === 0 || winner === 3 ? "bg-[#5C2DD5]" : winner === 1 ? "bg-[#FD6687]" : "bg-[#FFCE67]"}`}></div>
  </>
  )
}