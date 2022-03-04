import { useState } from 'react'

export function Counter({ value }){

    console.log(value)
    const [ counter , setCounter ] = useState(value)

    const countHandler = (flag,op)=> op ? setCounter(counter*2) : setCounter(counter + flag)

    return <>
        <h2>Counter : { counter }</h2>
        <br />
        <br />
        <button onClick={()=>countHandler(1)}>Increament</button><br />
        <button onClick={()=>countHandler(-1)}>Decrement</button><br />
        <button onClick={()=>countHandler(2,1)}>Double</button>
    </>


}