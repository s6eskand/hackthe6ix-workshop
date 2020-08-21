import React, {useEffect, useState} from 'react';

// material components
import {
    Card,
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
    Delete as DeleteIcon
} from "@material-ui/icons";

function Music(props) {
    const [state, setState] = useState({
        isEdit: false,
        deleteOpen: false,
        name: '',
        image: '',
        album: '',
        artist: '',
        rating: 0.0,
        favourite: false,
    });

    useEffect(() => {
        setState({
            ...state,
            name: props.music.name,
            image: props.music.image,
            album: props.music.album,
            artist: props.music.artist,
            rating: props.music.rating,
            favourite: props.music.favourite
        })
    }, [props.music]);

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

}

export default Music;