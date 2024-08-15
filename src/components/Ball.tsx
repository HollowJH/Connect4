export function Ball({turn} : {turn:string}) {
    return (<img src={`/images/counter-${turn}-small.svg`} />)
}