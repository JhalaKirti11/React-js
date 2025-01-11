import {useState} from "react";
import X from "./components/X";
import Setcolor from "./components/Setcolor";

export default function App(){
  let [count, setCount] = useState(100);

  return(
    <>
        <X count={count} setCount={setCount}/>
        <Setcolor/>
    </>
  )
}