import React from 'react';
import HomeWall from './HomeWall';

class ProblemList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      problems: JSON.parse(localStorage.getItem('home-wall-problems')) || [],
    };
  }

  render() {
    const { problems } = this.state;
    return (
      <div className="home-wall-problems">
        {problems.map((problem) => (
          <div className="home-wall">
            <HomeWall holds={problem} />
          </div>
        ))}
      </div>
    );
  }
}

export default ProblemList;

ProblemList.propTypes = {};
