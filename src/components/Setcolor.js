import {useState} from "react";
function Setcolor(){
    const [color, setColor] = useState("Green");

    return(
    <>
        <p>my Favorite Color is {color}</p>
        <button onClick={()=>setColor('Red')} className="btn btn-danger">Red</button>
        <button onClick={()=>setColor('Blue')} className="btn btn-primary">Blue</button>
    </>
    )
}
export default Setcolor;