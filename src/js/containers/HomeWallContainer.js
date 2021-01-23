import React from 'react';

import {
  fetchWalls,
  fetchProblems,
  createProblem,
  deleteProblem,
} from '../api/HomeWallApi';
import HomeWall from '../components/HomeWall';

class HomeWallContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      walls: [],
      problems: [],
    };

    this.createProblem = this.createProblem.bind(this);
    this.deleteProblem = this.deleteProblem.bind(this);
  }

  componentDidMount() {
    return fetchProblems().then((problems) => {
      return fetchWalls().then((walls) =>
        this.setState({
          problems,
          walls: walls,
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

  render() {
    return (
      <HomeWall
        {...this.props}
        problems={this.state.problems}
        holds={(this.state.walls[0] || { holds: [] }).holds}
        createProblem={this.createProblem}
        deleteProblem={this.deleteProblem}
        loading={this.state.loading}
      />
    );
  }
}

export default HomeWallContainer;
