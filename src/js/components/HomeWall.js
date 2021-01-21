import React from 'react';

import ProblemList from './ProblemList';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ProblemEditorContainer from '../containers/ProblemEditorContainer';
import { Container } from '@material-ui/core';
import AddProblemButton from './AddProblemButton';
import NavBar from './NavBar';

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
}));

const HomeWall = ({ problems, holds, createProblem, deleteProblem, loading, updateHolds }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [page, setPage] = React.useState('list');

  if (loading) {
    return <div />;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <NavBar />
        <Container maxWidth="sm">
          {page === 'list' && (
            <React.Fragment>
              <ProblemList problems={problems} deleteProblem={deleteProblem} />
              <AddProblemButton showCreate={page === 'list'} onCreate={() => setPage('create')} />
            </React.Fragment>
          )}
          {page === 'create' && (
            <ProblemEditorContainer
              holds={holds}
              createProblem={(problem) => createProblem(problem) && setPage('list')}
              cancel={() => setPage('list')}
            />
          )}
        </Container>
      </main>
    </div>
  );
};

export default HomeWall;
