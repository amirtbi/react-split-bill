import "./App.css";
import FriendsList from "./FriendsList";
import SplitBill from "./Bill";
function App() {
  const friendsList = [
    {
      id: new Date().toISOString(),
      friendName: "Jane",
      avatar: "https://mighty.tools/mockmind-api/content/human/7.jpg",
    },
    {
      id: new Date().toISOString(),
      friendName: "Jane",
      avatar: "https://mighty.tools/mockmind-api/content/human/7.jpg",
    },
  ];
  return (
    <>
      <div className="app">
        <FriendsList friends={friendsList} />
        <SplitBill />
      </div>
    </>
  );
}

export default App;
