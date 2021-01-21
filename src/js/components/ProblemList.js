import React from 'react';
import Board from './Board';

import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Box } from '@material-ui/core';

import { toFont } from '../utils/Grades';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
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
    padding: '10px 20px 10px 20px',
  },
  icons: {
    color: 'white',
  },
}));

const ProblemList = ({ problems, deleteProblem }) => {
  const classes = useStyles();

  if (problems.length === 0) {
    return <div className={classes.root}>No problems created yet</div>;
  }

  return (
    <div className={classes.root}>
      {problems.map(({ uuid, holds, name, grade, author }) => (
        <div key={name} className={classes.card}>
          <Board holds={holds} />
          <div className={classes.overlay}>
            <div className={classes.description}>
              <Box display="flex" p={1}>
                <Box p={1} flexGrow={1}>
                  <Typography variant="h5">{`${name} ${toFont(grade)}`}</Typography>
                  <Typography variant="body1">{`by: ${author}`}</Typography>
                </Box>
                <Box p={1}>
                  <IconButton
                    aria-label="delete"
                    className={classes.icons}
                    onClick={() => deleteProblem(uuid)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProblemList;
