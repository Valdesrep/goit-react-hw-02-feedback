import propTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={s.Section}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
};
export default Section;