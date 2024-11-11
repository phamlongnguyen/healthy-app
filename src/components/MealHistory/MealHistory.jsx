import M01Jpg from '../../assets/images/m01.jpg';
import D01Jpg from '../../assets/images/d01.jpg';
import L03Jpg from '../../assets/images/l03.jpg';
import L01Jpg from '../../assets/images/l01.jpg';
import M03Jpg from '../../assets/images/m03.jpg';
import L02Jpg from '../../assets/images/l02.jpg';
import D02Jpg from '../../assets/images/d02.jpg';
import S01Jpg from '../../assets/images/s01.jpg';

import './styles.scss';
const MOCK_DATA = [
  {
    id: 1,
    image: M01Jpg,
    date: '05.21',
    type: 'Morning',
  },
  { id: 2, image: L03Jpg, date: '05.21', type: 'Lunch' },
  {
    id: 3,
    image: D01Jpg,
    date: '05.21',
    type: 'Dinner',
  },
  { id: 4, image: L01Jpg, date: '05.21', type: 'Snack' },
  {
    id: 5,
    image: M03Jpg,
    date: '05.20',
    type: 'Morning',
  },
  { id: 6, image: L02Jpg, date: '05.20', type: 'Lunch' },
  {
    id: 7,
    image: D02Jpg,
    date: '05.20',
    type: 'Dinner',
  },
  { id: 8, image: S01Jpg, date: '05.20', type: 'Snack' },
];
const MealHistory = () => {
  return (
    <div className="meat-history">
      {MOCK_DATA.map(item => {
        return (
          <div
            key={item.id}
            className="meat-history__item"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <p>{`${item.date}.${item.type}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MealHistory;
