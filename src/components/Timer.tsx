import { useDispatch, useSelector } from "react-redux"
import { RootStat } from "../app/store"
import { useEffect, useState } from "react"
import { changeTurn } from "../features/connect4/ConnectSlice"

export function Timer() {
    const turn = useSelector((state: RootStat) => state.connect.turn)
    const [time, setTime] = useState(15)
    const dispatch = useDispatch()
    let timeoutId: number

    useEffect(() => {
        setTime(15)
     }, [turn])

    useEffect(() => {
        if (time === 0) {
            dispatch(changeTurn(""))
        } else {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            timeoutId = setTimeout(() => {
                setTime(prev => --prev)
            }, 1000)
        }
        return () => clearTimeout(timeoutId)
    }, [dispatch, time])

    return (<div className={`w-[197px] h-[165px] flex flex-col items-center justify-center bg-no-repeat row-start-3 col-start-1
    relative z-[99] top-[138px] justify-self-center 
    ${turn === "red" ? " bg-[url(/images/turn-background-red.svg)]" : " bg-[url(/images/turn-background-yellow.svg)] text-black"}`}>
        {/* <img src={`/images/turn-background-${turn}.svg`} alt="" /> */}
        <span className="leading-[21px] ">{`PLAYER ${turn === "red" ? 1 : 2}'S TURN`}</span>
        <span className="text-[56px]/[71px] ">{time}s</span>
    </div>)
}