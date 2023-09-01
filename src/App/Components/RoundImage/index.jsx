import './styles.css';

export const RoundImage = ({ url, size = '50px' }) => {

  return (

    <div

      className="round-image"

      style={{ 
        backgroundImage: `url('${url}')`,
        width: size,
        height: size,
      }}
    ></div>

  );

};
