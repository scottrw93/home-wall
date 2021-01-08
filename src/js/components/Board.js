import React from 'react';

import wall from '../../media/wall.jpg';

const WIDTH = 600;
const SCREEN_FACTOR = window.matchMedia
  ? window.matchMedia('screen and (max-width: 600px)').matches
    ? 2.1
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
    const ref = this.canvasRef.current;
    const context = ref.getContext('2d');
    const wallImg = new Image();

    wallImg.src = wall;

    wallImg.onload = () => {
      const height = wallImg.height / (wallImg.width / WIDTH) / SCREEN_FACTOR;
      const width = WIDTH / SCREEN_FACTOR;

      ref.width = width * window.devicePixelRatio;
      ref.height = height * window.devicePixelRatio;

      ref.style.width = `${width}px`;
      ref.style.height = `${height}px`;

      context.drawImage(wallImg, 0, 0, ref.width, ref.height);
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
            const ref = this.canvasRef.current;
            const context = ref.getContext('2d');
            const canvas = ref.getBoundingClientRect();

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
