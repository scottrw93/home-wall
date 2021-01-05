import React from 'react';
import Board from './Board';

const BoardEditor = ({ holds, handleClick, createHold, saveBoard }) => (
  <div className="home-wall-creator">
    <div className="home-wall">
      <Board onClick={handleClick} holds={holds} />
    </div>
    <button onClick={createHold}>Create hold</button>
    <button onClick={saveBoard}>Save board</button>
  </div>
);

class BoardEditorContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      points: [],
      holds: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.createHold = this.createHold.bind(this);
  }

  handleClick({ x, y }) {
    this.setState({
      points: [...this.state.points, { x, y }],
    });
  }

  createHold() {
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
      <BoardEditor
        holds={this.state.holds}
        handleClick={this.handleClick}
        createHold={this.createHold}
        saveBoard={() => updateHolds(this.state.holds)}
      />
    );
  }
}

export default BoardEditorContainer;
