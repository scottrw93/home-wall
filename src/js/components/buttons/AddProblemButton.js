import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,

    left: 'auto',
    right: 0,
    position: 'fixed',

    width: '100%',
    display: 'flex',
    zIndex: 1100,
    boxSizing: 'border-box',
    flexShrink: 0,
    flexDirection: 'column',
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    //position: 'absolute',
    zIndex: 1,
    top: -15,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

const AddProblemButton = ({ onCreate }) => {
  const classes = useStyles();

  return (
    <div color="primary" className={classes.appBar}>
      <Fab
        color="secondary"
        aria-label="add"
        className={classes.fabButton}
        onClick={onCreate}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default AddProblemButton;
