import { TextField, Typography, Autocomplete, Button } from "@mui/material"; import * as React from 'react';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useNavigate } from 'react-router-dom';

import './postlogin.css'
import Nav from "./Nav";

export default function PostLogin() {

    const naviagte = useNavigate();

    const [available, setAvailable] = React.useState([])

    const [fromDate, setFromDate] = React.useState('')
    const [afterDate, setAfterDate] = React.useState('')
    const [selectedHotel, setSelectedHotel] = React.useState(null);

    const [fromalert, setFromAlert] = React.useState('')
    const [afteralert, setAfterAlert] = React.useState('')


    const [hr, setHr] = React.useState([])
    const [shr, setshr] = React.useState('')


    const checkFrom = (sel_date) => {
        var today = new Date(new Date().toDateString())
        var sd = new Date(sel_date['$d'].toDateString())
        var After = afterDate.length ? new Date(afterDate) : ''
        if (afterDate.length && sd < After && sd >= today) { setFromDate(sd.toDateString()); setFromAlert(''); }
        else if (afterDate.length === 0 && sd >= today) { setFromDate(sd.toDateString()); setFromAlert(''); }
        else setFromAlert('select valid date')
    }

    const checkAfter = (sel_date) => {
        var today = new Date(new Date().toDateString())
        var sd = new Date(sel_date['$d'].toDateString());
        var From = fromDate.length ? new Date(fromDate) : ''
        if (fromDate.length && sd > From) { setAfterDate(sd.toDateString()); setAfterAlert(''); }
        else if (fromDate.length === 0 && sd > today) { setAfterDate(sd.toDateString()); setAfterAlert(''); }
        else setAfterAlert('select valid date')
    }

    const handleHotelChange = (event, newValue) => {
        setSelectedHotel(newValue);
        // You can perform additional logic here based on the selected value
        console.log('Selected Hotel:', newValue);
    };

    const handleFilter = () => {
        console.log(fromDate, '\n', afterDate, '\n', selectedHotel);
        console.log(JSON.stringify({
            location: selectedHotel['label'],
            In: fromDate,
            To: afterDate
        }));
        (async () => {
            await fetch('http://localhost:5000/getHotels', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    'location': selectedHotel['label'],
                    'In': fromDate,
                    'To': afterDate
                })
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log(res)
                    setAvailable(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        })();
    }

    function headache(idx) {
        if (idx) document.getElementById(`${idx}`).classList.add('extra')
    }
    function headacheoff(idx) {
        if (idx) document.getElementById(`${idx}`).classList.remove('extra')
    }

    const top100Films = [
        { label: 'bangalore' },
        { label: 'mangalore' },
        { label: 'hospet' },
        { label: 'tumkur' },
        { label: 'hampi' },
        { label: "delhi" },
        { label: 'mumbai' }
    ]


    const PlsCheck = (idx) => {
        naviagte(`/hotel/${idx}`)
    }



    const GetReviews = (idx) => {
        (async () => {
            await fetch('http://localhost:5000/getreviews', {
                method: "POST",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    'hid': idx
                })
            })
                .then(res => res.json())
                .then((res) => {
                    console.log(res)
                    setHr(res[0])
                    setshr(res[1])
                })
                .catch((err) => {
                    console.log(err)
                })
        })();
    }


    return (
        <div>
            <Nav />
            <div>
                <section style={{ 'color': 'white' }}>
                    <Typography variant="h5">Find your next Stay!!</Typography>
                    <Typography variant="body1">Search for low prices, book based on rating and many more..</Typography>
                </section>
            </div>
            <center>

                <div className="filters-hotel">
                    <div>
                        <Autocomplete
                            fullWidth
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 300 }}
                            onChange={handleHotelChange}
                            renderInput={(params) => <TextField {...params} label="Hotels" />}
                        />
                    </div>
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker fullWidth label="Check-in" onChange={(e) => checkFrom(e)} />
                            </DemoContainer>
                        </LocalizationProvider>
                        {fromalert}
                    </div>
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']} >
                                <DatePicker fullWidth label="Check-out" onChange={(e) => checkAfter(e)} />
                            </DemoContainer>
                        </LocalizationProvider>
                        {afteralert}
                    </div>

                    <div><Button fullWidth variant="contained" onClick={handleFilter}>Submit</Button></div>
                </div>
            </center>


            {available.length ?

                (
                    <div className="contain-hotels">
                        <div >

                            {available.map((eachHotel) => (
                                <div key={eachHotel[0]} id={eachHotel[0]} className='hotels-display' onMouseEnter={(e) => headache(e.target.id)} onMouseLeave={(e) => headacheoff(e.target.id)}>
                                    <div ><img src={require(`../Customers/hotels/${eachHotel[1]}.png`)} alt="chika" /></div>
                                    <div style={{ 'color': "white" }} className="right-photo">
                                        <div className="name-feedback">
                                            <Typography variant="h4"> {eachHotel[1]}</Typography>
                                            <span onClick={() => GetReviews(eachHotel[0])}>reviews</span>
                                        </div>
                                        <div>
                                            <span>Rating: {eachHotel[5]}</span>
                                            <div className="check-avai-button">
                                                <Button variant="contained" onClick={() => PlsCheck(eachHotel[0])}>Check Availibility</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div>
                            {
                                hr.length ?
                                    (
                                        <div className="hr-vals">
                                            <section>Reviews of hotel: {shr}</section>
                                            {hr.map((eachR, index) => (
                                                <div key={index}>
                                                    <section>user: {eachR[0]}</section>
                                                    <span>review: {eachR[1]}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )
                                    : ''
                            }
                        </div>
                    </div>

                )

                :

                (<div>

                </div>)

            }

        </div>
    )
}


