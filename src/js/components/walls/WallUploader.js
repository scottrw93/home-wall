import React, { useState } from 'react';

import Board from '../Board';

import { makeStyles } from '@material-ui/core/styles';

import { Button, Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import ImageUpload from './ImageUpload';

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

const WallUploader = ({ holds = [], handleClick, saveBoard }) => {
  const classes = useStyles();

  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
  const disabled = !name || holds.length < 10;

  return (
    <div className={classes.root}>
      {image && <Board src={image} onClick={handleClick} holds={holds} />}
      {!image && <ImageUpload setImage={setImage} />}
      <div>
        <TextField
          className={classes.formControl}
          label="Wall Name"
          variant="outlined"
          onChange={({ target: { value } }) => setName(value)}
        />
      </div>
      <div>
        <Button
          className={classes.formControl}
          variant="contained"
          color="primary"
          disabled={disabled}
          onClick={() =>
            saveBoard({
              name,
              holds,
              image,
            })
          }
        >
          Save wall
        </Button>
      </div>
      <Typography>
        Needs to be done on a computer. To add a hold to the wall, click multiple
        times around the outline of a hold to create a polygon shape. Once you do
        this, hit the 'return/enter' key. Do this for all holds. Ctrl-z undoes
        creation of previous holds. The choose a name for your wall and save.
      </Typography>
    </div>
  );
};

class WallUploaderContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      points: [],
      holds: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.createHold = this.createHold.bind(this);
    this.saveBoard = this.saveBoard.bind(this);

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
    const { points } = this.state;

    this.setState({
      points: [...points, { x, y }],
    });
  }

  createHold() {
    const { points, holds } = this.state;

    if (points.length < 3) {
      return;
    }

    this.setState({
      holds: [...holds, { points }],
      points: [],
    });
  }

  saveBoard({ holds, name, image }) {
    const { createWall } = this.props;

    createWall({
      name,
      image,
      holds,
    });
  }

  render() {
    const { holds } = this.state;
    return (
      <WallUploader
        holds={holds}
        handleClick={this.handleClick}
        saveBoard={this.saveBoard}
      />
    );
  }
}

export default WallUploaderContainer;
