import { useContext, useState } from 'react'
import './App.css'
import Body from './components/Body'
import Buttons from './components/Buttons'
import QuestionBlock from './components/QuestionBlock'
import response, { ResponseContext } from './context'
import { data } from '../data'

function App() {

  const [dataIndex, setDataIndex] = useState(0);
  const {result} = useContext(ResponseContext)

  return (
    <div className='W-screen h-screen flex justify-center items-center bg-violet-100 md:bg-slate-200'>
      <Body dataIndex={dataIndex}>
        <form className='flex flex-col gap-4 pt-4 md:p-4'>
          {
            data[dataIndex].map((obj, index) => {
              return <QuestionBlock index={index} label={obj.label} inputType={obj.inputType} placeHolder={obj.placeHolder} dataIndex={dataIndex} />
            })
          }
          <Buttons dataIndex={dataIndex} updateIndex={setDataIndex} />
        </form>
      </Body>
    </div>
  )
}

export default App
