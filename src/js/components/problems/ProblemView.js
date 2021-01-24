import React, { useContext } from 'react';
import Board from '../Board';

import { makeStyles } from '@material-ui/core/styles';

import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';

import Grid from '@material-ui/core/Grid';
import { IconButton, Typography } from '@material-ui/core';
import { toFont } from '../../utils/Grades';
import { UserContext } from '../../context/UserContext';
import { canDeleteProblem } from '../../auth/Scopes';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  actions: {
    backgroundColor: theme.palette.background.paper,
    '& svg': {
      margin: theme.spacing(1.5),
    },
    '& svg:hover': {
      cursor: 'pointer',
    },
    '& hr': {
      margin: theme.spacing(0, 0.5),
    },
  },
  header: {
    paddingBottom: 5,
  },
}));

const Header = ({ name, grade, author, cancel }) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h5" component="h2">
            {`${name} ${toFont(grade)}`}
          </Typography>
          <Typography color="textSecondary">{`by ${author}`}</Typography>
        </Grid>
        <Grid item>
          <IconButton aria-label="back" onClick={cancel}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

const ProblemView = ({
  problem: { author, holds, uuid, name, grade },
  deleteProblem,
  cancel,
}) => {
  const classes = useStyles();
  const user = useContext(UserContext);

  return (
    <div className={classes.root}>
      <div>
        <Header name={name} grade={grade} author={author} cancel={cancel} />
        <Board holds={holds} />
        {canDeleteProblem(user, author) && (
          <Grid
            container
            alignItems="center"
            direction="row"
            justify="flex-end"
            className={classes.actions}
          >
            <DeleteIcon aria-label="delete" onClick={() => deleteProblem(uuid)} />
          </Grid>
        )}
      </div>
    </div>
  );
};

export default ProblemView;
