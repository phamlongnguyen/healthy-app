import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const CircleCanvas = ({ percentage, value }) => {
  const canvasRef = useRef(null);

  const drawCircle = (percentage, value) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const radius = 100;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'transparent';
    ctx.stroke();

    const startAngle = -Math.PI / 2;
    const endAngle = Math.PI * 2 * (percentage / 100) - Math.PI / 2;

    ctx.save();
    ctx.shadowColor = '#FC7400';
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#FC7400';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#fff';
    ctx.stroke();

    const paddingCenter =
      (value.length / 2 + percentage.toString().length / 2) * 8;

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '25px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${percentage}%`, centerX + paddingCenter, centerY);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '18px Arial';
    ctx.fillText(value, centerX - paddingCenter, centerY + 2);
  };

  useEffect(() => {
    drawCircle(percentage, value);
  }, [percentage, value]);
  return (
    <div className="circle-canvas">
      <canvas ref={canvasRef} width={300} height={300} />
    </div>
  );
};

CircleCanvas.propTypes = {
  value: PropTypes.string,
  percentage: PropTypes.number,
};
export default CircleCanvas;
