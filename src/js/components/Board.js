import React from 'react';

import wall from '../../media/wall.jpg';

const SCREEN_FACTOR = window.matchMedia
  ? window.matchMedia('screen and (max-width: 600px)').matches
    ? 2
    : 1
  : 1;

const draw = (holds, ctx, factor) => {
  holds.forEach((points) => {
    ctx.beginPath();
    ctx.moveTo(points[0].x / factor, points[0].y / factor);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x / factor, points[i].y / factor);
    }
    ctx.lineTo(points[0].x / factor, points[0].y / factor);

    ctx.stroke();
    ctx.closePath();
  });
};

class Board extends React.PureComponent {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const ctx = this.canvasRef.current.getContext('2d');
    const wallImg = new Image();

    wallImg.src = wall;
    wallImg.onload = () => {
      if (!this.canvasRef.current) {
        return;
      }
      ctx.drawImage(
        wallImg,
        0,
        0,
        this.canvasRef.current.clientWidth,
        this.canvasRef.current.clientHeight,
      );
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#FFFFFF';

      draw(this.props.holds, ctx, SCREEN_FACTOR);
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.holds !== this.props.holds) {
      const ctx = this.canvasRef.current.getContext('2d');

      draw(this.props.holds, ctx, SCREEN_FACTOR);
    }
  }

  render() {
    const { onClick } = this.props;

    return (
      <canvas
        className="home-wall-canvas"
        height={578 / SCREEN_FACTOR}
        width={600 / SCREEN_FACTOR}
        ref={this.canvasRef}
        onMouseDown={({ clientX, clientY }) => {
          if (onClick) {
            const canvas = this.canvasRef.current.getBoundingClientRect();
            console.log({ clientX, clientY, cl: canvas.left });

            const x = clientX - canvas.left;
            const y = clientY - canvas.top;
            onClick({ x: x * SCREEN_FACTOR, y: y * SCREEN_FACTOR });
          }
        }}
      />
    );
  }
}

export default Board;
