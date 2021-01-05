import React from 'react';
import Board from './Board';

class ProblemList extends React.PureComponent {
  render() {
    const { problems } = this.props;
    return (
      <div className="home-wall-problems">
        {problems.map((problem) => (
          <div key={JSON.stringify(problem)} className="home-wall">
            <Board holds={problem} />
          </div>
        ))}
      </div>
    );
  }
}

export default ProblemList;

ProblemList.propTypes = {};
