// import { useState } from 'react'

import { useRef, useState } from "react"
import { Board } from "./components/Board";


function App() {
  const board = useRef(null)
  const [turn, setTurn] = useState(true);

  function handleClick(event: { clientX: number; }) {
    const rect = board.current.getBoundingClientRect()
    const x = event.clientX - rect.left;
    const col = Math.floor(x / 45)
    const children = board.current.childNodes[col].childNodes
    const newSpan = document.createElement("span")
    newSpan.classList.add("inline-block", "absolute", "z-10", "w-[36px]", "h-[36px]", "rounded-full", turn ? "bg-[#FD6687]" : "bg-[#FFCE67]")
    for (let index = children.length - 1; index >= 0; index--) {
      if (children[index].childNodes.length === 0) {
        children[index].appendChild(newSpan)
        setTurn(prev => !prev)
        break
      }
    }
  }

  return (
    <>
      <Board ref={board} handleClick={handleClick} />
    </>
  )
}

export default App
