import { useEffect, useState } from "react"

export function Ball({ turn, row }: { turn: string, row: number }) {
    const heigth = window.innerWidth < 768 ? 46.8 : 85
    const [position, setPosition] = useState({ x: row * heigth })

    useEffect(() => setPosition({ x: 0 }), [])

    return (<img
        className="relative transition-transform duration-1000 ease-in-out col-start-1 row-start-1"
        style={{
            transform: `translate(0,-${position.x}px)`
        }}
        src={window.innerWidth < 768 ? `/images/counter-${turn}-small.svg` : `/images/counter-${turn}-large.svg`} />)
}