import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const FundHouse = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [desc, setDesc] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <div>Username</div>
            <InputText value={name} onChange={(e) => setName(e.target.value)} /><br></br>

            <div>
                <h1>Upload and Display Image usign React Hook's</h1>
                {selectedImage && (
                    <div>
                        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                        <br />
                        <button onClick={() => setSelectedImage(null)}>Remove</button>
                    </div>
                )}
                <br />

                <br />
                <input
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                    }}
                />
            </div>

            <div>Email</div>
            <InputText value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>

            <div>Password</div>
            <InputText value={desc} onChange={(e) => setDesc(e.target.value)} /><br></br>

            <Button label="Submit" />




        </div>
    )




}

export default FundHouse