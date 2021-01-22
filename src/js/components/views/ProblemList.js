import React from 'react';
import Board from '../Board';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { toFont } from '../../utils/Grades';

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
    '& div:hover': {
      cursor: 'pointer',
    },
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
}));

const ProblemList = ({
  problems,
  openProblem,
  filters = {
    name: null,
    grade: null,
    author: null,
  },
}) => {
  const classes = useStyles();

  if (problems.length === 0) {
    return <div className={classes.root}>No problems created yet</div>;
  }

  return (
    <div className={classes.root}>
      {problems
        .filter(
          ({ name }) =>
            !filters.name || name.toLowerCase().indexOf(filters.name.toLowerCase()) > -1,
        )
        .filter(
          ({ author }) =>
            !filters.author || author.toLowerCase().indexOf(filters.author.toLowerCase()) > -1,
        )
        .filter(
          ({ grade }) =>
            !filters.grade || (grade <= filters.grade.lte && grade >= filters.grade.gte),
        )
        .map(({ uuid, holds, name, grade, author }) => (
          <div key={name} className={classes.card} onClick={() => openProblem(uuid)}>
            <div>
              <Board holds={holds} />
              <div className={classes.overlay}>
                <div className={classes.description}>
                  <Box display="flex" p={1}>
                    <Box p={1} flexGrow={1}>
                      <Typography variant="h5">{`${name} ${toFont(grade)}`}</Typography>
                      <Typography variant="body1">{`by: ${author}`}</Typography>
                    </Box>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProblemList;
