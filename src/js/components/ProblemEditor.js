import React from 'react';
import Board from './Board';
import { inside } from '../utils/RayCasting';

class ProblemEditor extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedHolds: [],
      wallKey: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.saveProblem = this.saveProblem.bind(this);
  }

  handleClick({ x, y }) {
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
      <div className="home-wall-creator">
        <div className="home-wall">
          <Board key={wallKey} onClick={this.handleClick} holds={selectedHolds} />
        </div>
        <button onClick={this.saveProblem}>Save problem</button>
      </div>
    );
  }
}

export default ProblemEditor;

ProblemEditor.propTypes = {};
