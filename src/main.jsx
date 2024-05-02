import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Overview from './components/Overview'
import Ticket from './components/Ticket'
import Navlink from './components/Navlink'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navlink />
      <Routes>
        <Route path='/overview' element={<Overview/>}/>
        <Route path='/ticket' element={<Ticket/>  }/>
      </Routes>
    </Router>
  </React.StrictMode>
)
