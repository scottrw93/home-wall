import React from 'react';
import { fetchHolds, fetchProblems, upsertHolds, createProblem } from '../api/HomeWallApi';
import ProblemEditor from './ProblemEditor';
import ProblemList from './ProblemList';
import BoardEditor from './BoardEditor';

import CreateIcon from '@material-ui/icons/Create';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListIcon from '@material-ui/icons/List';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const SideBar = ({ page, setPage }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button onClick={() => setPage('create')} selected={page === 'create'}>
          <ListItemIcon>
            <CreateIcon />
          </ListItemIcon>
          <ListItemText primary={'Create problem'} />
        </ListItem>
        <ListItem button onClick={() => setPage('list')} selected={page === 'list'}>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary={'Existing problems'} />
        </ListItem>
      </List>
    </div>
  );
};

const TopBar = ({ fullWidth = false, handleDrawerToggle }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" className={fullWidth ? null : classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Home Wall
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const HomeWall = ({ problems, holds, createProblem, loading, updateHolds }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [page, setPage] = React.useState('list');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  if (holds.length === 0) {
    return (
      <div className={classes.root}>
        <CssBaseline />
        <TopBar handleDrawerToggle={handleDrawerToggle} fullWidth />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {!loading && <BoardEditor />}
        </main>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar handleDrawerToggle={handleDrawerToggle} />

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <SideBar
              setPage={(updatedPage) => {
                setPage(updatedPage);
                setMobileOpen(false);
              }}
            />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <SideBar page={page} setPage={setPage} />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {page === 'list' && <ProblemList problems={problems} />}
        {page === 'create' && <ProblemEditor allHolds={holds} createProblem={createProblem} />}
      </main>
    </div>
  );
};

class HomeWallContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      holds: [],
      problems: [],
    };

    this.updateHolds = this.updateHolds.bind(this);
    this.createProblem = this.createProblem.bind(this);
  }

  componentDidMount() {
    fetchProblems().then((problems) => {
      this.setState({
        problems,
        holds: fetchHolds(),
        loading: false,
      });
    });
  }

  createProblem(problem) {
    createProblem(problem).then((createdProblem) =>
      this.setState({
        problems: [createdProblem, ...this.state.problems],
      }),
    );
  }

  updateHolds(holds) {
    upsertHolds(holds).then((holds) =>
      this.setState({
        holds,
      }),
    );
  }

  render() {
    return (
      <HomeWall
        problems={this.state.problems}
        holds={this.state.holds}
        createProblem={this.createProblem}
        updateHolds={this.updateHolds}
        loading={this.state.loading}
      />
    );
  }
}

export default HomeWallContainer;
