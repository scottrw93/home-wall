import React, { useState } from 'react';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

import Fab from '@material-ui/core/Fab';
import blue from '@material-ui/core/colors/blue';

import { makeStyles } from '@material-ui/core/styles';

import { uploadWallImage } from '../../api/HomeWallApi';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
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

  const [loading, setLoaing] = useState(false);

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={(event) => {
          setLoaing(true);
          uploadWallImage(event.target.files[0]).then(({ src }) => {
            setImage(src);
            setLoaing(false);
          });
        }}
      />
      <label htmlFor="contained-button-file">
        <Fab component="span" className={classes.button}>
          {!loading ? <AddPhotoAlternateIcon /> : <CircularProgress />}
        </Fab>
      </label>
    </div>
  );
};

export default ImageUploadCard;
