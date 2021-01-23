import React from 'react';

import {
  fetchHolds,
  fetchProblems,
  upsertHolds,
  createProblem,
  deleteProblem,
} from '../api/HomeWallApi';
import HomeWall from '../components/HomeWall';

class HomeWallContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      holds: [],
      problems: [],
    };

    this.updateHolds = this.updateHolds.bind(this);
    this.createProblem = this.createProblem.bind(this);
    this.deleteProblem = this.deleteProblem.bind(this);
  }

  componentDidMount() {
    return fetchProblems().then((problems) => {
      return fetchHolds().then((holds) =>
        this.setState({
          problems,
          holds: holds,
          loading: false,
        }),
      );
    });
  }

  createProblem(problem) {
    return createProblem(problem).then((createdProblem) =>
      this.setState({
        problems: [createdProblem, ...this.state.problems],
      }),
    );
  }

  deleteProblem(uuid) {
    const { problems } = this.state;

    return deleteProblem(uuid).then(() =>
      this.setState({
        problems: problems.filter((p) => p.uuid !== uuid),
      }),
    );
  }

  updateHolds(holds) {
    return upsertHolds(holds).then((holds) =>
      this.setState({
        holds,
      }),
    );
  }

  render() {
    return (
      <HomeWall
        {...this.props}
        problems={this.state.problems}
        holds={this.state.holds}
        createProblem={this.createProblem}
        deleteProblem={this.deleteProblem}
        updateHolds={this.updateHolds}
        loading={this.state.loading}
      />
    );
  }
}

export default HomeWallContainer;
