import React from 'react';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

import Fab from '@material-ui/core/Fab';
import blue from '@material-ui/core/colors/blue';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  input: {
    display: 'none',
  },
  button: {
    color: blue[900],
    margin: 10,
  },
}));

const ImageUploadCard = ({setImage}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={(event) => {
            //TODO: Upload file event.target.files[0]
            setImage("https://storage.googleapis.com/home-wall-images/wall.jpg");
        }}
      />
      <label htmlFor="contained-button-file">
        <Fab component="span" className={classes.button}>
          <AddPhotoAlternateIcon />
        </Fab>
      </label>
    </div>
  );
};

export default ImageUploadCard;
