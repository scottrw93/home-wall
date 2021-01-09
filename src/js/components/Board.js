import React from 'react';

import wall from '../../media/wall.jpg';

const WIDTH = 600;
const PIXEL_RATIO =
  window.matchMedia && window.matchMedia('screen and (max-width: 900px)').matches
    ? window.devicePixelRatio * 2
    : window.devicePixelRatio;

const SCALE = window.matchMedia
  ? window.matchMedia('screen and (max-width: 600px)').matches
    ? 2.1
    : window.matchMedia('screen and (max-width: 900px)').matches
    ? 1.5
    : 1
  : 1;

const pointAt = (corrodinate) => (corrodinate / SCALE) * PIXEL_RATIO;

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
      const height = Math.floor(wallImg.height / (wallImg.width / WIDTH) / SCALE);
      const width = Math.floor(WIDTH / SCALE);

      ref.width = width * PIXEL_RATIO;
      ref.height = height * PIXEL_RATIO;

      ref.style.width = `${width}px`;
      ref.style.height = `${height}px`;

      context.drawImage(wallImg, 0, 0, ref.width, ref.height);
      context.lineWidth = 1 * PIXEL_RATIO;
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

            onClick({ x: x * SCALE, y: y * SCALE });
          }
        }}
      />
    );
  }
}

export default Board;
