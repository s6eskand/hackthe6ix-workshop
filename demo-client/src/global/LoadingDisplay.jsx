import React from 'react';

import {
    Dialog,
    CircularProgress
} from "@material-ui/core";

function LoadingDisplay(props) {
    return(
        <Dialog
            open={props.loading}
            style={{backgroundColor: 'transparent'}}
            overlayStyle={{backgroundColor: 'transparent'}}
        >
            <CircularProgress />
        </Dialog>
    )
}

export default LoadingDisplay;