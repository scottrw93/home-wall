import React, { useContext } from 'react';
import Board from '../Board';

import { makeStyles } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';

import { fontGrades, toFont } from '../../utils/Grades';
import { UserContext } from '../../context/UserContext';

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
  const user = useContext(UserContext);

  const disabled = selectedHolds.length < 3 || !name || !grade;

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

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>Grade</InputLabel>
          <Select
            value={grade}
            onChange={({ target: { value } }) => setGrade(value)}
            label="Grade"
          >
            {Object.keys(fontGrades).map((grade) => (
              <MenuItem key={grade} value={grade}>
                {toFont(grade)}
              </MenuItem>
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
              author: user.name,
              holds: selectedHolds,
              wallUuid: '813d0573-9640-4643-94d5-ecf3d512db4e',
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
