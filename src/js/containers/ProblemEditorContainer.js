import React from 'react';
import ProblemEditor from '../components/problems/ProblemEditor';

import { inside } from '../utils/RayCasting';
import { sameHold } from '../utils/Holds';

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
    const { wall: {holds}, } = this.props;
    const { selectedHolds } = this.state;

    holds.forEach((hold) => {
      if (inside({ x, y }, hold.points)) {
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
        {...this.props}
        selectedHolds={selectedHolds}
        clickHold={this.clickHold}
        saveProblem={this.saveProblem}
      />
    );
  }
}

export default ProblemEditorContainer;
