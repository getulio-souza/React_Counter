import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0)
  }
  
  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1)
      setValue((prevState) => {
        return prevState + 1;
      })
    }, 2000)
  }

  return <>
    <section style={{width:"200px", margin: '4rem 0',textAlign:"center", backgroundColor: "transparent", border:"1px solid #000", boxShadow:"1px 2px 5px #000", padding:"1rem", borderRadius:"1rem" }}>
      <h2 style={{color: "black"}}>regular counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={()=> setValue(value - 1)}>-</button>
      <button className='btn' onClick={reset}>reset</button>
      <button className='btn' onClick={()=> setValue(value + 1)}>+</button>
    </section>

    <section style={{width:"200px", margin: '4rem 0',textAlign:"center", backgroundColor: "transparent", border:"1px solid #000", boxShadow:"1px 2px 5px #000", padding:"1rem", borderRadius:"1rem" }}>
      <h2 style={{color: "black"}}>More complex counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={complexIncrease}>increase later</button>
    </section>
  </>;
};

export default UseStateCounter;
