import React, { useRef } from "react"

function Counter() {

    let Iref = useRef(1);

    const inc = () =>{
        Iref.current.innerHTML = parseInt(Iref.current.innerHTML) + 1;
    }
    const dec = () =>{

      if(Iref.current.innerHTML > 1)
      {
        Iref.current.innerHTML = parseInt(Iref.current.innerHTML) -1 ;      

      }



    }



  return (
    <>
    <div className="box row">

        <button onClick={dec} className="button1" > - </button>

       <h1 ref={Iref}>
        {
            Iref.current
        }
       </h1>

       <button onClick={inc} className="button"> + </button>
    </div>
    </>
  )
}

export default Counter
