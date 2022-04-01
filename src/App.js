import './App.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'tippy.js/dist/tippy.css';
import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import ManagerSettings from './ManagerSettings'
import InvestorAccess from './InvestorAccess'
import FundAccess from './FundAccess'
import FundHouse from './FundHouse'



function App() {
  const [option, setOption] = useState(1);


  return (
      <div className='grid'>
          <div className='col-4'>
              <div onClick={()=>setOption(1)} >Manager Settings</div>
              <div onClick={()=>setOption(2)} >Fund Access</div>
              <div onClick={()=>setOption(3)} >Investor Access</div>
              <div onClick={()=>setOption(4)} >Fundhouse Description</div>
          </div>
          <div className='col-6'>
              {(option===1) && (<div ><ManagerSettings/></div>)}
              {(option===2) && (<div ><InvestorAccess/></div>)}
               {(option===3) && (<div ><FundAccess/></div>)}
               {(option===4) && (<div><FundHouse/></div>)}
          </div>
      </div>
  )




}

export default App;
