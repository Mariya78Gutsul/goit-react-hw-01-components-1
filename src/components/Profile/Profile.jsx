import s from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = props => {
  const { username, tag, location, avatar, stats } = props;

  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} />

        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        {Object.entries(stats).map(([label, quantyty]) => {
          return (
            <li key={label} className="s.itemInfo">
              <span className={s.label}>{label}</span>
              <span className={s.quantyty}>{quantyty}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
export default Profile;
