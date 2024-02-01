import React, {  useEffect } from 'react'

const ShowCard = ({ label ,response,readOnly}) => {

    useEffect(()=>{
        window.scrollTo({
          top:0
      })
      },[])
  return (
    <div className={`w-full flex flex-col justify-between bg-white p-4 gap-4 rounded-l-lg border-l-8 border-violet-500`}>
      <p className='question-font'>{label}</p>
      <input value={response} type={'text'} readOnly={readOnly}/>
    </div>
  )
}

export default ShowCard