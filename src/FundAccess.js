import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

const FundHouse=()=>{
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [selectedCity1, setSelectedCity1] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    const onCityChange = (e) => {
        setSelectedCity1(e.value);
    }

    return(
        <div>
            <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Select a City" />
            <div>Name</div>
           <InputText value={name} onChange={(e) => setName(e.target.value)} /><br></br>
           <div>Description</div>
           <InputText value={desc} onChange={(e) => setDesc(e.target.value)} /><br></br>
           <Button label="Delete" className="p-button-danger" />
           <Button label="Submit" />




        </div>
    )




}

export default FundHouse