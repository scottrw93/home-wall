import React from 'react';
import HomeWall from './HomeWall';
import { inside } from './RayCasting';

class ProblemCreator extends React.PureComponent {
  constructor(props) {
    super(props);

    const allHolds = JSON.parse(localStorage.getItem('home-wall-1')) || [];

    this.state = {
      allHolds,
      selectedHolds: [],
    };

    this.handleClick = this.handleClick.bind(this);
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

  render() {
    const { selectedHolds } = this.state;

    return (
      <div className="home-wall-creator">
        <div className="home-wall">
          <HomeWall onClick={this.handleClick} holds={selectedHolds} />
        </div>
      </div>
    );
  }
}

export default ProblemCreator;

ProblemCreator.propTypes = {};
