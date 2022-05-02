import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function ProfileSettings() {
  return (
    <div style={styles.container}>
        <Typography variant="h3" component="div" style={styles.h2}>
            Profile Settings
        </Typography>
    
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div style={styles.form}>
                <TextField
                required
                id="standard-required"
                label="First Name Required"
                defaultValue="Aleyna"
                variant="standard"
                />
                <TextField
                required
                id="standard-required"
                label="Last Name Required"
                defaultValue="Cintron"
                variant="standard"
                />
                <TextField
                required
                id="standard-required"
                label="Email Required"
                type="email"
                defaultValue="acintron1@student.fullsail.edu"
                variant="standard"
                />
                <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                />
                <Button variant="outlined">Update Profile</Button>
            </div>
        </Box>
    </div>
  );
}
export default ProfileSettings

const styles = {
    container: {
        padding:'3rem',
        maxWidth: '80%',
        margin: 'auto'
    },
    form: {
        display:'flex',
        flexDirection: 'column',
        padding: '3rem',
        margin: 'auto',
        textAlign: 'center',
        maxWidth: '20%',
        gap: '25px'
    },
    h2: {
        textAlign: 'center'
    }
}