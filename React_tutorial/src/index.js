
import React, { useReducer, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { GlobalContext } from './lesson_12/context'
import ContextA_UseR from './lesson_12/App'




ReactDOM.render(
<GlobalContext>
 
  <ContextA_UseR/> 
 
</GlobalContext>,

document.getElementById('root'))