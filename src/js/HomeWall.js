import React from 'react';
import PropTypes from 'prop-types';

import wall from '../media/wall.jpg';

class HomeWall extends React.PureComponent {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const ctx = this.canvasRef.current.getContext('2d');
    const wallImg = new Image();

    wallImg.src = wall;
    wallImg.onload = () => {
      ctx.drawImage(
        wallImg,
        0,
        0,
        this.canvasRef.current.clientWidth,
        this.canvasRef.current.clientHeight,
      );
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#FFFFFF';

      this.props.holds.forEach((points) => {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.lineTo(points[0].x, points[0].y);

        ctx.stroke();
        ctx.closePath();
      });
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.holds !== this.props.holds) {
      const ctx = this.canvasRef.current.getContext('2d');

      this.props.holds.forEach((points) => {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.lineTo(points[0].x, points[0].y);

        ctx.stroke();
        ctx.closePath();
      });
    }
  }

  render() {
    const { onClick } = this.props;

    return (
      <canvas
        className="home-wall-canvas"
        height=" 578"
        width="600"
        ref={this.canvasRef}
        onMouseDown={({ clientX, clientY }) => {
          if (onClick) {
            const canvas = this.canvasRef.current.getBoundingClientRect();
            const x = clientX - canvas.left;
            const y = clientY - canvas.top;
            onClick({ x, y });
          }
        }}
      />
    );
  }
}

export default HomeWall;

HomeWall.propTypes = {
  onClick: PropTypes.func,
};
