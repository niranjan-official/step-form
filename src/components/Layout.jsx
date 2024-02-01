import { useState } from 'react'
import { data } from '../../data';
import QuestionBlock from './QuestionBlock';
import Body from './Body';
import Buttons from './Buttons';

function Layout() {

  const [dataIndex, setDataIndex] = useState(0);

  return (
    <div className='w-screen min-h-screen flex justify-center items-center bg-violet-100 md:bg-slate-200 sm:p-4'>
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

export default Layout
