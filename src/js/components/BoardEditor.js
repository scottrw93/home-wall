import React from 'react';
import Board from './Board';

class BoardEditor extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      points: [],
      holds: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.saveHold = this.saveHold.bind(this);
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

  render() {
    const { updateHolds } = this.props;

    return (
      <div className="home-wall-creator">
        <div className="home-wall">
          <Board onClick={this.handleClick} holds={this.state.holds} />
        </div>
        <button onClick={this.saveHold}>Create hold</button>
        <button onClick={() => updateHolds(this.state.holds)}>Save wall</button>
      </div>
    );
  }
}

export default BoardEditor;

BoardEditor.propTypes = {};
