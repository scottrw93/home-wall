import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ProblemEditorContainer from '../containers/ProblemEditorContainer';
import ProblemView from './problems/ProblemView';
import ProblemList from './problems/ProblemList';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const HomeWall = ({
  problems,
  wall,
  createProblem,
  deleteProblem,
}) => {
  const classes = useStyles();

  const [page, setPage] = useState('list');
  const [problem, openProblem] = useState(null);

  return (
    <div className={classes.root}>
      {page === 'problem' && (
        <ProblemView
        wall={wall}
          problem={problems.filter((p) => p.uuid === problem)[0]}
          deleteProblem={(problem) => {
            deleteProblem(problem);
            setPage('list');
          }}
          cancel={() => setPage('list')}
        />
      )}
      {page === 'create' && (
        <ProblemEditorContainer
          wall={wall}
          createProblem={(problem) => {
            createProblem(problem);
            setPage('list');
          }}
          cancel={() => setPage('list')}
        />
      )}
      {page === 'list' && (
        <ProblemList
          wall={wall}
          problems={problems}
          openProblem={(problem) => {
            openProblem(problem);
            setPage('problem');
          }}
          addProblem={() => setPage('create')}
        />
      )}
    </div>
  );
};

export default HomeWall;
