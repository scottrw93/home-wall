import React from 'react';
import HomeWall from './HomeWall';
import { inside } from './RayCasting';

class ProblemCreator extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      allHolds: JSON.parse(localStorage.getItem('home-wall-1')) || [],
      selectedHolds: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.saveProblem = this.saveProblem.bind(this);
  }

  handleClick({ x, y }) {
    const { selectedHolds } = this.state;

    this.state.allHolds.forEach((hold) => {
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
    const existingProblems = JSON.parse(localStorage.getItem('home-wall-problems')) || [];

    localStorage.setItem(
      'home-wall-problems',
      JSON.stringify([...existingProblems, this.state.selectedHolds]),
    );

    this.setState({
      selectedHolds: [],
    });
  }

  render() {
    const { selectedHolds } = this.state;

    return (
      <div className="home-wall-creator">
        <div className="home-wall">
          <HomeWall onClick={this.handleClick} holds={selectedHolds} />
        </div>
        <button onClick={this.saveProblem}>Save problem</button>
      </div>
    );
  }
}

export default ProblemCreator;

ProblemCreator.propTypes = {};
