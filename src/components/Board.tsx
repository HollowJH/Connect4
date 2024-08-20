import { useEffect, useRef } from "react"
import { useSelector } from "react-redux";
import { RootStat } from "../app/store";
import { Ball } from "./Ball";
import { useConnect } from "../hooks/useConnect";
import { Check } from "./Check";

export function Board({width} : {width: number}) {
  const visBoard = useRef<HTMLDivElement>(null)
  const { turn, newScore, winningPlay } = useConnect()
  const board = useSelector((state: RootStat) => state.connect.board)
  const winner = useSelector((state: RootStat) => state.connect.winner)

  useEffect(() => {
    if (winner !== 0) newScore()
  }, [newScore, winner])

  function handleClick(event: { clientX: number; }) {
    const colWidth = window.innerWidth < 768 ? 47.8 : 90.28 


    if (winner !== 0) return
    const rect = visBoard.current!.getBoundingClientRect()
    const x = event.clientX - rect.left;
    const col = Math.floor(x / colWidth) //divides the x value of the cell by the width + padding
    console.log(`Clicked column ${col}`);
    const children = visBoard.current!.childNodes[col].childNodes
    for (let row = children.length - 1; row >= 0; row--) {
      if (children[row].childNodes.length === 0) {
        turn(col, row)
        break
      }
    }
  }

  return (
    <div className="relative h-[320px] w-[335px] md:w-[632px] md:h-[594px] row-start-3 lg:row-start-2 col-start-1 lg:col-start-2 self-start">
      <div className={`-z-30 absolute h-[320px] w-[335px] md:w-[632px] md:h-[594px]
      ${width < 760 ? "bg-[url(/images/board-layer-black-small.svg)]" : 
      "bg-[url(/images/board-layer-black-large.svg)]"}`}>
      </div>
      <div ref={visBoard} className={`-z-[2] pl-[7px] pt-[7.9px] md:p-[18px] absolute h-[310px] w-[335px] md:w-[632px] md:h-[584px]  gap-x-[10px]
        md:gap-x-[20px] grid-cols-7 grid p-[11px]`}>
        {[...Array(7)].map((_v, i) => { //create columns and rows
          return (<div
            className={"w-[34px] h-[265px] md:h-[510px] md:w-[70px] grid gap-[6.6px] md:gap-[18px] relative row" + i}>
            {[...Array(6)].map((_v, index) => <div className="w-[40px] h-[40px] md:w-[70px] md:h-[70px] cell grid">
              {board[index][i] && <Ball row={index} turn={board[index][i]} />}
              {winningPlay.some((sub: number[][]) => sub.toString() === [index, i].toString()) && <Check />}
            </div>)}
          </div>)
        })}
      </div>
      <img className="z-10 relative" 
      src={width < 760 ? "/images/board-layer-white-small.svg" : "/images/board-layer-white-large.svg" }
      onClick={handleClick} draggable={false} alt="" />
    </div>
  )
}