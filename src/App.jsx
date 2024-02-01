import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowData from './components/ShowData';
import Layout from './components/Layout';

function App() {


  return (
    <div className='w-screen h-max flex justify-center bg-violet-100'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}/>
          <Route path="/result" element={<ShowData/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
