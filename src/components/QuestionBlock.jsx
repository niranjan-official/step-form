import React, { useContext, useState } from 'react'
import { ResponseContext } from '../context';

const QuestionBlock = ({ label, inputType, placeHolder, dataIndex ,index}) => {

  const [isActive, setIsActive] = useState(false);
  const { result, setResult } = useContext(ResponseContext);

  const handleChange = (value) =>{
      const newData = [...result];
      newData[dataIndex][index] = value;
      localStorage.setItem('formdata',JSON.stringify(newData));
      setResult(newData);
  }

  return (
    <div key={index} className={`w-full flex flex-col justify-between bg-white p-4 gap-4 ${isActive && 'rounded-l-lg border-l-8 border-violet-500'}`}>
      <p className='question-font'>{label} <span className='text-red-500'>*</span></p>
      <input value={result[dataIndex][index]} onChange={(e)=>handleChange(e.target.value)} type={inputType} placeholder={placeHolder} onFocus={() => setIsActive(true)} onBlur={() => setIsActive(false)}/>
    </div>
  )
}

export default QuestionBlock