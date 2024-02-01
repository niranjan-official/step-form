import React, { useContext, useEffect } from 'react'
import { data } from '../../data'
import { ResponseContext } from '../context'
import ShowCard from './showCard';
import { useNavigate } from 'react-router-dom';

const ShowData = () => {
    const {result,setResult} = useContext(ResponseContext);
    const navigate = useNavigate();

    useEffect(()=>{
        const resultData = localStorage.getItem('formdata')
        console.log(JSON.parse(resultData));
        setResult(JSON.parse(resultData))
    },[])

    const handleClick =()=>{
        localStorage.removeItem('formdata');
        setResult([
            {
              0:"",
              1:"",
              2:""
            },
            {
              0:"",
              1:'',
              2:'',
            },
            {
              0:'',
              1:"",
              2:""
            }
          ])
        navigate('/');
    }

  return (
    <div className='w-full sm:w-1/2 min-h-screen flex flex-col gap-4 bg-violet-200 p-4'>
        <h1 className='text-4xl mb-4'>Your Response</h1>
      {
        data.map((obj1,index1)=>{
            return (
                data[index1].map((obj2,index2)=>{
                    return <ShowCard label={obj2.label} response={result[index1][index2]} readOnly />
                })
            )
        })
      }
      <button onClick={handleClick} className='bg-violet-600 text-white p-2 rounded-md my-4'>Back to Forms</button>
    </div>
  )
}

export default ShowData
