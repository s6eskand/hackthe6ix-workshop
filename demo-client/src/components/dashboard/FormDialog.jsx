import React, {useEffect, useState} from 'react';

// material components
import {
    TextField,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogContentText,
    DialogActions,
} from "@material-ui/core";
import {CANCEL, CREATE_DESCRIPTION, CREATE_TITLE, EDIT_DESCRIPTION, EDIT_TITLE, SAVE} from "./constants";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

function FormDialog(props) {
    const [state, setState] = useState({
        name: '',
        album: '',
        image: '',
        artist: '',
        favourite: false,
        rating: 0,
    });

    useEffect(() => {
        if (props.isEdit) {
            setState({
                ...state,
                name: props.music.name,
                album: props.music.album,
                image: props.music.image,
                artist: props.music.artist,
                favourite: props.music.favourite,
                rating: props.music.rating
            })
        }
    }, [props.open]);

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    };

    const handleCheck = () => {
        setState({
            ...state,
            favourite: !state.favourite
        })
    };

    const saveEdit = () => {
        const data = {
            name: state.name,
            image: state.image,
            album: state.album,
            artist: state.artist,
            rating: state.rating,
            favourite: state.favourite,
            owner: props.music.id
        };
        props.edit(data, props.handleClose, props.music.id)
    };

    const saveCreate = () => {
        const data = {
            name: state.name,
            image: state.image,
            album: state.album,
            artist: state.artist,
            rating: state.rating,
            favourite: state.favourite,
            owner: props.userInfo.id
        };
        props.create(data, props.handleClose);
    };

    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
        >
            <DialogTitle>{props.isEdit ? EDIT_TITLE : CREATE_TITLE}</DialogTitle>
            <DialogContentText style={{margin: '20px'}}>{props.isEdit ? EDIT_DESCRIPTION : CREATE_DESCRIPTION}</DialogContentText>
            <DialogContent style={{margin: '20px'}}>
                <TextField
                    style={{margin: '10px'}}
                    margin="dense"
                    onChange={handleChange}
                    value={state.name}
                    name="name"
                    label="Song Name"
                />
                <TextField
                    style={{margin: '10px'}}
                    margin="dense"
                    onChange={handleChange}
                    value={state.album}
                    name="album"
                    label="Album"
                />
                <TextField
                    style={{margin: '10px'}}
                    margin="dense"
                    onChange={handleChange}
                    value={state.artist}
                    name="artist"
                    label="Artist"
                />
                <TextField
                    style={{margin: '10px'}}
                    margin="dense"
                    onChange={handleChange}
                    value={state.image}
                    name="image"
                    label="Image"
                />
                <TextField
                    style={{margin: '10px'}}
                    margin="dense"
                    onChange={handleChange}
                    value={state.rating}
                    type="number"
                    name="rating"
                    label="Rating"
                />
                <FormControlLabel
                    style={{margin: '10px'}}
                    control={<Checkbox checked={state.favourite} onChange={handleCheck} name="favourite" />}
                    label="Favourite"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>{CANCEL}</Button>
                <Button onClick={props.isEdit ? saveEdit : saveCreate}>{SAVE}</Button>
            </DialogActions>
        </Dialog>
    )
}

export default FormDialog;