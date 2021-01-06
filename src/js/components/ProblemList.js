import React from 'react';
import Board from './Board';

import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    position: 'relative',
    marginBottom: '50px',
    display: 'inline-block',
    backgroundColor: 'black',
  },
  overlay: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    color: 'white',
    backgroundColor: 'black',
    opacity: 0.6,
  },
  description: {
    padding: '10px 10px 10px 10px',
  },
}));

const ProblemList = ({ problems }) => {
  const classes = useStyles();

  if (problems.length === 0) {
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Container maxWidth="sm">
          <div className={classes.root}>No problems created yet</div>
        </Container>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="sm">
        {problems.map(({ holds, name, grade, author }) => (
          <div className={classes.card}>
            <Board holds={holds} />
            <div className={classes.overlay}>
              <div className={classes.description}>
                <Typography variant="h5">{`${name} ${grade}`}</Typography>
                <Typography variant="p">{`by: ${author}`}</Typography>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default ProblemList;
