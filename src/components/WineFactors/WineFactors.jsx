import { color_icon, thermometer, cabernet } from '../../assets';

// const wines = [
//   {
//     id: 1,
//     name: 'Malbec',
//     color: 'Bordeaux',
//     temperature: '16/18°C',
//     type: ['Malbec', 'Cabernet Sauvignon'],
//     color_icon,
//     thermometer,
//     cabernet,
//   },
// ];

const WineColor = (props) => {
  return (
    <div className='row'>
      <img src={props.img} />
      <p>COLOR {props.color}</p>
    </div>
  );
};

export default WineColor;
