import { forwardRef } from "react"

interface ChildProps {
    handleClick: (event: { clientX: number; }) => void
}

export const Board = forwardRef<HTMLDivElement, ChildProps>((props, ref) => {
    const {handleClick} = props;

    return (
        <div className="relative h-[320px] w-[335px]">
        <div className="-z-50 absolute h-[320px] w-[335px] bg-[url(/images/board-layer-black-small.svg)]">
        </div>
        <div ref={ref} className="-z-[2] absolute h-[310px] w-[335px] gap-x-[12.6px] grid-cols-7 grid p-[11px] bg-[url(/images/board-layer-white-small.svg)]">
          {[...Array(7)].map((_v, i) => {
            return (<div
              className={"w-[34px] h-[265px] grid gap-[12.5px] row" + i}>{[...Array(6)].map(() => <div className="w-[34px] h-[34px] cell"></div>)}</div>)
          })}
        </div>
        <img className="z-10 relative" src="/images/board-layer-white-small.svg" onClick={handleClick} draggable={false} alt="" />
      </div>
    )
})