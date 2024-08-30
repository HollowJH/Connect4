import { Link } from "react-router-dom";

export function Rules() {
    return (<div className="shadow-[0_2px_0_5px,0_10px_0_5px] shadow-black w-[335px] md:w-[480px] h-[618px] md:h-[537px]
        bg-white rounded-[40px] text-black p-5 pt-[30px] gap-[33px] grid place-content-center relative ">
        <h2 className="text-[56px]/[71px] text-center ">RULES</h2>
        <section className="grid gap-4">
            <h3 className="text-[#7945FF] text-[20px]/[26px] ">OBJECTIVE</h3>
            <p className="font-medium">Be the first player to connect 4 of the same colored discs in a row
                (either vertically, horizontally, or diagonally).</p>
        </section>
        <section className="grid gap-4">
            <h3 className="text-[#7945FF] text-[20px]/[26px] ">HOW TO PLAY</h3>
            <ol>
                <li className="font-medium flex">
                    <span className="mr-[19px]">1</span>
                    <p className="font-medium">Red goes first in the first game.</p>
                </li>
                <li className="flex">
                    <span className="mr-[19px]">2</span>
                    <p className="font-medium">Players must alternate turns, and only one disc can be dropped in each turn.</p>
                </li>
                <li className="flex">
                    <span className="mr-[19px]">3</span>
                    <p className="font-medium">The game ends when there is a 4-in-a-row or a stalemate.</p>
                </li>
                <li className="flex">
                    <span className="mr-[19px]">4</span>
                    <p className="font-medium">The starter of the previous game goes second on the next game.</p>
                </li>
            </ol>
        </section>
        <Link to="/" className="justify-self-center absolute -bottom-[40px]">
            <svg className="group"
            width="70px" height="75px" viewBox="0 0 70 75" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>icon-check</title>
                <g id="Designs" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="icon-check">
                        <circle className="group-hover:fill-[#5C2DD5]" id="Oval-Copy-37" fill="currentColor" cx="35" cy="35" r="35"></circle>
                        <circle className="group-hover:fill-[#5C2DD5]" id="Oval-Copy-38" fill="currentColor" cx="35" cy="40" r="35"></circle>
                        <circle id="Oval-Copy-39" fill="#FD6687" cx="35" cy="35" r="32"></circle>
                        <polyline id="Path" stroke="#FFFFFF" stroke-width="3" points="20 34.5819497 30.2640104 44.84596 50.1099704 25"></polyline>
                    </g>
                </g>
            </svg>
        </Link>
    </div>)
}