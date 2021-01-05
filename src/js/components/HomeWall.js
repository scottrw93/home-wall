import React from 'react';
import { fetchHolds, fetchProblems, upsertHolds, createProblem } from '../api/HomeWallApi';
import BoardEditor from './BoardEditor';
import ProblemEditor from './ProblemEditor';
import ProblemList from './ProblemList';

class HomeWall extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      holds: [],
    };

    this.updateHolds = this.updateHolds.bind(this);
    this.createProblem = this.createProblem.bind(this);
  }

  componentDidMount() {
    this.setState({
      holds: fetchHolds(),
      problems: fetchProblems(),
    });
  }

  createProblem(holds) {
    this.setState({
      problems: [ createProblem(holds), ...this.state.problems],
    });
  }

  updateHolds(holds) {
    this.setState({
      holds: upsertHolds(holds),
    });
  }

  render() {
    const { holds, problems } = this.state;

    if (holds.length === 0) {
      return (
        <div>
          <BoardEditor updateHolds={this.updateHolds} />
        </div>
      );
    }

    return (
      <div>
        <ProblemEditor allHolds={holds} createProblem={this.createProblem} />
        <ProblemList problems={problems} />
      </div>
    );
  }
}

export default HomeWall;

HomeWall.propTypes = {};
