import { useSelector } from "react-redux";
import { Board } from "./components/Board";
import { Timer } from "./components/Timer";
import { RootStat } from "./app/store";
import { Score } from "./components/Score";
import { Endgame } from "./components/Endgame";
import { useEffect, useState } from "react";


function App() {
  const winner = useSelector((state: RootStat) => state.connect.winner)
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Score player={1} />
      <Board width={width} />
      {winner === 0 ? <Timer /> : <Endgame />}
      <Score player={2} width={width} />
      <div className={`fixed bottom-0 w-[100%] h-[22vh] -z-50 rounded-tl-[60px] rounded-tr-[60px]
        ${winner === 0 ? "bg-[#5C2DD5]" : winner === 1 ? "bg-[#FD6687]" : "bg-[#FFCE67]"}`}></div>
    </>
  )
}

export default App
