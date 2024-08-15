import { useSelector } from "react-redux";
import { Board } from "./components/Board";
import { Timer } from "./components/Timer";
import { RootStat } from "./app/store";


function App() {
  const winner = useSelector((state: RootStat) => state.connect.winner)

  return (
    <>
      <aside className="w-[142px] h-[81px] bg-white col-start-1 row-start-2 rounded-[20px]"></aside>
      <Board />
      <Timer />
      <aside className="w-[142px] h-[81px] bg-white col-start-1 row-start-2 justify-self-end rounded-[20px]"></aside>
      <div className={`absolute bottom-0 w-[100vw] h-[22vh] -z-50 rounded-tl-[60px] rounded-tr-[60px]
        ${winner === 0 ? "bg-[#5C2DD5]" : winner === 1 ? "bg-[#FD6687]" : "bg-[#FFCE67]"}`}></div>
    </>
  )
}

export default App
