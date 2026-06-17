import './App.css';
import Header from './components/Header';
import EmiForm from './components/EmiForm';
import EmiResult from './components/EmiResult';
import Details from './components/Details';
import { useState } from 'react';
function App() {
  let [data , setData]=useState({
    emi:0,
    totalInterest : 0,
    totalPayment : 0,
  });
  return (
    <div className='app-container'>
      <Header/>
      <EmiForm setData={setData}/>
      <EmiResult data={data}/>
      <Details/>
    </div>
  )
}

export default App
