import { CircularProgress } from '@mui/material';
import useMyExercise from './hook/useMyExercise';
import './styles.scss';

const MyExercise = () => {
  const { dataExercise, isLoading } = useMyExercise();
  return (
    <div className="my-exercise">
      <div className="my-exercise__top">
        <p>MY EXERCISE</p>
        <p>2021.05.21</p>
      </div>
      <div className="my-exercise__body">
        {isLoading ? (
          <div className="my-exercise__body__loading">
            <CircularProgress color="inherit" />
          </div>
        ) : (
          dataExercise.map((element, index) => {
            if (index % 2 === 0) {
              const nextItem = dataExercise[index + 1];
              return (
                <div key={element.id} className="my-exercise__body__dup-item">
                  <div className="my-exercise__body__dup-item__item">
                    <div className="my-exercise__body__dup-item__item__left">
                      <p>{element.label}</p>
                      <p>{element.value}</p>
                    </div>
                    <p>{element.time}</p>
                  </div>
                  {nextItem && (
                    <div className="my-exercise__body__dup-item__item">
                      <div className="my-exercise__body__dup-item__item__left">
                        <p>{nextItem.label}</p>
                        <p>{nextItem.value}</p>
                      </div>
                      <p>{nextItem.time}</p>
                    </div>
                  )}
                </div>
              );
            }
          })
        )}
      </div>
    </div>
  );
};

export default MyExercise;
