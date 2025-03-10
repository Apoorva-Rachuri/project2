import {useState} from 'react';
import Header from './components/Header.js';
import UserInput from './components/UserInput.js';
import Results from './components/Results.js';

function App(){
   const[userInput, setUserInput] = useState({
      initialInvestment :10000,
      annualInvestment : 1200,
      expectedReturn : 6,
      duration : 10
  });

  const inputIsValid = userInput.duration >=1;
   
  function handleChange(inputIndentifier,newValue){
   setUserInput(prevUserInput => {
    return {
       ...prevUserInput,
       [inputIndentifier] : +newValue
    };
   });
}


   return (
    <>
    <h1>App loaded</h1>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange}/>
    {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
    {inputIsValid && <Results input = {userInput} />}
    </>

   );
}

 export default App