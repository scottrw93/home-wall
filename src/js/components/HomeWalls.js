import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import { Container, CircularProgress } from '@material-ui/core';

import NavBar from './nav/NavBar';
import HomeWall from './HomeWall';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    marginTop: '50%',
    marginBottom: '50%',
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.loading}>
      <CircularProgress />
    </div>
  );
};

const HomeWalls = ({
  problems,
  walls,
  createProblem,
  deleteProblem,
  loading,
  onLoginChange,
}) => {
  const classes = useStyles();
  const wall = walls[0] || {};

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <NavBar wall={wall} walls={walls} onLoginChange={onLoginChange} />
        <Container maxWidth="sm">
          {loading ? (
            <Loading />
          ) : (
            <HomeWall
              createProblem={createProblem}
              deleteProblem={deleteProblem}
              problems={problems.filter((p) => p.wallUuid === wall.uuid)}
              wall={wall}
            />
          )}
        </Container>
      </main>
    </div>
  );
};

export default HomeWalls;
