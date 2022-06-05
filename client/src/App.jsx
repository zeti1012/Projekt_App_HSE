import React from 'react';
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import { BauteilContextProvider } from './context/BauteilContext';
import BauteilHome from './routes/BauteilHome';
import Home from './routes/Home';
import LoginPage from './routes/LoginPage';


const App = () =>{
    return(
    <BauteilContextProvider>
        <div className='container'>
            <Router>
                <Routes>
                    <Route exact path = "/" element = {<Home/>}/>
                    <Route exact path = "/bauteil/:id" element = {<BauteilHome/>}/>
                    <Route exact path='/login' element ={<LoginPage/>}/>
                </Routes>
            </Router>
        </div>
    </BauteilContextProvider>
    )
};

export default App;