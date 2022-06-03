import propTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ text }) => {
  return <h2 className={s.Notification}>{text}</h2>;
};

Notification.propTypes = {
  text: propTypes.string.isRequired,
};
export default Notification;
