import React, { useContext } from 'react'
import { ResponseContext } from '../context';

const Buttons = ({dataIndex, updateIndex}) => {

    const {result,setResult} = useContext(ResponseContext)

    const handleBack = ()=>{
        if(dataIndex>0){
            updateIndex((prev)=>prev-1);
        }
    }
    const handleNext = (e)=>{
        e.preventDefault();
        const form = e.target;
        console.log(form.checkValidity());
        if(!form.checkValidity()){
            alert("Fields cannot be empty")
        }
        if(dataIndex<2){
            updateIndex((prev)=>prev+1);
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(result);
        alert("Response submitted succesfully")
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