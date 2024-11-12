import { Grid2 } from '@mui/material';
import {
  BodyMetricsGraph,
  DateAchievementRate,
  InputTransitionButton,
  MealHistory,
} from '../../components';
import './styles.scss';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <Grid2 container className="dashboard-page__top">
        <Grid2 size={{ xs: 12, md: 4 }} className="dashboard-page__info">
          <DateAchievementRate />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <BodyMetricsGraph />
        </Grid2>
      </Grid2>
      <div className="dashboard-page__body">
        <InputTransitionButton />
        <MealHistory />
      </div>
    </div>
  );
};

export default Dashboard;
