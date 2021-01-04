import React from 'react';
import HomeWall from './HomeWall';

class Creator extends React.PureComponent {
  constructor(props) {
    super(props);

    this.storage = window.localStorage;

    const holds = JSON.parse(localStorage.getItem('home-wall-1')) || [];

    this.state = {
      points: [],
      holds,
    };

    this.handleClick = this.handleClick.bind(this);
    this.saveHold = this.saveHold.bind(this);
    this.saveWall = this.saveWall.bind(this);
  }

  handleClick({ x, y }) {
    this.setState({
      points: [...this.state.points, { x, y }],
    });
  }

  saveHold() {
    const { points } = this.state;

    if (points.length < 3) {
      return;
    }

    this.setState({
      holds: [...this.state.holds, points],
      points: [],
    });
  }

  saveWall() {
    //localStorage.setItem('home-wall-1', JSON.stringify(this.state.holds));
  }

  render() {
    return (
      <div className="home-wall-creator">
        <div className="home-wall">
          <HomeWall onClick={this.handleClick} holds={this.state.holds} />
        </div>
        <button onClick={this.saveHold}>Create hold</button>
        <button onClick={this.saveWall}>Save wall</button>
      </div>
    );
  }
}

export default Creator;

Creator.propTypes = {};
