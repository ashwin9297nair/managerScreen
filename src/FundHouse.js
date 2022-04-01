import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


const FundHouse=()=>{
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [desc, setDesc] = useState('');

  

    return(
        <div>
            <div>Name</div>
           <InputText value={name} onChange={(e) => setName(e.target.value)} /><br></br>
           
           <div>Address</div>
           <InputText value={address} onChange={(e) => setAddress(e.target.value)} /><br></br>
           <div>Email</div>
           <InputText value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
           <div>Website</div>
           <InputText value={website} onChange={(e) => setWebsite(e.target.value)} /><br></br>
           <div>Description</div>
           <InputText value={desc} onChange={(e) => setDesc(e.target.value)} /><br></br>
           <Button label="Submit"  />




        </div>
    )




}

export default FundHouse