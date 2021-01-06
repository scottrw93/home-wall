import React from 'react';
import Board from './Board';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

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
  gridList: {
    width: 600,
    height: 900,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
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
          <GridListTile key={name} cols={2}>
            <Board holds={holds} />
            <GridListTileBar title={`${name} ${grade}`} subtitle={<span>{`by: ${author}`}</span>} />
          </GridListTile>
        ))}
      </Container>
    </div>
  );
};

export default ProblemList;
