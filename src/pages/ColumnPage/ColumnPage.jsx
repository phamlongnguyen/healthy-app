import { Recommended, Topics } from '../../components';
import './styles.scss';

const ColumnPage = () => {
  return (
    <div className="column-page">
      <Recommended />
      <Topics />
    </div>
  );
};

export default ColumnPage;
