import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
let data= [
        {"email": "ash@gmail.com","Name":"Ashwin"},
        {"email": "bsh@gmail.com","Name":"PRet"},
        {"email": "csh@gmail.com","Name":"Anikt"},
        {"email": "dsh@gmail.com","Name":"Ashutsh"},
        {"email": "esh@gmail.com","Name":"virat"},
        {"email": "fsh@gmail.com","Name":"Rahul"},
        {"email": "gsh@gmail.com","Name":"Yash"},

    ]


const FundHouse=()=>{
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
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

           <div>Address</div>
           <InputText value={address} onChange={(e) => setAddress(e.target.value)} /><br></br>
           <div>Add Email</div>
           <InputText value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
           <div>Add Name</div>
           <InputText value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
           <Button label="Add" icon="pi pi-plus" />

           <div>
            <div className="card">
                <DataTable value={data} responsiveLayout="scroll">
                    <Column field="email" header="Email"></Column>
                    <Column field="Name" header="Name"></Column>
                </DataTable>
            </div>
        </div>
        <Button label="Submit" />

           
       




        </div>
    )




}

export default FundHouse