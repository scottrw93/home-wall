import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ProblemEditorContainer from '../containers/ProblemEditorContainer';
import ProblemView from './views/ProblemView';
import ProblemList from './views/ProblemList';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const HomeWall = ({
  problems,
  wall: { holds, uuid: wallUuid },
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
          problem={problems.filter((p) => p.uuid === problem)[0]}
          deleteProblem={deleteProblem}
          cancel={() => setPage('list')}
        />
      )}
      {page === 'create' && (
        <ProblemEditorContainer
          wallUuid={wallUuid}
          holds={holds}
          createProblem={(problem) => {
            createProblem(problem);
            setPage('list');
          }}
          cancel={() => setPage('list')}
        />
      )}
      {page === 'list' && (
        <ProblemList
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
