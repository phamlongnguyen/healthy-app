import { useNavigate, useRouteError } from 'react-router-dom';
import './styles.scss';
import { Button } from '@mui/material';
export default function ErrorPage() {
  const navigate = useNavigate();

  const error = useRouteError();
  const goBack = () => {
    navigate('/');
  };
  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button variant="contained" onClick={goBack}>
        Back to Home
      </Button>
    </div>
  );
}
