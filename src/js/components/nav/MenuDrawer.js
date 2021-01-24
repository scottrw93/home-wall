import React from 'react';
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

const MenuDrawer = ({ walls, open, close }) => {
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
          <ListItem button>
              <ListItemText primary="Julia's wall" />
            </ListItem>
            {walls.map(({ name }) => (
              <ListItem button key={name}>
                <ListItemText primary={name} />
              </ListItem>
            ))}
                   <Divider />
            <ListItem button>
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
