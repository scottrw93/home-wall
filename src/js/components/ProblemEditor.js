import React from 'react';
import Board from './Board';

import { Button } from '@material-ui/core';
import { inside } from '../utils/RayCasting';

const ProblemEditor = ({ selectedHolds, wallKey, addHold, saveProblem }) => (
  <div className="home-wall-creator">
    <div className="home-wall">
      <Board key={wallKey} onClick={addHold} holds={selectedHolds} />
    </div>
    <Button variant="contained" color="primary" onClick={saveProblem}>
      Save problem
    </Button>
  </div>
);

class ProblemEditorContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedHolds: [],
      wallKey: 0,
    };

    this.addHold = this.addHold.bind(this);
    this.saveProblem = this.saveProblem.bind(this);
  }

  addHold({ x, y }) {
    const { allHolds } = this.props;
    const { selectedHolds } = this.state;

    allHolds.forEach((hold) => {
      if (inside({ x, y }, hold)) {
        if (selectedHolds.indexOf(hold) === -1) {
          this.setState({
            selectedHolds: [...selectedHolds, hold],
          });
        }
      }
    });
  }

  saveProblem() {
    const { createProblem } = this.props;

    createProblem(this.state.selectedHolds);

    this.setState({
      selectedHolds: [],
      wallKey: this.state.wallKey + 1, //TODO: hack to force rerender, refactor
    });
  }

  render() {
    const { selectedHolds, wallKey } = this.state;

    return (
      <ProblemEditor
        selectedHolds={selectedHolds}
        wallKey={wallKey}
        addHold={this.addHold}
        saveProblem={this.saveProblem}
      />
    );
  }
}

export default ProblemEditorContainer;
