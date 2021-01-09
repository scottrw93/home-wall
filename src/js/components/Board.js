import React from 'react';

import wall from '../../media/wall.jpg';
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

    this.state = {
      img: new Image(),
    };
  }

  componentDidMount() {
    const { img } = this.state;
    const { holds } = this.props;
    const ref = this.canvasRef.current;
    const context = ref.getContext('2d');

    img.src = wall;

    this.setState({
      img,
    });

    img.onload = () => {
      const height = Math.floor(img.height / (img.width / WIDTH) / SCALE);
      const width = Math.floor(WIDTH / SCALE);

      ref.width = width * PIXEL_RATIO;
      ref.height = height * PIXEL_RATIO;

      ref.style.width = `${width}px`;
      ref.style.height = `${height}px`;

      context.drawImage(img, 0, 0, ref.width, ref.height);
      context.lineWidth = 1 * PIXEL_RATIO;
      context.strokeStyle = '#FFFFFF';

      drawHolds(holds, context);
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
        const ref = this.canvasRef.current;
        context.clearRect(0, 0, ref.width, ref.height);
        context.drawImage(img, 0, 0, ref.width, ref.height);
        drawHolds(holds, context);
      }
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
