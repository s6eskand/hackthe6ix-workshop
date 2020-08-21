import React, {useState, useEffect} from 'react';

// styling
import styles from './Dashboard.module.css';

import {
    Button
} from "@material-ui/core";

// redux
import withShipment from "../../withShipment";
import {
    fetchAllMusic,
    editMusic,
    createMusic,
    deleteMusic,
} from "../../redux/actions/main";
import {
    musicSelector,
    loadingSelector,
} from "../../redux/selectors/main";
import {
    userInfoSelector
} from "../../redux/selectors/auth";
import Music from "./cards/Music";
import {CREATE_ACTION} from "./constants";
import FormDialog from "./FormDialog";

function Dashboard(props) {
    const [state, setState] = useState({
        music: [],
        dialogOpen: false,
    });

    useEffect(() => {
        props.fetchAllMusic();
        setState({
            ...state,
            music: props.music
        })
    }, [props.music]);

    const handleDialogClose = () => {
        setState({
            ...state,
            dialogOpen: false
        })
    };

    return(
        <div className={styles.main}>
            <FormDialog
                open={state.dialogOpen}
                handleClose={handleDialogClose}
                isEdit={false}
                create={props.createMusic}
                userInfo={props.userInfo}
            />
            <h1>Welcome to your music application.</h1>
            <h3>View your music, or add some to the list, or delete some. Idk, the world is your oyster I guess</h3>
            <div className={styles.cardDisplay}>
            {state.music.map(song => (
                <Music
                    music={song}
                    edit={props.editMusic}
                    delete={props.deleteMusic}
                    userInfo={props.userInfo}
                />
            ))
            }
            </div>
            <Button variant="outlined" onClick={() => setState({...state, dialogOpen: true})}>
                {CREATE_ACTION}
            </Button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    music: musicSelector(state),
    userInfo: userInfoSelector(state),
    loading: loadingSelector(state)
});

const actionCreators = {
    fetchAllMusic,
    editMusic,
    createMusic,
    deleteMusic,
};

export default withShipment({
    mapStateToProps,
    actionCreators
}, Dashboard)