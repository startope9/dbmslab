import { useNavigate } from "react-router";

export default function Nav() {

    const navigate = useNavigate();


    const Logout = () => {
        (async () => {
            await fetch('http://localhost:5000/out', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                credentials: 'include'
            })
                .then(res => res.json())
                .then((res) => {
                    console.log(res)
                    if (res === 200) navigate('/')
                })
                .catch((err) => {
                    console.log(err)
                })
        })();
    }

    return (
        <div>
            <div className="headingsub">
                <div style={{ 'fontSize': 'large' }} onClick={() => { navigate('/successLogin') }}>Hotel Nexus!</div>
                <section className="anotherpart">
                    <span onClick={() => { navigate('/my-account') }}>Account</span>
                    <span onClick={() => { Logout() }}>Logout</span>
                </section>
            </div>
            <div className='line'></div>
        </div>
    )
}