import React from 'react';

import { containsHolds } from '../utils/Holds';

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

const findDistance = (a, b) =>
  Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));

const pointToTag = (points) => {
  const b = { x: WIDTH, y: WIDTH };

  return points.reduce((prev, current) =>
    findDistance(prev, b) < findDistance(current, b) ? prev : current,
  );
};

const pointAt = (corrodinate) => (corrodinate / SCALE) * PIXEL_RATIO;

const drawHolds = (holds, context) => {
  holds.forEach(({ points, tagged }) => {
    context.beginPath();

    const { x: x0, y: y0 } = points[0];

    context.moveTo(pointAt(x0), pointAt(y0));

    points.forEach(({ x, y }) => context.lineTo(pointAt(x), pointAt(y)));
    context.lineTo(pointAt(x0), pointAt(y0));

    context.stroke();

    if (tagged) {
      const toTag = pointToTag(points);

      context.moveTo(pointAt(toTag.x), pointAt(toTag.y));
      context.lineTo(pointAt(toTag.x + 10), pointAt(toTag.y + 10));
      context.stroke();
    }

    context.closePath();
  });
};

class Board extends React.PureComponent {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();

    this.state = {
      img: null,
    };
  }

  componentDidMount() {
    const { holds, src } = this.props;

    const ref = this.canvasRef.current;
    const context = ref.getContext('2d');

    const img = new Image();
    img.src = src;

    img.onload = () => {
      const height = Math.floor(img.height / (img.width / WIDTH) / SCALE);
      const width = Math.floor(WIDTH / SCALE);

      ref.width = width * PIXEL_RATIO;
      ref.height = height * PIXEL_RATIO;

      ref.style.width = `${width}px`;
      ref.style.height = `${height}px`;

      context.drawImage(img, 0, 0, ref.width, ref.height);
      context.lineWidth = 1.5 * PIXEL_RATIO;
      context.strokeStyle = '#FFFFFF';

      drawHolds(holds, context);

      this.setState({
        img,
      });
    };
  }

  componentDidUpdate(prevProps) {
    const { holds } = this.props;
    const { holds: prevHolds } = prevProps;
    const { img } = this.state;

    if (prevHolds !== holds) {
      const ref = this.canvasRef.current;
      const context = ref.getContext('2d');

      if (containsHolds(holds, prevHolds)) {
        drawHolds(holds.slice(prevHolds.length), context);
      } else {
        context.clearRect(0, 0, ref.width, ref.height);
        context.drawImage(img, 0, 0, ref.width, ref.height);
        drawHolds(holds, context);
      }
    }
  }

  render() {
    const { src, onClick } = this.props;
    const { img } = this.state;

    return (
      <React.Fragment>
        <img
          alt="board"
          style={img ? { display: 'none' } : {}}
          width={WIDTH / SCALE}
          height="auto"
          src={src}
        />
        <canvas
          style={!img ? { display: 'none' } : {}}
          ref={this.canvasRef}
          onMouseDown={({ clientX, clientY }) => {
            if (onClick) {
              const ref = this.canvasRef.current;
              const canvas = ref.getBoundingClientRect();

              const x = clientX - canvas.left;
              const y = clientY - canvas.top;

              onClick({ x: x * SCALE, y: y * SCALE });
            }
          }}
        />
      </React.Fragment>
    );
  }
}

export default Board;
