import react from 'react';

const Hello = () =>{
  return(
    <div>
      <p> Hello world !</p>
    </div>
  )
}


const App = () => {
  
  return (
    <div> 
      <h1>Greeting</h1> 
      <Hello/>   
      <Hello/>       
    </div>
  ) 
}

export default App;
