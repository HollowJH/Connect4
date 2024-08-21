import { useEffect, useState } from "react"
import { useConnect } from "../hooks/useConnect"
import { useSelector } from "react-redux"
import { RootStat } from "../app/store"

export function Timer({reset} : {reset: boolean}) {
    const [time, setTime] = useState(15)
    const { updateTurn, currentTurn } = useConnect()
    const isPaused = useSelector((state: RootStat) => state.connect.pause)
    let timeoutId: number

    useEffect(() => {
        setTime(15)
     }, [currentTurn, reset])

    useEffect(() => {
        setTime(15)
        console.log(reset)
    },[reset])

    useEffect(() => {
        if (time === 0) {
            updateTurn()
        } else if (!isPaused) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            timeoutId = setTimeout(() => {
                setTime(prev => --prev)
            }, 1000)
        }
        return () => clearTimeout(timeoutId)
    }, [time, isPaused])

    return (<div className={`w-[197px] h-[165px] flex flex-col items-center justify-center bg-no-repeat row-start-3 col-start-1
    relative z-[99] top-[138px] md:top-[245px] lg:top-[180px] justify-self-center xl:col-start-2 pt-4
    ${currentTurn === "red" ? " bg-[url(/images/turn-background-red.svg)]" : " bg-[url(/images/turn-background-yellow.svg)] text-black"}`}>
        <span className="leading-[21px] ">{`PLAYER ${currentTurn === "red" ? 1 : 2}'S TURN`}</span>
        <span className="text-[56px]/[71px] ">{time}s</span>
    </div>)
}