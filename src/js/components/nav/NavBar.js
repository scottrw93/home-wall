import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Login from '../login/Login';
import MenuDrawer from './MenuDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  narrow: {
    [theme.breakpoints.up('sm')]: {
      width: 'calc(100% - 250px)',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  spacer: {
    width: '100%',
    height: '95px',
  },
}));

const NavBar = ({ wall: { name }, walls, changeWall, onLoginChange, setPage }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <AppBar className={open ? classes.narrow : null} position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {name}
          </Typography>
          <Login onLoginChange={onLoginChange} />
        </Toolbar>
      </AppBar>
      <div className={classes.spacer} />
      <MenuDrawer
        walls={walls}
        open={open}
        changeWall={changeWall}
        setPage={setPage}
        close={() => setOpen(false)}
      />
    </div>
  );
};

export default NavBar;
