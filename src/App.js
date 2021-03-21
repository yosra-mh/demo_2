import react from 'react';


const App = () => {
  const now = new Date();
  const a =10;
  const b =20;
  console.log("hello from another world ")
  console.log("Now:", now);
  return (
    <div>
      <p>Hello World, it's {now.toString()} !</p>
      <p> {a} + {b} = {a+b} </p>
      
    </div>
  )
}

export default App;
