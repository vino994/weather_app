import React, { useState } from 'react'
import './SearchDetails.css'
import { Search } from 'lucide-react';
function SearchDetails({ setDataLists, dataLists ,wheaterData}) {
  const [inputValue, setInputValue] = useState('');
  const [dataInput,setDataInput] = useState([])
  const handleClick = () => {
    if (inputValue.trim() === '') return;
 setDataLists(inputValue)
    const newValues = [inputValue, ...dataInput];
    if (newValues.length > 4) newValues.pop();
    setDataInput(newValues);
    setInputValue('');
   
  };

  return (
    <div className='inputContainer'>
      <div className='inputbox'>
        <input type='text' placeholder='AnotherLocation' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={handleClick} style={{cursor:'pointer'}} className='searchbtn'><Search /></button>
      </div>
      <div className='cities'>
        <ul>
        {dataInput && (
          dataInput.map((city,i)=>{
           return <li className='list-city'>{city}</li>
          })
        )}
        </ul>
      </div>
      <div className='Wheatherdetails'>
        <h4>Wheatherdetails</h4>
        <div className='w-details'>
{wheaterData && wheaterData.main && (
  <>
    <p><span>Cloudy</span><span>{wheaterData.main.humidity}%</span></p>
    <p><span>Humidity</span><span>{wheaterData.main.temp}°C</span></p>
    <p><span>Wind</span><span>{wheaterData.wind?.speed} M/h</span></p>
    <p><span>Rain</span><span>{wheaterData.wind?.gust || "0"}</span></p>
  </>
)}

        </div>
     
      </div>
    </div>
  )
}

export default SearchDetails
