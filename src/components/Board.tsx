import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootStat } from "../app/store";
import { Ball } from "./Ball";
import { changeTurn, updateBoard } from "../features/connect4/ConnectSlice";

export const Board = () => {
  const visBoard = useRef(null)
  const dispatch = useDispatch()
  const board = useSelector((state: RootStat) => state.connect.board)

  function handleClick(event: { clientX: number; }) {
    const rect = visBoard.current.getBoundingClientRect()
    const x = event.clientX - rect.left;
    const col = Math.floor(x / 47.8)
    console.log(`Clicked column ${col}`);
    const children = visBoard.current.childNodes[col].childNodes
    for (let row = children.length - 1; row >= 0; row--) {
      if (children[row].childNodes.length === 0) {
        dispatch(updateBoard({ col, row }))
        dispatch(changeTurn(""))
        break
      }
    }
  }

  return (
    <div className="relative h-[320px] w-[335px] row-start-3 col-start-1 self-start">
      <div className="-z-30 absolute h-[320px] w-[335px] bg-[url(/images/board-layer-black-small.svg)]">
      </div>
      <div ref={visBoard} className="-z-[2] pl-[7px] pt-[7.9px] absolute h-[310px] w-[335px] gap-x-[10px] grid-cols-7 grid p-[11px] bg-[url(/images/board-layer-white-small.svg)]">
        {[...Array(7)].map((_v, i) => {
          return (<div
            className={"w-[34px] h-[265px] grid gap-[6.6px] row" + i}>{[...Array(6)].map((_v, index) => <div className="w-[40px] h-[40px] cell">{board[index][i] && <Ball turn={board[index][i]} />}</div>)}</div>)
        })}
      </div>
      <img className="z-10 relative" src="/images/board-layer-white-small.svg" onClick={handleClick} draggable={false} alt="" />
    </div>
  )
}