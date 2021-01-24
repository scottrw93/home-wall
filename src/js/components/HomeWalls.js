import React, { useState } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import { Container, CircularProgress } from '@material-ui/core';

import NavBar from './nav/NavBar';
import HomeWall from './HomeWall';
import WallUploaderContainer from './views/WallUploader';

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
  createWall,
  loading,
  onLoginChange,
}) => {
  const classes = useStyles();

  const [page, setPage] = useState('wall');
  const [wall, changeWall] = useState(null);
  const defaultWall = walls[0] || {};
  const selectedWall = wall || defaultWall;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <NavBar
          wall={selectedWall}
          walls={walls}
          changeWall={changeWall}
          onLoginChange={onLoginChange}
          setPage={setPage}
        />
        <Container maxWidth="sm">
          {loading ? (
            <Loading />
          ) : (
            <div>
              {page === 'wall' && (
                <HomeWall
                  createProblem={createProblem}
                  deleteProblem={deleteProblem}
                  problems={problems.filter((p) => p.wallUuid === selectedWall.uuid)}
                  wall={selectedWall}
                />
              )}
              {page === 'create' && (
                <WallUploaderContainer
                  createWall={(toCreate) =>
                    createWall(toCreate).then((createdWall) => {
                      changeWall(createdWall);
                      setPage('wall');
                    })
                  }
                />
              )}
            </div>
          )}
        </Container>
      </main>
    </div>
  );
};

export default HomeWalls;
