import logo from './logo.svg';
import './App.css';
import {useState } from 'react';
import { LC, NC, SC, UC } from './Data/PassChar';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

function App() {

  let [uppercase, setUppercase] = useState(false)
    let [lowercase, setLowercase] = useState(false)
      let [number, setNumber] = useState(false)
        let [symbols, setSymbols] = useState(false)
        let [passwordlen,setPasswordlen] = useState(10)
        let[fPAss, setfPass] = useState('')


        let createPassword=()=>{
          let finalPass=''
          let charset =''
          if(uppercase||lowercase||number||symbols){
            if(uppercase)charset+=UC;
            if(lowercase)charset+=LC;
            if(number)charset+=NC;
            if(symbols)charset+=SC
            for(let i=0;i<passwordlen;i++){
             finalPass+= charset.charAt(Math.floor(Math.random()*charset.length))
            }
             setfPass(finalPass)
             NotificationManager.success("Password Generated succesfully.")
          
          }
          else{
            
         NotificationManager.error("Please select atleast one checkbox..");
          }
        }
let copyPass=()=>{
  navigator.clipboard.writeText(fPAss)
 NotificationManager.success('Password copied successfully.')
  setfPass('')
}
  return (
  <>
  <NotificationContainer/>
  <div className='passwordBox'>
    <h3>Password Generator</h3>
    <div className='passwordBoxin'>
      <input type='text' value={fPAss} readOnly/><button onClick={copyPass}>Copy</button>
    </div>
    <div className='passLength'>
      <label>Password Length</label>
      <input type='number' max={20} min={10}value={passwordlen} onChange={(event)=> setPasswordlen(event.target.value)}/>
    </div>
     <div className='passLength'>
      <label>Include Upper Case Letters</label>
      <input type='checkbox'  checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
    </div>
      <div className='passLength'>
      <label>Include Lower Case Letters</label>
      <input type='checkbox' checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
    </div>
      <div className='passLength'>
      <label>Include Numbers</label>
      <input type='checkbox' checked={number} onChange={()=>setNumber(!number)}/>
    </div>
      <div className='passLength'>
      <label>Include Symbols</label>
      <input type='checkbox' checked={symbols} onChange={()=>setSymbols(!symbols)}/>
    </div>
    <button className='btn' onClick={createPassword}>Generate Password</button>
  </div>
  </>
  );
}

export default App;
