import React, {useEffect, useState} from 'react';

// custom components
import Login from "./Login";
import Register from "./Register";

// material components
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogContentText,
    DialogActions,
    Button
} from "@material-ui/core";

// constants
import {
    LOGIN_TITLE,
    REGISTER_TITLE,
    LOGIN_DESCRIPTION,
    REGISTER_DESCRIPTION, NO_ACCOUNT, HAVE_ACCOUNT
} from "./constants";
import ErrorDialog from "./ErrorDialog";

function AuthDialog(props) {

    return(
        <>
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle>{props.isLogin ? LOGIN_TITLE : REGISTER_TITLE}</DialogTitle>
            <DialogContent>
                <DialogContentText>{props.isLogin ? LOGIN_DESCRIPTION : REGISTER_DESCRIPTION}</DialogContentText>
                {props.isLogin ?
                    <Login
                        error={props.error}
                        message={props.message}
                        login={props.authLogin}
                        handleClose={props.handleClose}
                        loading={props.loading}
                    /> :
                    <Register
                        error={props.error}
                        message={props.message}
                        register={props.authRegister}
                        handleClose={props.handleClose}
                        loading={props.loading}
                    />
                }
                <DialogActions>
                    <Button onClick={props.switchView}>{props.isLogin ? NO_ACCOUNT : HAVE_ACCOUNT}</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
        </>
    )
}

export default AuthDialog;