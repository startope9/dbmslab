import { Button, TextField } from "@mui/material";

export default function AdminHome() {

    return (
        <div>
            <div className="headingsub">
                <div style={{ 'fontSize': 'large' }}>Hotel Nexus!</div>
            </div>
            <div className='line'></div>

            <center style={{ 'marginTop': '20px' }}>
                <div style={{ 'marginBottom': '20px', 'color': 'white' }}>Enter details to access Hotel Nexus Hotel info - only 3 attempts allowed</div>
                <div style={{
                    'display': 'flex',
                    'flexDirection': 'column',
                    'width': '80%'
                }}>
                    <TextField variant="outlined" label='Name' style={{ 'marginBottom': '20px' }} />
                    <TextField variant="outlined" label='Password' style={{ 'marginBottom': '20px' }} />
                    <Button variant='contained'>Submit</Button>
                </div>
            </center>

        </div>
    )

}

