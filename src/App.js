import './App.css';
import Home from './components/Home';
import Axios from "axios"
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employee from './components/Employee';
import Admin from './components/Admin';


function App() {

  const [email, setEmail] = useState("")
  const [data, setData] = useState("")

  const loginHandler = (val) => {
    setEmail(val)
    // console.log(val);
  }

  useEffect(() => {
    Axios.get(`https://gorest.co.in/public/v2/users?email=${email}`)
      .then(res => setData(res.data))
      .catch(err => alert(err))
  }, [email])


  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home loginHandler={loginHandler} />}/>
          <Route path="/Employee" element={<Employee data={data} />}/>
          <Route path="/Admin" element={<Admin />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
