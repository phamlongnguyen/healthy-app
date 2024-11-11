import { CircularProgress } from '@mui/material';
import './styles.scss';
import PropTypes from 'prop-types';

const ButtonGradient = ({ loading, label, onClick }) => {
  return (
    <button className="button-gradient" onClick={onClick}>
      {loading ? <CircularProgress size={24} /> : label}
    </button>
  );
};

ButtonGradient.propTypes = {
  loading: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonGradient;
