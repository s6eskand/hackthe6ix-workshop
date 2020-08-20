import React from 'react';

// material components
import {
    Alert
} from "@material-ui/lab";
import {
    Snackbar
} from "@material-ui/core";

function ErrorDialog(props) {

    return (
        <Snackbar
            open={props.open}
            autoHideDuration={6000}
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        >
            <Alert variant="filled" severity={props.severity}>
                {props.message}
            </Alert>
        </Snackbar>
    );
}

export default ErrorDialog;