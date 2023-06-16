
import React, { useReducer, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Root from './lesson_13/React_RDom5/root';
import {BrowserRouter} from 'react-router-dom'






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <BrowserRouter>
   
      <Root />
   
   </BrowserRouter>

);