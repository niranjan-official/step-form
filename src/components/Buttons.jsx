import React, { useContext } from 'react'
import { ResponseContext } from '../context';
import { useNavigate } from 'react-router-dom';

const Buttons = ({dataIndex, updateIndex}) => {

    const {result,setResult} = useContext(ResponseContext)
    const navigate = useNavigate()

    const handleBack = ()=>{
        if(dataIndex>0){
            updateIndex((prev)=>prev-1);
        }
    }
    const handleNext = (e)=>{
        e.preventDefault();
        const valid = checkFields(result[dataIndex]);
        if(valid){
            if(dataIndex<2){
                updateIndex((prev)=>prev+1);
            }
        }else{
            alert("some fields are empty")
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(result);
        const valid = checkFields(result[dataIndex]);
        if(valid){
            alert("Response submitted succesfully")
            navigate('/result')
        }else{
            alert("Some fields are empty")
        }
    }
    const checkFields = (obj) =>{
        console.log(obj);
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
              if (!obj[key]) {
                return false; // If any variable is not empty, return false
              }
            }
          }
          return true;
    }
  return (
    <div className='w-full flex justify-between px-4'>
        {
            dataIndex>0 && <button onClick={handleBack} className='w-16 button' type='button'>Back</button>
        }
        {
            dataIndex<2 && <button onClick={(e)=>handleNext(e)} className='w-16 button' type='submit'>Next</button>
        }
        {
            dataIndex===2 && (
                <button onClick={(e)=>handleSubmit(e)} className='w-20 button' type='submit'>Submit</button>
            )
        }
    </div>
  )
}

export default Buttons