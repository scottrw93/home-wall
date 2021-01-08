import React from 'react';

import wall from '../../media/wall.jpg';

const WIDTH = 600;
const SCREEN_FACTOR = window.matchMedia
  ? window.matchMedia('screen and (max-width: 600px)').matches
    ? 2
    : 1
  : 1;

const pointAt = (corrodinate) => (corrodinate / SCREEN_FACTOR) * window.devicePixelRatio;

const drawDot = (x, y, context) => context.strokeRect(pointAt(x), pointAt(y), 1, 1);

const drawHolds = (holds, context) => {
  holds.forEach((points) => {
    context.beginPath();

    const { x: x0, y: y0 } = points[0];

    context.moveTo(pointAt(x0), pointAt(y0));

    points.forEach(({ x, y }) => context.lineTo(pointAt(x), pointAt(y)));
    context.lineTo(pointAt(x0), pointAt(y0));

    context.stroke();
    context.closePath();
  });
};

class Board extends React.PureComponent {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const { holds } = this.props;
    const context = this.canvasRef.current.getContext('2d');
    const wallImg = new Image();

    wallImg.src = wall;

    wallImg.onload = () => {
      const height = wallImg.height / (wallImg.width / WIDTH) / SCREEN_FACTOR;
      const width = WIDTH / SCREEN_FACTOR;

      this.canvasRef.current.width = width * window.devicePixelRatio;
      this.canvasRef.current.height = height * window.devicePixelRatio;

      this.canvasRef.current.style.width = `${width}px`;
      this.canvasRef.current.style.height = `${height}px`;

      context.drawImage(wallImg, 0, 0, this.canvasRef.current.width, this.canvasRef.current.height);
      context.lineWidth = 2;
      context.strokeStyle = '#FFFFFF';

      drawHolds(holds, context);
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.holds !== this.props.holds) {
      drawHolds(this.props.holds, this.canvasRef.current.getContext('2d'));
    }
  }

  render() {
    const { onClick, dotOnClick = false } = this.props;

    return (
      <canvas
        ref={this.canvasRef}
        onMouseDown={({ clientX, clientY }) => {
          if (onClick) {
            const context = this.canvasRef.current.getContext('2d');
            const canvas = this.canvasRef.current.getBoundingClientRect();

            const x = clientX - canvas.left;
            const y = clientY - canvas.top;

            if (dotOnClick) {
              drawDot(x, y, context);
            }

            onClick({ x: x * SCREEN_FACTOR, y: y * SCREEN_FACTOR });
          }
        }}
      />
    );
  }
}

export default Board;
