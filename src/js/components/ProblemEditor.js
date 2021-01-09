import React from 'react';
import Board from './Board';

import { makeStyles } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';
import { inside } from '../utils/RayCasting';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import { sameHold } from '../utils/Holds';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
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

const ProblemEditor = ({ selectedHolds, clickHold, saveProblem }) => {
  const classes = useStyles();

  const [grade, setGrade] = React.useState('6B');
  const [name, setName] = React.useState(null);
  const [author, setAuthor] = React.useState('Scott Williams');
  const disabled = selectedHolds.length < 3 || !name || !author || !grade;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="sm">
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
            <Select
              value={grade}
              onChange={({ target: { value } }) => setGrade(value)}
              label="Grade"
            >
              <MenuItem value="None">None</MenuItem>
              <MenuItem value="6B">6B</MenuItem>
              <MenuItem value="7A">7A</MenuItem>
              <MenuItem value="8A">8A</MenuItem>
            </Select>
          </FormControl>
        </div>
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
      </Container>
    </div>
  );
};

class ProblemEditorContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedHolds: [],
    };

    this.clickHold = this.clickHold.bind(this);
    this.saveProblem = this.saveProblem.bind(this);
  }

  clickHold({ x, y }) {
    const { allHolds } = this.props;
    const { selectedHolds } = this.state;

    allHolds.forEach((hold) => {
      if (inside({ x, y }, hold)) {
        this.setState({
          selectedHolds:
            selectedHolds.indexOf(hold) === -1
              ? [...selectedHolds, hold]
              : selectedHolds.filter((toDelete) => !sameHold(toDelete, hold)),
        });
      }
    });
  }

  saveProblem(problem) {
    const { createProblem } = this.props;

    createProblem(problem);

    this.setState({
      selectedHolds: [],
    });
  }

  render() {
    const { selectedHolds } = this.state;

    return (
      <ProblemEditor
        selectedHolds={selectedHolds}
        clickHold={this.clickHold}
        saveProblem={this.saveProblem}
      />
    );
  }
}

export default ProblemEditorContainer;
