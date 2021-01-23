import React, { useContext } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import ProblemEditorContainer from '../containers/ProblemEditorContainer';
import { Container, CircularProgress } from '@material-ui/core';
import AddProblemButton from './buttons/AddProblemButton';
import NavBar from './nav/NavBar';
import ProblemView from './views/ProblemView';
import ProblemList from './views/ProblemList';
import { UserContext } from '../context/UserContext';
import { CREATE } from '../auth/Scopes';

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

const Content = ({
  holds,
  page,
  problems,
  createProblem,
  deleteProblem,
  setPage,
}) => {
  const [problem, openProblem] = React.useState(null);
  const user = useContext(UserContext);

  if (page === 'problem') {
    return (
      <ProblemView
        problem={problems.filter((p) => p.uuid === problem)[0]}
        deleteProblem={deleteProblem}
        cancel={() => setPage('list')}
      />
    );
  } else if (page === 'create') {
    return (
      <ProblemEditorContainer
        holds={holds}
        createProblem={(problem) => createProblem(problem) && setPage('list')}
        cancel={() => setPage('list')}
      />
    );
  }
  return (
    <React.Fragment>
      <ProblemList
        problems={problems}
        openProblem={(problem) => {
          openProblem(problem);
          setPage('problem');
        }}
      />
      {user.scopes.indexOf(CREATE) > -1 && (
        <AddProblemButton
          showCreate={page === 'list'}
          onCreate={() => setPage('create')}
        />
      )}
    </React.Fragment>
  );
};

const HomeWall = ({
  problems,
  holds,
  createProblem,
  deleteProblem,
  loading,
  onLoginChange,
  updateHolds,
}) => {
  const classes = useStyles();
  const [page, setPage] = React.useState('list');

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <NavBar onLoginChange={onLoginChange} />
        <Container maxWidth="sm">
          {loading ? (
            <Loading />
          ) : (
            <Content
              holds={holds}
              page={page}
              problems={problems}
              createProblem={createProblem}
              deleteProblem={deleteProblem}
              setPage={setPage}
            />
          )}
        </Container>
      </main>
    </div>
  );
};

export default HomeWall;
