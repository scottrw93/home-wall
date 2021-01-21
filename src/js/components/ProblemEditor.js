import React from 'react';
import Board from './Board';

import { makeStyles } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';

import { fontGrades, toFont } from '../utils/Grades';

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
}));

const ProblemEditor = ({ selectedHolds, clickHold, saveProblem, cancel }) => {
  const classes = useStyles();

  const [grade, setGrade] = React.useState(5);
  const [name, setName] = React.useState(null);
  const [author, setAuthor] = React.useState('Scott Williams');
  const disabled = selectedHolds.length < 3 || !name || !author || !grade;

  return (
    <div className={classes.root}>
      <Board onClick={clickHold} holds={selectedHolds} />
      <div>
        <TextField
          className={classes.formControl}
          label="Problem Name"
          variant="outlined"
          onChange={({ target: { value } }) => setName(value)}
        />
        <TextField
          className={classes.formControl}
          label="Author"
          defaultValue={author}
          variant="outlined"
          onChange={({ target: { value } }) => setAuthor(value)}
        />

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>Grade</InputLabel>
          <Select value={grade} onChange={({ target: { value } }) => setGrade(value)} label="Grade">
            {Object.keys(fontGrades).map((grade) => (
              <MenuItem value={grade}>{toFont(grade)}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <Button
          className={classes.formControl}
          variant="contained"
          color="primary"
          onClick={() =>
            saveProblem({
              name,
              grade,
              author,
              holds: selectedHolds,
            })
          }
          disabled={disabled}
        >
          Save problem
        </Button>
        <Button
          className={classes.formControl}
          variant="contained"
          color="secondary"
          onClick={cancel}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ProblemEditor;
