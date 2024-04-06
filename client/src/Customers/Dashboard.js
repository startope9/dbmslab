import { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import './dash.css'

export default function Dashboard() {

    const [dash, setDash] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            await fetch('http://localhost:5000/fordash', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json'
                },
                credentials: 'include',
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log(res)
                    setDash(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        })();
    }, [])

    return (
        <div>
            <div className="headingsub">
                <div style={{ 'fontSize': 'large' }} onClick={() => { navigate('/') }} >Hotel Nexus!</div>
            </div>
            <div className='line'></div>
            <table>
                <tr>
                    <th>Sl no.</th>
                    <th>Hotel Name</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                    <th>Rating</th>
                </tr>
                {dash.map((each, index) => (
                    <tr key={index}>
                        <td>{index + 1}.</td>
                        <td>{each[0]}</td>
                        <td>{each[1]}</td>
                        <td>{each[2]}</td>
                        <td>{each[3]}</td>
                        <td>{each[4]}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
