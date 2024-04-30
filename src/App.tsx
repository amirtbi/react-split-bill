import "./App.css";
import FriendsList from "./FriendsList";
import SplitBill from "./Bill";
import AddFriendForm from "./FormAddFriend";
import Button from "./Button";
import { useState } from "react";
interface FriendsProps {
  id: number;
  friendName: string;
  avatar: string;
  balance: number;
}
function App() {
  const [addingFriendIsOpen, setAddFriendStatus] = useState<boolean>(true);
  const [friends, setFriends] = useState<FriendsProps[]>([]);

  const addFriend = (friend: { url: string; name: string }) => {
    console.log("friend", friend);
    const copiedFriens = friends.slice();
    const newFriend = {
      friendName: friend.name,
      avatar: friend.url,
      balance: 0,
      id: Number(new Date().toISOString()),
    };
    setFriends(() => [...copiedFriens, { ...newFriend }]);
  };
  const friendsList = [
    {
      id: 1,
      friendName: "Jane",
      avatar: "https://mighty.tools/mockmind-api/content/human/7.jpg",
      balance: -7,
    },
    {
      id: 2,
      friendName: "Jane",
      avatar: "https://mighty.tools/mockmind-api/content/human/7.jpg",
      balance: 10,
    },
  ];
  return (
    <>
      <div className="app">
        <div>
          <FriendsList friends={friends} />
          {addingFriendIsOpen && <AddFriendForm onAddFriend={addFriend} />}
          <Button
            onClick={() => setAddFriendStatus((isOpen) => !isOpen)}
            style={{ width: "100%" }}
          >
            {addingFriendIsOpen ? "Close" : "Add friend"}
          </Button>
        </div>
        <SplitBill />
      </div>
    </>
  );
}

export default App;
