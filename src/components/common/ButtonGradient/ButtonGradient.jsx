import { CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';
import './styles.scss';

const ButtonGradient = ({ loading, label, onClick }) => {
  return (
    <button className="button-gradient" onClick={onClick}>
      {loading ? <CircularProgress size={24} color="inherit" /> : label}
    </button>
  );
};

ButtonGradient.propTypes = {
  loading: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonGradient;
