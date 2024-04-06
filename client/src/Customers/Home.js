import { Link, useNavigate } from 'react-router-dom';
import './home.css'
import { TextField, Button } from '@mui/material';
import { useState } from 'react';


export default function Home() {

    const [user, setuser] = useState('')
    const [passw, setPassw] = useState('')
    const [chika, setchika] = useState('')


    const navigate = useNavigate();

    const handleLogin = () => {

        (async () => {
            await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    'name': user,
                    'password': passw
                })
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log(res)
                    if (res === 500) setchika('username does\'t exists')
                    else if (res === 300) setchika('incorrect password!')
                    else navigate('/successLogin')
                })
                .catch((err) => {
                    console.log(err)
                })
        })();
    }


    return (
        <div className='page'>
            <div className="heading">
                <div style={{ 'fontSize': 'xx-large' }}>Hotel Nexus!</div>
                <div style={{ 'fontSize': 'small' }}>Easy way to book hotels</div>
            </div>

            <center>
                <div className='home-intro'>
                    <img src={require('../Customers/images/hotelhome.webp')} alt='hotelimg' />
                    <div>
                        "Hotel Nexus" if finest and most trusted party while booking hotel by comparing with other hotels simultaneously.
                        Reducing your time surfing in the hotels respective website, hotel nexus is all-in-one, with comparison in one platform
                        one can book faster!!
                        What you are waiting for sign up and start celebrating with finest hotels!!
                    </div>
                </div>

                <div className='line'></div>

                <div className='Login'>
                    <div>Login..?  <span
                        style={{
                            'fontSize': 'small',
                            'marginLeft': '5px'
                        }} ><Link to='/new-account'>Create Account</Link>

                    </span>

                    </div>
                    <TextField variant='filled' label='username' onChange={(e) => setuser(e.target.value)} />
                    <TextField variant='filled' label='password' type='password' onChange={(e) => setPassw(e.target.value)} />
                    {chika}
                    <Button variant='contained' onClick={handleLogin} >Submit</Button>
                </div>

            </center>

            <div className='line'></div>

            <div className='footer'>
                <div>
                    <section>To see the hotels invovled - <i><a href='/hotelDashboard'>Click here!</a></i></section>
                </div>
                <div>
                    <div>Founder:</div>
                    <ul>
                        <li>Name:<span>xyz</span></li>
                        <li>Studied:<span>abc</span></li>
                    </ul>
                </div>
                <div>
                    <div>Contact Us:</div>
                    <ul>
                        <li>Email:<span>hotelnexus@yahoo.reach</span></li>
                        <li>Instagram:<span>Hotel Nexus</span></li>
                        <li>Mobile:<span>666-10-9982</span></li>
                        <li>Address:<span>27th, avenue road, bangalore.</span></li>
                    </ul>
                </div>
            </div>

        </div>
    )

}

