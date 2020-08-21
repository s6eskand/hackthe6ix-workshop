import React, {useEffect, useState} from 'react';

// styling
import styles from './Music.module.css';

import FormDialog from "../FormDialog";

// material components
import {
    Card,
    CardHeader,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    IconButton,
    Tooltip
} from "@material-ui/core";

// material icons
import {
    Edit as EditIcon,
    Delete as DeleteIcon,
    Favorite as FavoriteIcon
} from "@material-ui/icons";
import {ADD_FAVOURITE, DELETE_MUSIC, REMOVE_FAVOURITE, EDIT_MUSIC} from "./constants";

function Music(props) {
    const [toEdit, setToEdit] = useState({});
    const [state, setState] = useState({
        isEdit: false,
        openDialog: false,
        id: 1,
        name: '',
        image: '',
        album: '',
        artist: '',
        rating: 0.0,
        favourite: false,
        owner: 1,
    });

    useEffect(() => {
        setState({
            ...state,
            id: props.music.id,
            name: props.music.name,
            image: props.music.image,
            album: props.music.album,
            artist: props.music.artist,
            rating: props.music.rating,
            favourite: props.music.favourite,
            owner: props.music.owner
        })
    }, [toEdit, props.state]);

    const handleEdit = () => {
        const toEdit = {
            id: state.id,
            name: state.name,
            artist: state.artist,
            album: state.album,
            image: state.image,
            favourite: state.favourite,
            rating: state.rating,
            owner: state.owner
        };
        setToEdit(toEdit);
        setState({
            ...state,
            isEdit: true,
            openDialog: true,
        })
    };

    const handleDialogClose = () => {
        setState({
            ...state,
            openDialog: false
        })
    };

    return (
        <>
        <FormDialog
            open={state.openDialog}
            music={toEdit}
            isEdit={state.isEdit}
            handleClose={handleDialogClose}
            edit={props.edit}
            create={props.create}
        />
        <Card className={styles.cardRoot}>
            <CardHeader title={state.name} subheader={`${state.artist} - ${state.album}`} />
            <CardMedia
                className={styles.cardMedia}
                image={state.image}
            />
            <CardActions>
                <Tooltip style={state.favourite ? {color: 'red'} : null} title={state.favourite ? REMOVE_FAVOURITE : ADD_FAVOURITE} arrow>
                    <IconButton>
                        <FavoriteIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title={EDIT_MUSIC} onClick={handleEdit} arrow>
                    <IconButton>
                        <EditIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title={DELETE_MUSIC} onClick={() => props.delete({id: props.music.id})} arrow>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                {state.rating}
            </CardActions>
        </Card>
        </>
    )

}

export default Music;