import React from 'react';
import Board from './Board';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

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
    return <div className={classes.root}>No problems created yet</div>;
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={578} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">All problems</ListSubheader>
        </GridListTile>
        {problems.map(({ holds, name, grade, author }) => (
          <GridListTile key={name} cols={2}>
            <Board holds={holds} />
            <GridListTileBar title={`${name} ${grade}`} subtitle={<span>{`by: ${author}`}</span>} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default ProblemList;
