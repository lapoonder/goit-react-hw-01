import '../components/App.css';

import userData from '../userData.json';
import friends from '../friends.json';
import Profile from './Profile/Profile.jsx';
import FriendList from './FriendList/FriendList.jsx';

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1>GoIT React HW-01</h1>
        </div>
      </header>
      <main>
        <div className="hero">
          <Profile
            name={userData.username}
            tag={userData.tag}
            location={userData.location}
            image={userData.avatar}
            stats={userData.stats}
          />
        </div>
        <div className="section">
          <FriendList friends={friends} />
        </div>
      </main>
    </>
  );
}

export default App;
