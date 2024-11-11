import { IconCup, IconForkKnife } from '../../assets/icons';
import './styles.scss';

const LIST_ITEM = [
  {
    label: 'Morning',
    icon: <IconForkKnife />,
  },
  {
    label: 'Lunch',
    icon: <IconForkKnife />,
  },
  {
    label: 'Dinner',
    icon: <IconForkKnife />,
  },
  {
    label: 'Snack',
    icon: <IconCup />,
  },
];

const InputTransitionButton = () => {
  return (
    <div className="input-transition-button">
      {LIST_ITEM.map(item => {
        return (
          <div className="input-transition-button__hexagon" key={item.label}>
            {item.icon}
            <p>{item.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default InputTransitionButton;
