import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

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
      <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick={onCreate}>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default AddProblemButton;
