import React from "react"
import Card1 from "./Componats/Card/Card1"
import Counter from "./Componats/Counter/Counter"
import Card2 from "./Componats/Card/Card2"
import Card3 from "./Componats/Card/Card3"
import Card4 from "./Componats/Card/Card4"
import Cardc1 from "./Componats/Card/Card-contant1"
import Cardc2 from "./Componats/Card/Card-contant2"
import Cardc3 from "./Componats/Card/Card-contant3"
import Cardc4 from "./Componats/Card/Card-contant4"

function App() {

  return (
    <>

    
      <h1> Book Your Ticket Now....!</h1> 

   <div className="container">
        <div className="row justify-content">
          <Card1 />
          <Cardc1 />
          <Counter />
        </div><br /><br />
        <div className="row justify-content">
          <Card2 />
          <Cardc2 />
          <Counter />
        </div><br /><br />
        <div className="row justify-content">
          <Card3 />
          <Cardc3 />
          <Counter />
        </div><br /><br />
        <div className="row justify-content">
          <Card4 />
          <Cardc4 />
          <Counter />
        </div>
      </div>
    </>
  )
}

export default App
