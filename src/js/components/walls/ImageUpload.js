import React from 'react';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

import Fab from '@material-ui/core/Fab';
import blue from '@material-ui/core/colors/blue';

import { makeStyles } from '@material-ui/core/styles';

import { uploadWallImage } from '../../api/HomeWallApi';

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

const ImageUploadCard = ({ setImage }) => {
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
          uploadWallImage(event.target.files[0]).then(({ src }) => setImage(src));
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
