import React from 'react';

import Board from './Board';

import { makeStyles } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

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

const BoardEditor = ({ holds, handleClick, saveBoard }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="sm">
        <div className="home-wall">
          <Board onClick={handleClick} holds={holds} />
        </div>
        <Button
          className={classes.formControl}
          variant="contained"
          color="primary"
          onClick={saveBoard}
        >
          Save board
        </Button>
      </Container>
    </div>
  );
};

class BoardEditorContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      points: [],
      holds: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.createHold = this.createHold.bind(this);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown({ metaKey, keyCode }) {
    const { holds } = this.state;

    if (metaKey && keyCode === 90 && holds.length > 0) {
      this.setState({
        holds: holds.slice(0, holds.length - 1),
      });
    } else if (keyCode === 13) {
      this.createHold();
    }
  }

  handleClick({ x, y }) {
    this.setState({
      points: [...this.state.points, { x, y }],
    });
  }

  createHold() {
    const { points } = this.state;

    if (points.length < 3) {
      return;
    }

    this.setState({
      holds: [...this.state.holds, points],
      points: [],
    });
  }

  render() {
    const { updateHolds } = this.props;

    return (
      <BoardEditor
        holds={this.state.holds}
        handleClick={this.handleClick}
        saveBoard={() => updateHolds(this.state.holds)}
      />
    );
  }
}

export default BoardEditorContainer;
