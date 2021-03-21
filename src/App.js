import react from 'react';

const Hello = (props) =>{
  return(
    <div>
      <p> Hello {props.name}! you are {props.age} years old.</p>
    </div>
  )
}

const Footer =() => {
  const today = new Date() 
  return (
    <div>
     <em>Hello app created</em> {today.toString()}
    </div>
  )
}

const App = () => {
  const name = 'aladdin';
  const age = 25;
  
  return (
    <div> 
      <h1>Greeting</h1> 
      <Hello name="Mohamed" age={26+10}/>   
      <Hello name={name} age={age} /> 
      <Footer />      
    </div>
  ) 
}

export default App;
