import s from './Statistics.module.css';
import PropTypes from 'prop-types';

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{s.title}</h2>}
      <ul className={s.statList}>
        {stats.map(({ id, label, percentag }) => {
          return (
            <li
              className={s.statItem}
              key={id}
              style={{ backgroundColor: `${getRandomColor()}` }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentag}>{percentag}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percetage: PropTypes.number,
    }),
  ).isRequired,
};
export default Statistics;
