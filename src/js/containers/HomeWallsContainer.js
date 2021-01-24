import React from 'react';

import {
  fetchWalls,
  fetchProblems,
  createProblem,
  deleteProblem,
  createWall,
} from '../api/HomeWallApi';
import HomeWalls from '../components/HomeWalls';

class HomeWallsContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      walls: [],
      problems: [],
    };

    this.createProblem = this.createProblem.bind(this);
    this.deleteProblem = this.deleteProblem.bind(this);
    this.createWall = this.createWall.bind(this);
  }

  componentDidMount() {
    return fetchProblems().then((problems) => {
      return fetchWalls().then((walls) =>
        this.setState({
          problems,
          walls,
          loading: false,
        }),
      );
    });
  }

  createWall(wall) {
    return createWall(wall).then((createdWall) =>
      this.setState({
        walls: [...this.state.walls, createdWall],
      }),
    );
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
      <HomeWalls
        {...this.props}
        createProblem={this.createProblem}
        deleteProblem={this.deleteProblem}
        createWall={this.createWall}
        problems={this.state.problems}
        walls={this.state.walls}
        loading={this.state.loading}
      />
    );
  }
}

export default HomeWallsContainer;
