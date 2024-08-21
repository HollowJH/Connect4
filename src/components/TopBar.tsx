import { useConnect } from "../hooks/useConnect"

export function TopBar({resetTimer} : {resetTimer: () => void}) {
    const { pauseGame, erase } = useConnect()

    return (<div className="flex justify-between items-center w-full lg:col-start-2 ">
        <button onClick={() => pauseGame()}
        className="w-[86px] h-[39px] rounded-3xl bg-[#5C2DD5] ">MENU</button>
        <img className="pl-4" src="/images/logo.svg" alt="" />
        <button onClick={() => {
            resetTimer()
            erase()
        }}
        className="w-[108px] h-[39px] rounded-3xl bg-[#5C2DD5] ">RESTART</button>
    </div>)
}