import React, {useState} from 'react';

// material components
import {
    Button,
    TextField,
    DialogActions, makeStyles, CircularProgress,
} from "@material-ui/core";
import ErrorDialog from "./ErrorDialog";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    position: 'absolute',
    marginRight: '10%',
  },
}));

function Register(props) {
    const classes = useStyles();
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    };

    return(
        <>
        <ErrorDialog
            open={props.error}
            message={props.message}
            severity={'error'}
        />
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <TextField
                autoFocus
                margin="dense"
                name="username"
                label="Username"
                value={state.username}
                onChange={handleChange}
                variant="outlined"
            />
            <TextField
                margin="dense"
                name="email"
                label="Email"
                value={state.email}
                onChange={handleChange}
                variant="outlined"
            />
            <TextField
                margin="dense"
                name="password"
                label="Password"
                type="password"
                value={state.password}
                onChange={handleChange}
                variant="outlined"
            />
        </div>
        <DialogActions className={classes.wrapper}>
            <Button onClick={props.handleClose} variant="outlined" color="secondary">Cancel</Button>
            <Button variant="contained" color="primary" disabled={props.loading}>Register</Button>
            {props.loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </DialogActions>
        </>
    )

}

export default Register;