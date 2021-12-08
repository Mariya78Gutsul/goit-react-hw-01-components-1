import s from './FriendListItem.module.css';

const FriendListItem = props => (
  <li className={s.item}>
    <span className={props.isOnline ? s.online : s.offline}></span>
    <img className={s.avatar} src={props.avatar} alt="User avatar" width="48" />
    <p className={s.name}>{props.name}</p>
  </li>
);

export default FriendListItem;
