import { useEffect, useState } from 'react';
import './modal.css'

export default function Modal({ handleClose, show, children, idx, result, total }) {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    const [allocated, setAllocated] = useState([])
    const [status, setstatus] = useState(false)

    useEffect(() => {
        console.log('ineffectmodal', idx, result, total)
    }, [idx, result, total])

    const handleTransaction = () => {
        (async () => {
            await fetch('http://localhost:5000/booked', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    'hid': idx,
                    'rooms': result,
                    'amount': total
                })
            })
                .then(res => res.json())
                .then((res) => {
                    console.log(res)
                    if (res[0] === 500) { setstatus(false); setAllocated([res[1]]) }
                    else {
                        setAllocated(allocated => {
                            return res
                        })
                        setstatus(true)
                    }

                })
                .catch((err) => {
                    console.log(err)
                })
        })();
    }

    return (

        <div className={showHideClassName}>
            <section className="modal-main">
                <div style={{ 'textAlign': 'right' }} className='close-modal' onClick={handleClose}>X</div>

                {status ?
                    (<div>
                        <section>Transaction successful with id: {allocated[allocated.length - 1]}</section>
                        <table className='room-det'>
                            <tr>
                                <th>Room Number</th>
                                <th>nBeds</th>
                            </tr>
                            {allocated.slice(0, allocated.length - 1).map((eachRoom, index) => (
                                <tr key={index}>
                                    <td>{eachRoom[0]}</td>
                                    <td>{eachRoom[1]}</td>
                                </tr>
                            ))}
                        </table>

                    </div>)
                    :
                    (<div>

                        {allocated.length ?
                            <>
                                <section>Transaction Failed with transaction id - {allocated[0]}</section>
                                <button type="button" onClick={handleTransaction}>
                                    Pay Again
                                </button>
                            </> :
                            <>
                                {children}
                                <button type="button" onClick={handleTransaction}>
                                    confirm and pay
                                </button>
                            </>}



                    </div>)

                }
            </section>
        </div>
    )
}




