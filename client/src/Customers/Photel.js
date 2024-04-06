import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Modal from './Modal'
import Nav from "./Nav";


export default function Photel() {

    let { idx } = useParams();

    const [rooms, setRooms] = useState([])
    const [cost, setCost] = useState([])

    const [ndays, setNdays] = useState(0)

    const [result, setResult] = useState([])

    const [statemodal, setStateModal] = useState(false)


    useEffect(() => {
        console.log(idx);
        (async () => {
            await fetch('http://localhost:5000/emptyRooms', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    'idx': idx
                })
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log(res);
                    setRooms(res[0]);
                    setCost(res[1]);
                    setNdays(res[2])
                    setResult(Array(res[0].length).fill(0))
                })
                .catch((err) => {
                    console.log(err)
                })
        })();
    }, [idx])


    const handleRooms = (value, idx) => {

        setResult(result => {
            return [
                ...result.slice(0, idx),
                value,
                ...result.slice(idx + 1),
            ]
        })
    }

    const total = () => {
        var s = 0;
        for (var i = 0; i < result.length; i++)
            s += result[i] * cost[i] * ndays;
        return s;
    }


    const UpdateRooms = () => {
        console.log('uodating without submit 😭 in');
        setStateModal(true);
        // (async () => {
        //     await fetch('http://localhost:5000/booked', {
        //         method: 'POST',
        //         headers: {
        //             'Access-Control-Allow-Origin': '*',
        //             'Content-type': 'application/json'
        //         },
        //         credentials: 'include',
        //         body: JSON.stringify({
        //             'hid': idx,
        //             'rooms': result,
        //             'amount': total()
        //         })
        //     })
        //         .then(res => res.json())
        //         .then((res) => {
        //             console.log(res)
        //         })
        //         .catch((err) => {
        //             console.log(err)
        //         })
        // })();
    }

    const hidemodal = () => {
        setStateModal(false)
    }

    return (
        <div>
            <Modal show={statemodal} handleClose={hidemodal} idx={idx} result={result} total={total()}>
                <div className="inside">
                    The total Amount to pay is {total()}
                </div>
            </Modal>

            <Nav />

            <table style={{ 'marginTop': '50px' }}>
                <tr>
                    <th>Beds</th>
                    <th>Room's available</th>
                    <th>Cost</th>
                    <th>Select</th>
                    <th>Total Amount</th>
                </tr>
                {rooms.map((eachRoom, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{eachRoom}</td>
                        <td>{cost[index]}</td>
                        <td><input type="number" style={{ 'width': '90%' }} min={0} max={eachRoom} defaultValue={0} onChange={(e) => handleRooms(e.target.value, index)} /></td>
                        <td>{result[index] * cost[index]}</td>
                    </tr>
                ))}
                <tr>
                    <td colSpan={4} style={{ 'textAlign': 'right' }}>Sum:</td>
                    <td >{total()}</td>
                </tr>
            </table>
            <div>
                <Button variant="contained" onClick={() => UpdateRooms()}>Proceed Payment</Button>
            </div>

        </div>
    )
}