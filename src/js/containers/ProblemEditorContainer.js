import React from 'react';
import ProblemEditor from '../components/problems/ProblemEditor';

import { inside } from '../utils/RayCasting';
import { containsHold, sameHold } from '../utils/Holds';

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
    const {
      wall: { holds },
    } = this.props;
    const { selectedHolds } = this.state;

    holds.forEach((hold) => {
      if (inside({ x, y }, hold.points)) {
        const selectedHold = containsHold(selectedHolds, hold);
        if (selectedHold) {
          this.setState({
            selectedHolds: selectedHold.tagged
              ? selectedHolds.filter((toDelete) => !sameHold(toDelete, hold))
              : [
                  ...selectedHolds.filter((toDelete) => !sameHold(toDelete, hold)),
                  {
                    ...selectedHold,
                    tagged: true,
                  },
                ],
          });
        } else {
          this.setState({
            selectedHolds: [...selectedHolds, hold],
          });
        }
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
