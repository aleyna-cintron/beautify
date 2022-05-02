import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'; 
import useLocalStorage from '../hooks/useLocalStorage';



function ProfileSettings() {
    const [firstName, setFirstName] = useLocalStorage('firstName','Aleyna')
    const [lastName, setLastName] = useLocalStorage('lastName','Cintron')
    const [email, setEmail] = useLocalStorage('email','acintron1@student.fullsail.edu')
    const [password, setPassword] = useLocalStorage('password','password123')

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
                variant="standard"
                name='firstName'
                id='firstName'
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                />
                <TextField
                required
                id="standard-required"
                label="Last Name Required"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                variant="standard"
                />
                <TextField
                required
                id="standard-required"
                label="Email Required"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                variant="standard"
                />
                <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                autoComplete="current-password"
                variant="standard"
                />
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