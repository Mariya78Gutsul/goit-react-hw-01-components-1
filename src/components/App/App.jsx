import s from './App.module.css';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import FriendList from '../FriendList/FriendList';
import user from '../../assets/user.json';
import data from '../../assets/data.json';
import friends from '../../assets/friends.json';
import transactions from '../../assets/transaction.json';

const App = () => {
  return (
    <div className={s.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
