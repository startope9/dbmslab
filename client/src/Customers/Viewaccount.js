import { Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import './view.css'
import Nav from "./Nav";

export default function Viewaccount() {

    const [curr, setCurr] = useState([])
    const [hotels, setHotels] = useState([])
    const [reviews, setReviews] = useState('')

    useEffect(() => {
        (async () => {
            await fetch('http://localhost:5000/getUser', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                credentials: 'include'
            })
                .then(res => res.json())
                .then((res) => {
                    console.log(res)
                    setCurr(res[0])
                    setHotels(res[1])
                })
                .catch((err) => {
                    console.log(err)
                })
        })();
    }, []);

    const CancelBooks = (idx) => {
        (async () => {
            await fetch('http://localhost:5000/cancel', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    'cancelled': curr[idx]
                })
            })
                .then(res => res.json())
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        })();

    }


    const handleReview = (idx) => {
        (async () => {
            await fetch('http://localhost:5000/review', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    'hotel': hotels[idx],
                    'rev': reviews
                })
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        })();
    }

    const handleAccountD = () => {
        (async () => {
            await fetch('http://localhost:5000/delete', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json'
                },
                credentials: 'include'
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log(res)
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
                <div>
                    {/* <Button onClick={handleAccountD} color="error" variant="outlined" style={{ 'margin': '5px' }}>Delete Account</Button> */}
                </div>
            </div>

            <div className='line'></div>

            <div>
                {curr.length ?

                    (
                        <div>
                            <section>Hotel Booked:</section>

                            <div className="senior">
                                {curr.map((eachEle, index) => (
                                    <div key={index} className="bookdetails">
                                        <legend style={{ 'marginBottom': '20px' }}>{eachEle[0]}:</legend>
                                        <div>
                                            <span>{eachEle[2]}</span>
                                            <span>{eachEle[3]}</span>
                                        </div>
                                        <center>
                                            <table style={{ 'textAlign': 'center', 'color': 'white' }}>
                                                <tr>
                                                    <th>Rooms</th>
                                                    <th>nBeds</th>
                                                </tr>
                                                {eachEle[1].map((rooms, index) => (
                                                    <tr key={index} >
                                                        <td>{rooms[0]}</td>
                                                        <td>{rooms[1]}</td>
                                                    </tr>
                                                ))}
                                            </table>
                                        </center>
                                        <div style={{ 'textAlign': 'right' }}><Button variant="contained" onClick={() => CancelBooks(index)}>Cancel</Button></div>

                                    </div>
                                ))}

                            </div>
                        </div>)
                    :


                    'No hotels booked currently'}
            </div>

            <div>
                <div className='line'></div>
                <center>
                    {hotels.length ?

                        (<div style={{ 'marginBottom': '30px' }}>
                            <Typography variant="body1" style={{ 'color': 'white' }}>Share your experience below., and pave the way for improvement..</Typography>

                            {hotels.map((ele, index) => (
                                <div key={index} className="each-review">
                                    <div style={{ 'textAlign': 'left' }}>{ele[1]}</div>
                                    <span style={{ 'textAlign': 'left' }}>{ele[2] + ' ' + ele[3] + ' ' + ele[4]}</span>
                                    <div className="inp-review">
                                        <div><TextField fullWidth variant="filled" label='review' onChange={(e) => setReviews(e.target.value)} /></div>
                                        <div style={{ 'marginTop': '10px', 'textAlign': 'right' }}><Button variant="contained" onClick={() => handleReview(index)}>Submit</Button></div>
                                    </div>
                                </div>
                            ))}
                        </div>)


                        : 'Already given review to above hotel(s)!'}
                </center>
            </div>
        </div>
    )
}

