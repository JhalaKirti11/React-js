function X({count, setCounter}){
    return <>
        <h4>count is : {count}</h4>
        <button onclick={()=>{setCounter(count+1)}} className="btn btn-secondary">+</button>
    
    </>
}
export default X;