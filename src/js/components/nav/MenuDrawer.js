import React from 'react';
import logo from '../../../logo.png';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const MenuDrawer = ({ walls, open, close, setPage, changeWall }) => {
  const classes = useStyles();

  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    close();
  };

  return (
    <div>
      <Drawer anchor="left" open={open} onClose={close}>
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            <img src={logo} alt="home wall logo" />
            {walls.map((wall) => (
              <ListItem
                button
                key={wall.name}
                onClick={() => changeWall(wall) || setPage('wall') || close()}
              >
                <ListItemText primary={wall.name} />
              </ListItem>
            ))}
            <Divider />
            <ListItem button onClick={() => setPage('create') || close()}>
              <ListItemText primary="Add wall" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
