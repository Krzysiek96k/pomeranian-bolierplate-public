import startSVG from '../../Images/star.svg';

export function StarIcon({ size = '20px' }) {
  return (
    <img src={startSVG} alt="start" style={{ height: size, width: size }}></img>
  );
}