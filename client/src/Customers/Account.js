import { Button, TextField } from '@mui/material'
import './account.css'
import { useState } from 'react'

export default function Account() {


    const [vals, setVals] = useState({
        name: "",
        mobileNo: "",
        mail: "",
        gender: "",
        dob: "",
        aadharNo: "",
        streetNo: "",
        city: "",
        state: "",
        country: "",
        password: ""
    });


    const handleSubmit = () => {
        console.log(vals);
        (async () => {
            await fetch('http://localhost:5000/create', {
                method: "POST",
                headers:
                {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    'acc': vals
                })
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err);
                })
        })();
    }

    return (
        <div>
            <div className="headingsub">
                <div style={{ 'fontSize': 'large' }}>Hotel Nexus!</div>
            </div>
            <div className='line'></div>

            <div>

                <section>Fill the below form: </section>

                <div className='form'>

                    <div>
                        <TextField variant='outlined' label='Name' onChange={(e) => setVals({ ...vals, name: e.target.value })} />
                    </div>

                    <div>
                        <TextField variant='outlined' label='Mobile No.' onChange={(e) => setVals({ ...vals, mobileNo: e.target.value })} />
                    </div>

                    <div>
                        <TextField variant='outlined' label='Email' onChange={(e) => setVals({ ...vals, mail: e.target.value })} />
                    </div>
                    <div>
                        <TextField variant='outlined' label='Aadhar-number' onChange={(e) => setVals({ ...vals, aadharNo: e.target.value })} />
                    </div>

                    <div>
                        <TextField variant='outlined' label='Street No.' onChange={(e) => setVals({ ...vals, streetNo: e.target.value })} />
                        <TextField variant='outlined' label='City' onChange={(e) => setVals({ ...vals, city: e.target.value })} />
                        <TextField variant='outlined' label='State' onChange={(e) => setVals({ ...vals, state: e.target.value })} />
                        <TextField variant='outlined' label='Country' onChange={(e) => setVals({ ...vals, country: e.target.value })} />
                    </div>

                    <div>
                        <TextField variant='outlined' label='Gender' onChange={(e) => setVals({ ...vals, gender: e.target.value })} />
                    </div>

                    <div>
                        <TextField variant='outlined' label='DOB' placeholder='yyyy-mm-dd' onChange={(e) => setVals({ ...vals, dob: e.target.value })} />
                    </div>

                    <div>
                        <TextField variant='outlined' label='Set Passord' />
                        <TextField variant='outlined' label='Confirm Passord' onChange={(e) => setVals({ ...vals, password: e.target.value })} />
                    </div>

                </div>


                <div><Button variant='contained' onClick={handleSubmit}>Submit</Button></div>

            </div>

        </div>
    )


}

